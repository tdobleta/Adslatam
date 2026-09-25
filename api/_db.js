// Persistencia sobre Postgres (Neon / Vercel Postgres): es la opción más simple
// que ya viene integrada con Vercel, soporta transacciones y no exige servidor propio.
const { neon } = require('@neondatabase/serverless');
const crypto = require('crypto');

function sqlClient() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    const err = new Error('DATABASE_URL no está configurada');
    err.code = 'CONFIG';
    throw err;
  }
  return neon(url);
}

let ready = false;
async function ensureSchema() {
  if (ready) return;
  const sql = sqlClient();
  await sql`CREATE TABLE IF NOT EXISTS orders (
    id BIGSERIAL PRIMARY KEY,
    public_token TEXT UNIQUE NOT NULL,
    email TEXT,
    payment_provider TEXT NOT NULL DEFAULT 'lemonsqueezy',
    provider_order_id TEXT UNIQUE,
    status TEXT NOT NULL DEFAULT 'pending',
    total NUMERIC(10,2) NOT NULL,
    currency TEXT NOT NULL DEFAULT 'USD',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    paid_at TIMESTAMPTZ
  )`;
  await sql`CREATE TABLE IF NOT EXISTS order_items (
    id BIGSERIAL PRIMARY KEY,
    order_id BIGINT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    product_id TEXT NOT NULL,
    product_name TEXT NOT NULL,
    variant TEXT,
    price NUMERIC(10,2) NOT NULL
  )`;
  // variant se agregó después del primer deploy: migración idempotente
  await sql`ALTER TABLE order_items ADD COLUMN IF NOT EXISTS variant TEXT`;
  // state: received | processed | failed. Sólo "processed" bloquea reintentos.
  await sql`CREATE TABLE IF NOT EXISTS webhook_events (
    event_id TEXT PRIMARY KEY,
    state TEXT NOT NULL DEFAULT 'received',
    attempts INT NOT NULL DEFAULT 1,
    received_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    processed_at TIMESTAMPTZ
  )`;
  await sql`ALTER TABLE webhook_events ADD COLUMN IF NOT EXISTS state TEXT NOT NULL DEFAULT 'received'`;
  await sql`ALTER TABLE webhook_events ADD COLUMN IF NOT EXISTS attempts INT NOT NULL DEFAULT 1`;
  await sql`ALTER TABLE webhook_events ADD COLUMN IF NOT EXISTS processed_at TIMESTAMPTZ`;
  // Mercado Pago: preferencia creada y el importe exacto que se cobra (puede ser en ARS).
  await sql`ALTER TABLE orders ADD COLUMN IF NOT EXISTS preference_id TEXT`;
  await sql`ALTER TABLE orders ADD COLUMN IF NOT EXISTS charge_amount NUMERIC(12,2)`;
  await sql`ALTER TABLE orders ADD COLUMN IF NOT EXISTS charge_currency TEXT`;
  ready = true;
}

function newToken() {
  return crypto.randomBytes(24).toString('base64url'); // 192 bits: no se adivina
}

// charge = { provider, amount, currency, email }: lo que realmente se le cobra al comprador.
async function createPendingOrder(priced, charge) {
  await ensureSchema();
  const sql = sqlClient();
  const token = newToken();
  const c = charge || {};
  const rows = await sql`INSERT INTO orders (public_token, total, currency, payment_provider, email, charge_amount, charge_currency)
    VALUES (${token}, ${priced.total}, ${priced.currency}, ${c.provider || 'mercadopago'}, ${c.email || null},
            ${c.amount ?? priced.total}, ${c.currency || priced.currency})
    RETURNING id, public_token`;
  const order = rows[0];
  for (const it of priced.items) {
    await sql`INSERT INTO order_items (order_id, product_id, product_name, variant, price)
      VALUES (${order.id}, ${it.product_id}, ${it.product_name}, ${it.variant || null}, ${it.price})`;
  }
  return order;
}

// Reserva el evento para procesarlo.
//  - primera vez            -> 'claimed'
//  - ya terminado con éxito -> 'done'      (duplicado real, no reprocesar)
//  - intento anterior falló -> 'claimed'   (retry seguro: nunca se marcó processed)
async function claimEvent(eventId) {
  await ensureSchema();
  const sql = sqlClient();
  const rows = await sql`INSERT INTO webhook_events (event_id, state)
    VALUES (${eventId}, 'received')
    ON CONFLICT (event_id) DO UPDATE
      SET attempts = webhook_events.attempts + 1
    RETURNING state`;
  return rows[0] && rows[0].state === 'processed' ? 'done' : 'claimed';
}

// Sólo se llama cuando la orden quedó realmente actualizada.
async function completeEvent(eventId) {
  const sql = sqlClient();
  await sql`UPDATE webhook_events SET state = 'processed', processed_at = now()
    WHERE event_id = ${eventId}`;
}

// El intento falló: queda marcado para que el reintento del proveedor lo repita.
async function failEvent(eventId) {
  try {
    const sql = sqlClient();
    await sql`UPDATE webhook_events SET state = 'failed' WHERE event_id = ${eventId} AND state <> 'processed'`;
  } catch (e) { /* no enmascarar el error original */ }
}

async function markPaid(publicToken, providerOrderId, email) {
  await ensureSchema();
  const sql = sqlClient();
  // idempotente por diseño: si ya está paid no cambia nada y devuelve la fila igual
  const rows = await sql`UPDATE orders
    SET status = 'paid', paid_at = COALESCE(paid_at, now()),
        provider_order_id = COALESCE(provider_order_id, ${providerOrderId}),
        email = COALESCE(email, ${email || null})
    WHERE public_token = ${publicToken} AND status IN ('pending', 'paid', 'failed')
    RETURNING id, status`;
  return rows.length > 0;
}

// Transiciones terminales. refunded pisa a paid; failed sólo pisa a pending.
async function setStatus(publicToken, status) {
  await ensureSchema();
  const sql = sqlClient();
  let rows;
  if (status === 'refunded') {
    rows = await sql`UPDATE orders SET status = 'refunded'
      WHERE public_token = ${publicToken} AND status <> 'refunded' RETURNING id`;
  } else if (status === 'failed') {
    rows = await sql`UPDATE orders SET status = 'failed'
      WHERE public_token = ${publicToken} AND status = 'pending' RETURNING id`;
  } else {
    rows = await sql`UPDATE orders SET status = ${status}
      WHERE public_token = ${publicToken} RETURNING id`;
  }
  return rows.length > 0;
}

async function setPreference(orderId, preferenceId) {
  const sql = sqlClient();
  await sql`UPDATE orders SET preference_id = ${preferenceId} WHERE id = ${orderId}`;
}

async function getOrderById(id) {
  await ensureSchema();
  const sql = sqlClient();
  const rows = await sql`SELECT id, public_token, status, total, currency, charge_amount, charge_currency, email
    FROM orders WHERE id = ${id}`;
  return rows[0] || null;
}

async function getOrderByToken(token) {
  await ensureSchema();
  const sql = sqlClient();
  const rows = await sql`SELECT id, public_token, status, total, currency, email FROM orders WHERE public_token = ${token}`;
  if (!rows.length) return null;
  const order = rows[0];
  order.items = await sql`SELECT product_id, product_name, variant, price FROM order_items WHERE order_id = ${order.id} ORDER BY id`;
  return order;
}

module.exports = {
  createPendingOrder, setPreference, claimEvent, completeEvent, failEvent,
  markPaid, setStatus, getOrderById, getOrderByToken
};

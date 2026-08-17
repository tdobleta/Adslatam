const crypto = require('crypto');
const { claimEvent, completeEvent, failEvent, markPaid, setStatus } = require('../_db');

// El body crudo es imprescindible para verificar la firma: bodyParser desactivado.
// Se asigna sobre el mismo objeto handler que después se exporta, para que
// module.exports.config sobreviva a la asignación final.

function readRaw(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', c => chunks.push(Buffer.from(c)));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

const PAID_EVENTS = ['order_created'];
const REFUND_EVENTS = ['order_refunded'];

async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
  if (!secret) return res.status(503).json({ error: 'config_missing' });

  const raw = await readRaw(req);

  // --- 1. firma HMAC ---
  const digest = crypto.createHmac('sha256', secret).update(raw).digest('hex');
  const signature = String(req.headers['x-signature'] || '');
  const a = Buffer.from(digest, 'utf8');
  const b = Buffer.from(signature, 'utf8');
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    return res.status(401).json({ error: 'invalid_signature' });
  }

  let payload;
  try { payload = JSON.parse(raw.toString('utf8')); }
  catch (e) { return res.status(400).json({ error: 'invalid_json' }); }

  const meta = payload.meta || {};
  const data = payload.data || {};
  const attrs = data.attributes || {};
  const eventName = String(meta.event_name || '');
  const token = (meta.custom_data || {}).order_token;
  const status = String(attrs.status || '').toLowerCase();

  // --- 2. validaciones de forma (antes de tocar la base) ---
  if (!PAID_EVENTS.includes(eventName) && !REFUND_EVENTS.includes(eventName)) {
    return res.status(200).json({ ok: true, ignored: 'evento no relevante: ' + eventName });
  }
  if (String(data.type || '') !== 'orders') {
    return res.status(200).json({ ok: true, ignored: 'data.type no es orders' });
  }
  if (typeof token !== 'string' || !/^[A-Za-z0-9_-]{20,64}$/.test(token)) {
    return res.status(200).json({ ok: true, ignored: 'sin order_token válido' });
  }
  const expectedStore = String(process.env.LEMONSQUEEZY_STORE_ID || '');
  if (expectedStore && String(attrs.store_id || '') !== expectedStore) {
    return res.status(200).json({ ok: true, ignored: 'store_id ajeno' });
  }

  const eventId = String(req.headers['x-event-id'] || (eventName + ':' + (data.id || '') + ':' + status));

  let claimed = false;
  try {
    // --- 3. idempotencia: sólo un evento ya 'processed' se descarta ---
    const claim = await claimEvent(eventId);
    if (claim === 'done') return res.status(200).json({ ok: true, duplicate: true });
    claimed = true;

    // --- 4. efecto ---
    if (REFUND_EVENTS.includes(eventName)) {
      if (status === 'partial_refund') {
        // Reembolso parcial: la orden sigue pagada y conserva sus accesos.
        await completeEvent(eventId);
        return res.status(200).json({ ok: true, partial_refund: true });
      }
      if (status === 'refunded') {
        await setStatus(token, 'refunded');
        await completeEvent(eventId);
        return res.status(200).json({ ok: true, refunded: true });
      }
      await completeEvent(eventId);
      return res.status(200).json({ ok: true, ignored: 'refund con status ' + status });
    }

    if (status === 'paid') {
      const ok = await markPaid(token, String(data.id || ''), attrs.user_email);
      if (!ok) {
        // La orden no existe o está en un estado terminal (refunded): no reintentar.
        await completeEvent(eventId);
        return res.status(200).json({ ok: true, ignored: 'orden no actualizable' });
      }
      await completeEvent(eventId);
      return res.status(200).json({ ok: true, released: true });
    }

    if (status === 'failed' || status === 'cancelled') {
      await setStatus(token, 'failed');
      await completeEvent(eventId);
      return res.status(200).json({ ok: true, failed: true });
    }

    // pending u otro estado intermedio: nada que hacer, pero no lo dejamos bloqueado.
    await completeEvent(eventId);
    return res.status(200).json({ ok: true, ignored: 'status ' + status });
  } catch (e) {
    console.error('webhook error', e);
    // El evento queda en 'failed' -> el reintento de Lemon Squeezy vuelve a procesarlo.
    if (claimed) await failEvent(eventId);
    return res.status(500).json({ error: 'server_error' });
  }
}

// Vercel lee handler.config: se asigna antes de exportar, nunca se pisa.
handler.config = { api: { bodyParser: false } };

module.exports = handler;
module.exports.config = handler.config;
module.exports.default = handler;

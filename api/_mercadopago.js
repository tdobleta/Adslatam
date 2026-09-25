// Mercado Pago Checkout Pro. Solo server-side: el Access Token nunca sale de acá.
const crypto = require('crypto');

const API = 'https://api.mercadopago.com';

function configError(message) {
  const err = new Error(message);
  err.code = 'CONFIG';
  return err;
}

function accessToken() {
  const token = process.env.MP_ACCESS_TOKEN;
  if (!token) throw configError('Falta MP_ACCESS_TOKEN.');
  return token;
}

// Las credenciales de prueba empiezan con TEST-.
function isTestMode() {
  return String(process.env.MP_ACCESS_TOKEN || '').startsWith('TEST-');
}

// Moneda de cobro. El catálogo está en USD; con MP_CURRENCY=ARS se convierte
// con la cotización fija MP_ARS_PER_USD (pesos por dólar).
function chargeCurrency() {
  const currency = String(process.env.MP_CURRENCY || 'USD').toUpperCase();
  if (currency !== 'USD' && currency !== 'ARS') throw configError('MP_CURRENCY debe ser USD o ARS.');
  if (currency === 'ARS' && !(arsPerUsd() > 0)) throw configError('Con MP_CURRENCY=ARS falta MP_ARS_PER_USD.');
  return currency;
}

function arsPerUsd() {
  return Number(process.env.MP_ARS_PER_USD || 0);
}

// Convierte un precio del catálogo (USD) a la moneda de cobro.
// ARS se redondea a pesos enteros; USD conserva centavos.
function toChargeAmount(usd, currency) {
  if (currency === 'ARS') return Math.round(usd * arsPerUsd());
  return Math.round(usd * 100) / 100;
}

async function mpFetch(path, options) {
  const opts = options || {};
  const res = await fetch(API + path, {
    method: opts.method || 'GET',
    headers: Object.assign({
      'Authorization': 'Bearer ' + accessToken(),
      'Content-Type': 'application/json'
    }, opts.headers || {}),
    body: opts.body ? JSON.stringify(opts.body) : undefined
  });
  const json = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, json };
}

async function createPreference(preference, idempotencyKey) {
  const r = await mpFetch('/checkout/preferences', {
    method: 'POST',
    body: preference,
    headers: idempotencyKey ? { 'X-Idempotency-Key': idempotencyKey } : {}
  });
  if (!r.ok) {
    const err = new Error('Mercado Pago rechazó la preferencia: ' + (r.json.message || r.status));
    err.code = 'PROVIDER';
    err.details = r.json;
    throw err;
  }
  return r.json;
}

// Devuelve el pago o null si no existe (por ejemplo, la notificación de prueba del panel).
async function getPayment(id) {
  const r = await mpFetch('/v1/payments/' + encodeURIComponent(id));
  if (r.status === 404) return null;
  if (!r.ok) {
    const err = new Error('No se pudo consultar el pago ' + id + ': ' + r.status);
    err.code = 'PROVIDER';
    throw err;
  }
  return r.json;
}

// Firma de webhooks (header x-signature: "ts=...,v1=...").
// Manifest oficial: "id:<data.id>;request-id:<x-request-id>;ts:<ts>;"
// Devuelve true/false; si no hay MP_WEBHOOK_SECRET, devuelve null (sin verificar).
function verifySignature(headers, dataId) {
  const secret = process.env.MP_WEBHOOK_SECRET;
  if (!secret) return null;

  const parts = {};
  String(headers['x-signature'] || '').split(',').forEach(pair => {
    const i = pair.indexOf('=');
    if (i > 0) parts[pair.slice(0, i).trim()] = pair.slice(i + 1).trim();
  });
  if (!parts.ts || !parts.v1) return false;

  const id = /^[a-z0-9]+$/i.test(String(dataId)) ? String(dataId).toLowerCase() : String(dataId);
  const requestId = headers['x-request-id'];
  let manifest = '';
  if (dataId) manifest += 'id:' + id + ';';
  if (requestId) manifest += 'request-id:' + requestId + ';';
  manifest += 'ts:' + parts.ts + ';';

  const expected = crypto.createHmac('sha256', secret).update(manifest).digest('hex');
  const a = Buffer.from(expected, 'utf8');
  const b = Buffer.from(parts.v1, 'utf8');
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

// external_reference <-> id interno de la orden (no es el token secreto de acceso).
const REF_PREFIX = 'aura-';
const toReference = orderId => REF_PREFIX + orderId;
function fromReference(ref) {
  const m = /^aura-(\d{1,18})$/.exec(String(ref || ''));
  return m ? m[1] : null;
}

module.exports = {
  isTestMode, chargeCurrency, arsPerUsd, toChargeAmount,
  createPreference, getPayment, verifySignature, toReference, fromReference
};

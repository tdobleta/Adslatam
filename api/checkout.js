const { priceCart } = require('./_catalog');
const { createPendingOrder, setPreference } = require('./_db');
const mp = require('./_mercadopago');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// GET: moneda de cobro, para que la tienda muestre el importe final antes de pagar.
function config(res) {
  try {
    const currency = mp.chargeCurrency();
    return res.status(200).json({ currency, ars_per_usd: currency === 'ARS' ? mp.arsPerUsd() : null });
  } catch (e) {
    return res.status(200).json({ currency: 'USD', ars_per_usd: null });
  }
}

module.exports = async function handler(req, res) {
  if (req.method === 'GET') return config(res);
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  if (!process.env.MP_ACCESS_TOKEN) {
    return res.status(503).json({ error: 'config_missing', message: 'Falta MP_ACCESS_TOKEN.' });
  }

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch (e) { body = null; } }

  const email = String((body && body.email) || '').trim().toLowerCase();
  if (email.length > 254 || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'invalid_email', message: 'Escribe un email válido, por ejemplo nombre@correo.com.' });
  }

  // Los precios salen SIEMPRE del catálogo del servidor; lo que mande el navegador se ignora.
  const priced = priceCart(body && body.items);
  if (!priced.items.length) return res.status(400).json({ error: 'empty_cart' });

  let currency;
  try { currency = mp.chargeCurrency(); }
  catch (e) { return res.status(503).json({ error: 'config_missing', message: e.message }); }

  const items = priced.items.map(i => ({
    id: i.product_id,
    title: i.product_name + (i.variant ? ' · ' + i.variant : ''),
    description: i.upsell ? 'Pack adicional con ' + i.discount_percent + ' % de descuento' : 'Pack digital',
    category_id: 'digital_goods',
    quantity: 1,
    currency_id: currency,
    unit_price: mp.toChargeAmount(i.price, currency)
  }));
  const amount = Math.round(items.reduce((s, i) => s + i.unit_price, 0) * 100) / 100;

  let order;
  try {
    order = await createPendingOrder(priced, { provider: 'mercadopago', email, amount, currency });
  } catch (e) {
    const code = e.code === 'CONFIG' ? 503 : 500;
    return res.status(code).json({ error: e.code === 'CONFIG' ? 'config_missing' : 'db_error', message: e.message });
  }

  const origin = process.env.PUBLIC_BASE_URL || ('https://' + (req.headers['x-forwarded-host'] || req.headers.host));
  const back = result => origin + '/compra-completada?order=' + order.public_token + '&resultado=' + result;

  const preference = {
    items,
    payer: { email },
    external_reference: mp.toReference(order.id),
    back_urls: { success: back('aprobado'), pending: back('pendiente'), failure: back('rechazado') },
    auto_return: 'approved',
    statement_descriptor: 'AURA',
    metadata: { order_id: String(order.id) }
  };
  // Mercado Pago solo acepta notification_url pública con HTTPS.
  if (/^https:\/\//.test(origin)) {
    preference.notification_url = origin + '/api/webhooks/mercadopago?source_news=webhooks';
  }

  try {
    const pref = await mp.createPreference(preference, 'order-' + order.public_token);
    await setPreference(order.id, pref.id);
    const url = mp.isTestMode() ? (pref.sandbox_init_point || pref.init_point) : pref.init_point;
    if (!url) return res.status(502).json({ error: 'provider_error', message: 'Mercado Pago no devolvió la URL de pago.' });
    return res.status(200).json({
      checkout_url: url,
      preference_id: pref.id,
      order_token: order.public_token,
      total: amount,
      currency
    });
  } catch (e) {
    console.error('mercadopago preference error', e.message, JSON.stringify(e.details || {}));
    return res.status(502).json({
      error: 'provider_error',
      message: 'No pudimos abrir Mercado Pago. Inténtalo de nuevo en unos segundos.'
    });
  }
};

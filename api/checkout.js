const { priceCart } = require('./_catalog');
const { createPendingOrder } = require('./_db');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const API_KEY = process.env.LEMONSQUEEZY_API_KEY;
  const STORE_ID = process.env.LEMONSQUEEZY_STORE_ID;
  const VARIANT_ID = process.env.LEMONSQUEEZY_VARIANT_ID;
  if (!API_KEY || !STORE_ID || !VARIANT_ID) {
    return res.status(503).json({ error: 'config_missing',
      message: 'Faltan LEMONSQUEEZY_API_KEY, LEMONSQUEEZY_STORE_ID o LEMONSQUEEZY_VARIANT_ID.' });
  }

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch (e) { body = null; } }
  const priced = priceCart(body && body.items);
  if (!priced.items.length) return res.status(400).json({ error: 'empty_cart' });

  let order;
  try {
    order = await createPendingOrder(priced);
  } catch (e) {
    const code = e.code === 'CONFIG' ? 503 : 500;
    return res.status(code).json({ error: e.code === 'CONFIG' ? 'config_missing' : 'db_error', message: e.message });
  }

  const origin = process.env.PUBLIC_BASE_URL || ('https://' + (req.headers['x-forwarded-host'] || req.headers.host));
  const payload = {
    data: {
      type: 'checkouts',
      attributes: {
        // custom_price está en centavos: un solo variant base sirve para todo el catálogo
        custom_price: Math.round(priced.total * 100),
        // Test mode: se controla con LEMONSQUEEZY_TEST_MODE ('true' lo activa).
        test_mode: String(process.env.LEMONSQUEEZY_TEST_MODE || '').toLowerCase() === 'true',
        product_options: {
          name: priced.items.length === 1 ? priced.items[0].product_name : 'Pack de ' + priced.items.length + ' productos',
          description: priced.items.map(i => i.product_name + ' · ' + i.variant).join(' / '),
          redirect_url: origin + '/compra-completada?order=' + order.public_token,
          // sólo la variante base puede usarse en este checkout
          enabled_variants: [Number(VARIANT_ID)]
        },
        checkout_data: {
          custom: { order_token: order.public_token }
        }
      },
      relationships: {
        store:   { data: { type: 'stores',   id: String(STORE_ID) } },
        variant: { data: { type: 'variants', id: String(VARIANT_ID) } }
      }
    }
  };

  try {
    const r = await fetch('https://api.lemonsqueezy.com/v1/checkouts', {
      method: 'POST',
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        'Authorization': 'Bearer ' + API_KEY
      },
      body: JSON.stringify(payload)
    });
    const json = await r.json();
    if (!r.ok) {
      console.error('lemonsqueezy checkout error', JSON.stringify(json));
      return res.status(502).json({ error: 'provider_error', message: 'Lemon Squeezy rechazó el checkout.' });
    }
    const url = json && json.data && json.data.attributes && json.data.attributes.url;
    if (!url) return res.status(502).json({ error: 'provider_error', message: 'Respuesta sin URL de checkout.' });
    return res.status(200).json({ checkout_url: url, order_token: order.public_token, total: priced.total });
  } catch (e) {
    console.error(e);
    return res.status(502).json({ error: 'provider_unreachable', message: e.message });
  }
};

const { getOrderByToken } = require('../_db');
const { getDriveUrl, getProduct } = require('../_catalog');

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });
  const token = (req.query && (req.query.token || req.query.order)) || '';
  if (typeof token !== 'string' || !/^[A-Za-z0-9_-]{20,64}$/.test(token)) {
    return res.status(400).json({ error: 'invalid_token' });
  }

  let order;
  try { order = await getOrderByToken(token); }
  catch (e) { return res.status(e.code === 'CONFIG' ? 503 : 500).json({ error: 'server_error' }); }

  // Orden inexistente: misma respuesta que una no pagada, sin filtrar información.
  if (!order) return res.status(404).json({ status: 'not_found' });

  res.setHeader('Cache-Control', 'no-store');

  // Sólo 'paid' libera accesos. pending / failed / cancelled / refunded no devuelven nada.
  if (order.status !== 'paid') {
    return res.status(200).json({ status: order.status, items: [] });
  }

  return res.status(200).json({
    status: 'paid',
    total: Number(order.total),
    currency: order.currency,
    email: order.email || null,
    items: order.items.map(i => {
      // la variante se guardó al crear la orden; si falta, se recupera del catálogo
      const fallback = getProduct(i.product_id);
      return {
        product_id: i.product_id,
        product_name: i.product_name,
        variant: i.variant || (fallback && fallback.variant) || null,
        drive_url: getDriveUrl(i.product_id)   // null si todavía no se configuró
      };
    })
  });
};

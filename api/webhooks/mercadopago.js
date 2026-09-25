// Webhook de Mercado Pago (Checkout Pro). Es el ÚNICO lugar que marca una orden como pagada:
// la página de retorno nunca libera accesos. El pago se consulta siempre a la API de
// Mercado Pago con el Access Token; el contenido de la notificación no se da por cierto.
const { claimEvent, completeEvent, failEvent, markPaid, setStatus, getOrderById } = require('../_db');
const mp = require('../_mercadopago');

const cents = n => Math.round(Number(n) * 100);

function readNotification(req) {
  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch (e) { body = {}; } }
  body = body || {};
  const q = req.query || {};
  return {
    type: String(body.type || q.type || q.topic || ''),
    dataId: String((body.data && body.data.id) || q['data.id'] || q.id || '')
  };
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  if (!process.env.MP_ACCESS_TOKEN) return res.status(503).json({ error: 'config_missing' });

  const { type, dataId } = readNotification(req);

  // --- 1. firma (si MP_WEBHOOK_SECRET está configurado) ---
  const signed = mp.verifySignature(req.headers, dataId);
  if (signed === false) return res.status(401).json({ error: 'invalid_signature' });

  // --- 2. solo interesan los pagos ---
  if (type !== 'payment') return res.status(200).json({ ok: true, ignored: 'tipo ' + (type || 'vacío') });
  if (!/^\d{1,20}$/.test(dataId)) return res.status(200).json({ ok: true, ignored: 'id de pago inválido' });

  let claimed = false;
  let eventId = null;
  try {
    // --- 3. el pago real, consultado a Mercado Pago ---
    const payment = await mp.getPayment(dataId);
    if (!payment) return res.status(200).json({ ok: true, ignored: 'pago inexistente' });

    const orderId = mp.fromReference(payment.external_reference);
    if (!orderId) return res.status(200).json({ ok: true, ignored: 'external_reference ajena' });
    const order = await getOrderById(orderId);
    if (!order) return res.status(200).json({ ok: true, ignored: 'orden inexistente' });

    const status = String(payment.status || '');

    // --- 4. idempotencia: cada (pago, estado) se procesa una sola vez ---
    eventId = 'mp:payment:' + payment.id + ':' + status;
    const claim = await claimEvent(eventId);
    if (claim === 'done') return res.status(200).json({ ok: true, duplicate: true });
    claimed = true;

    // --- 5. efecto ---
    if (status === 'approved') {
      const expectedCurrency = order.charge_currency || order.currency;
      const expectedAmount = order.charge_amount != null ? order.charge_amount : order.total;
      if (payment.currency_id !== expectedCurrency || cents(payment.transaction_amount) !== cents(expectedAmount)) {
        console.error('mercadopago: importe o moneda no coinciden', JSON.stringify({
          order: order.id, payment: payment.id,
          expected: { amount: expectedAmount, currency: expectedCurrency },
          received: { amount: payment.transaction_amount, currency: payment.currency_id }
        }));
        await completeEvent(eventId);
        return res.status(200).json({ ok: true, ignored: 'importe o moneda no coinciden' });
      }
      const email = payment.payer && payment.payer.email;
      const ok = await markPaid(order.public_token, String(payment.id), email);
      await completeEvent(eventId);
      return res.status(200).json(ok ? { ok: true, released: true } : { ok: true, ignored: 'orden no actualizable' });
    }

    if (status === 'refunded' || status === 'charged_back') {
      await setStatus(order.public_token, 'refunded');
      await completeEvent(eventId);
      return res.status(200).json({ ok: true, revoked: true });
    }

    if (status === 'rejected' || status === 'cancelled') {
      // Solo pasa a failed si seguía pending: un reintento aprobado después la vuelve a pagar.
      await setStatus(order.public_token, 'failed');
      await completeEvent(eventId);
      return res.status(200).json({ ok: true, failed: true });
    }

    // pending, in_process, authorized, in_mediation: se espera la próxima notificación.
    await completeEvent(eventId);
    return res.status(200).json({ ok: true, ignored: 'estado ' + status });
  } catch (e) {
    console.error('mercadopago webhook error', e);
    // Respuesta 500: Mercado Pago reintenta y el evento se vuelve a procesar.
    if (claimed && eventId) await failEvent(eventId);
    return res.status(500).json({ error: 'server_error' });
  }
};

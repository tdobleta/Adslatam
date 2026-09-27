// Cotizaciones para el convertidor de precios de la tienda (solo orientativo: nunca se usa para cobrar).
// Se piden a dos fuentes públicas sin clave y el CDN de Vercel guarda la respuesta unas horas.

const CURRENCIES = [
  'USD', 'EUR', 'ARS', 'BOB', 'CLP', 'COP', 'CRC', 'DOP', 'GTQ',
  'HNL', 'MXN', 'NIO', 'PEN', 'PYG', 'UYU', 'VES'
];

const SOURCES = [
  {
    url: 'https://open.er-api.com/v6/latest/USD',
    read: j => (j && j.result === 'success' ? j.rates : null)
  },
  {
    url: 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json',
    read: j => {
      if (!j || !j.usd) return null;
      const out = {};
      for (const [k, v] of Object.entries(j.usd)) out[k.toUpperCase()] = v;
      return out;
    }
  }
];

async function fetchRates() {
  for (const src of SOURCES) {
    try {
      const r = await fetch(src.url, { signal: AbortSignal.timeout(4000) });
      if (!r.ok) continue;
      const all = src.read(await r.json());
      if (!all) continue;
      const rates = {};
      for (const code of CURRENCIES) {
        const v = code === 'USD' ? 1 : Number(all[code]);
        if (v > 0) rates[code] = v;
      }
      if (Object.keys(rates).length > 1) return rates;
    } catch (e) {
      console.error('rates: fallo ' + src.url, e.message);
    }
  }
  return null;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });
  const rates = await fetchRates();
  if (!rates) {
    res.setHeader('Cache-Control', 'no-store');
    return res.status(503).json({ error: 'rates_unavailable' });
  }
  res.setHeader('Cache-Control', 'public, s-maxage=21600, stale-while-revalidate=86400');
  return res.status(200).json({ base: 'USD', rates, updated: new Date().toISOString() });
};

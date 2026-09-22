// FUENTE DE VERDAD DE PRECIOS Y ACCESOS. Solo server-side: nunca se envía al browser.
// Los enlaces de Drive se configuran por variable de entorno DRIVE_FOLDERS (JSON)
// o, en su defecto, quedan como null y el endpoint de acceso responde "sin configurar".

const NICHES = {
  fashion:     'Moda',
  supplements: 'Suplementos y medicinales',
  gadgets:     'Gadgets',
  pets:        'Pets'
};

const STATIC_TIERS = { 25: 6.99, 50: 9.99 };

const CATALOG = {};

// Ads estáticos: nicho × cantidad
for (const [slug, nicho] of Object.entries(NICHES)) {
  for (const [qty, price] of Object.entries(STATIC_TIERS)) {
    CATALOG['static_' + slug + '_' + qty] = {
      name: qty + ' Ads Estáticos',
      category: 'Ads estáticos',
      variant: nicho,
      price,
      currency: 'USD'
    };
  }
}

Object.assign(CATALOG, {
  static_bundle_200:          { name: '200 Ads Estáticos', category: 'Ads estáticos', variant: '50 de cada nicho', price: 24.99, currency: 'USD' },
  dropship_100:               { name: '50 Videos de Dropshipping', category: 'Videos de dropshipping', variant: 'Pack completo', price: 14.99, currency: 'USD' },
  static_fashion_brands_75:   { name: '75 Ads de Marcas de Moda', category: 'Ads estáticos premium', variant: 'Eme Studios · Scuffers · Nude Project', price: 17.99, currency: 'USD' },
  static_product_brands_100:  { name: '100 Ads de Gadgets y Productos', category: 'Ads estáticos premium', variant: 'Ganga Home · Voltra · Smud · Lili Pink', price: 14.99, currency: 'USD' }
});

// ---- Carpetas de Google Drive ----
// PONER ACÁ (o mejor, en la env var DRIVE_FOLDERS como JSON) la URL de cada carpeta.
// Ejemplo de DRIVE_FOLDERS:
// {"static_fashion_50":"https://drive.google.com/drive/folders/XXXX","videoai_100":"https://..."}
let DRIVE = {};
try {
  DRIVE = process.env.DRIVE_FOLDERS ? JSON.parse(process.env.DRIVE_FOLDERS) : {};
} catch (e) {
  console.error('DRIVE_FOLDERS no es JSON válido:', e.message);
}

function getProduct(id) {
  const p = CATALOG[id];
  if (!p) return null;
  return { id, ...p };
}

function getDriveUrl(id) {
  return DRIVE[id] || null;
}

// Recalcula SIEMPRE desde el catálogo. Ignora cualquier precio que venga del cliente.
function priceCart(items) {
  const out = [];
  for (const raw of Array.isArray(items) ? items : []) {
    const id = typeof raw === 'string' ? raw : raw && raw.product_id;
    if (typeof id !== 'string' || !/^[a-z0-9_]{3,40}$/.test(id)) continue;
    const p = getProduct(id);
    if (!p) continue;
    if (out.some(o => o.product_id === id)) continue; // sin duplicados
    const discounted = out.length > 0 && raw && typeof raw === 'object' && raw.upsell === true;
    const basePrice = p.price;
    const finalPrice = discounted ? Math.round(basePrice * 0.35 * 100) / 100 : basePrice;
    out.push({
      product_id: id,
      product_name: p.name,
      variant: p.variant,
      price: finalPrice,
      base_price: basePrice,
      discount_percent: discounted ? 65 : 0,
      upsell: discounted,
      currency: p.currency
    });
  }
  const total = Math.round(out.reduce((s, i) => s + i.price, 0) * 100) / 100;
  return { items: out, total, currency: 'USD' };
}

module.exports = { CATALOG, getProduct, getDriveUrl, priceCart };

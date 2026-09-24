// Landing — carrito y checkout.
// El frontend solo conoce id, nombre y precio de vitrina: el backend (api/_catalog.js)
// recalcula todo contra su propio catálogo antes de cobrar. Mantener ambos en sincronía.
(function () {
  'use strict';

  var PRODUCTS = {
    static_fashion_25:         { name: '25 ads estáticos', variant: 'Moda', price: 6.99 },
    static_fashion_50:         { name: '50 ads estáticos', variant: 'Moda', price: 9.99 },
    static_supplements_25:     { name: '25 ads estáticos', variant: 'Suplementos y medicinales', price: 6.99 },
    static_supplements_50:     { name: '50 ads estáticos', variant: 'Suplementos y medicinales', price: 9.99 },
    static_gadgets_25:         { name: '25 ads estáticos', variant: 'Gadgets', price: 6.99 },
    static_gadgets_50:         { name: '50 ads estáticos', variant: 'Gadgets', price: 9.99 },
    static_pets_25:            { name: '25 ads estáticos', variant: 'Pets', price: 6.99 },
    static_pets_50:            { name: '50 ads estáticos', variant: 'Pets', price: 9.99 },
    static_bundle_200:         { name: '200 ads estáticos', variant: '50 de cada nicho', price: 24.99 },
    static_fashion_brands_75:  { name: '75 ads de marcas de moda', variant: 'Eme Studios · Scuffers · Nude Project', price: 17.99 },
    static_product_brands_100: { name: '100 ads de gadgets y productos', variant: 'Ganga Home · Voltra · Smud · Lili Pink', price: 14.99 },
    dropship_100:              { name: '50 videos de dropshipping', variant: 'Pack completo', price: 14.99 }
  };

  // Ofertas con 65 % de descuento que el carrito sugiere después del primer pack.
  var UPSELLS = [
    'static_bundle_200', 'dropship_100', 'static_fashion_brands_75', 'static_product_brands_100',
    'static_fashion_50', 'static_supplements_50', 'static_gadgets_50', 'static_pets_50'
  ];
  var UPSELL_FACTOR = 0.35;
  var KEY = 'adslatam.cart.v1'; // compra-completada.html lo vacía tras el pago

  var round2 = function (n) { return Math.round(Number(n) * 100) / 100; };
  var nicheOf = function (id) { var m = /^static_([a-z]+)_\d+$/.exec(id); return m ? m[1] : null; };

  var moneyFmt;
  try {
    moneyFmt = new Intl.NumberFormat(navigator.language || 'es', { style: 'currency', currency: 'USD' });
  } catch (e) {
    moneyFmt = { format: function (n) { return 'US$ ' + Number(n).toFixed(2); } };
  }
  var money = function (n) { return moneyFmt.format(Number(n)); };

  // ================= Carrito =================
  var Cart = {
    items: [],

    load: function () {
      var raw = [];
      try { raw = JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) {}
      this.items = (Array.isArray(raw) ? raw : [])
        .filter(function (i) { return i && PRODUCTS[i.product_id]; })
        .map(function (i) { return Cart.make(i.product_id, i.upsell === true); });
      this.normalize();
    },

    make: function (id, upsell) {
      var p = PRODUCTS[id];
      return {
        product_id: id,
        name: p.name,
        variant: p.variant,
        base_price: p.price,
        price: upsell ? round2(p.price * UPSELL_FACTOR) : p.price,
        upsell: upsell
      };
    },

    // El backend nunca descuenta el primer ítem: el carrito refleja lo mismo.
    normalize: function () {
      if (this.items.length && this.items[0].upsell) {
        this.items[0] = this.make(this.items[0].product_id, false);
      }
    },

    save: function () {
      try { localStorage.setItem(KEY, JSON.stringify(this.items)); } catch (e) {}
    },

    has: function (id) { return this.items.some(function (i) { return i.product_id === id; }); },

    add: function (id, upsell) {
      if (!PRODUCTS[id] || this.has(id)) return false;
      var niche = nicheOf(id);
      // Un solo tamaño por nicho: 50 reemplaza a 25 y viceversa.
      if (niche) this.items = this.items.filter(function (i) { return nicheOf(i.product_id) !== niche; });
      this.items.push(this.make(id, !!upsell && this.items.length > 0));
      this.normalize();
      this.save();
      return true;
    },

    remove: function (id) {
      this.items = this.items.filter(function (i) { return i.product_id !== id; });
      this.normalize();
      this.save();
    },

    total: function () {
      return round2(this.items.reduce(function (s, i) { return s + i.price; }, 0));
    },

    offers: function () {
      var inCart = this.items.map(function (i) { return i.product_id; });
      var niches = inCart.map(nicheOf).filter(Boolean);
      var hasBundle = inCart.indexOf('static_bundle_200') !== -1;
      return UPSELLS.filter(function (id) {
        if (inCart.indexOf(id) !== -1) return false;
        var niche = nicheOf(id);
        return !niche || (!hasBundle && niches.indexOf(niche) === -1);
      }).slice(0, 3);
    }
  };

  // ================= Utilidades DOM =================
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function button(label, variant, srLabel) {
    var b = el('button', 'lm-btn lm-btn--' + variant + ' lm-btn--sm', label);
    b.type = 'button';
    if (srLabel) b.appendChild(el('span', 'sr-only', ' ' + srLabel));
    return b;
  }

  function localizeMoney() {
    $$('[data-money]').forEach(function (node) { node.textContent = money(node.getAttribute('data-money')); });
    $$('[data-money-millions]').forEach(function (node) {
      var whole = money(node.getAttribute('data-money-millions')).replace(/[.,]00(?=\D*$)/, '');
      node.textContent = whole + ' M';
    });
  }

  // ================= Selector de cantidad por nicho =================
  var PRICES = { 25: 6.99, 50: 9.99 };
  var qty = 50;

  function paintNiches() {
    $$('[data-qty]').forEach(function (opt) {
      var on = Number(opt.getAttribute('data-qty')) === qty;
      opt.classList.toggle('is-selected', on);
      opt.setAttribute('aria-checked', String(on));
    });
    $$('[data-niche]').forEach(function (row) {
      $('[data-niche-price]', row).textContent = money(PRICES[qty]);
      $('[data-niche-unit]', row).textContent = money(round2(PRICES[qty] / qty)) + ' por anuncio';
    });
  }

  // ================= Hoja del carrito =================
  var sheet = $('[data-cart]');
  var lastFocus = null;

  function setChromeInert(on) {
    $$('[data-page-chrome]').forEach(function (node) {
      if (on) node.setAttribute('inert', ''); else node.removeAttribute('inert');
    });
  }

  function openCart() {
    if (document.documentElement.classList.contains('is-cart-open')) return;
    lastFocus = document.activeElement;
    document.documentElement.classList.add('is-cart-open', 'is-locked');
    setChromeInert(true);
    var close = $('[data-cart-close]', sheet);
    setTimeout(function () { close.focus(); }, 30);
  }

  function closeCart() {
    if (!document.documentElement.classList.contains('is-cart-open')) return;
    document.documentElement.classList.remove('is-cart-open', 'is-locked');
    setChromeInert(false);
    hideError();
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function hideError() {
    var err = $('[data-cart-error]');
    err.hidden = true;
    err.textContent = '';
  }

  function priceNode(item) {
    if (!item.upsell) return el('span', 'price', money(item.price));
    var stack = el('span', 'price-stack');
    var old = el('s', null, money(item.base_price));
    old.setAttribute('aria-label', 'Antes ' + money(item.base_price));
    stack.appendChild(old);
    stack.appendChild(el('span', 'price', money(item.price)));
    return stack;
  }

  function paintCart() {
    var items = Cart.items;
    var count = $('[data-cart-count]');
    count.hidden = items.length === 0;
    count.textContent = String(items.length);

    $('[data-cart-empty]').hidden = items.length > 0;

    var list = $('[data-cart-items]');
    list.textContent = '';
    items.forEach(function (item) {
      var row = el('li', 'row');
      var main = el('div', 'row__main');
      main.appendChild(el('span', 'row__title', item.name));
      main.appendChild(el('span', 'row__meta', item.variant));
      if (item.upsell) main.appendChild(el('span', 'row__meta row__meta--success', 'Con 65 % de descuento'));
      var remove = button('Quitar', 'plain', item.name + ' · ' + item.variant);
      remove.addEventListener('click', function () {
        Cart.remove(item.product_id);
        paintCart();
        $('[data-cart-close]', sheet).focus();
      });
      row.appendChild(main);
      row.appendChild(priceNode(item));
      row.appendChild(remove);
      list.appendChild(row);
    });

    var upsell = $('[data-cart-upsell]');
    var offers = items.length ? Cart.offers() : [];
    upsell.hidden = offers.length === 0;
    var offerList = $('[data-cart-offers]');
    offerList.textContent = '';
    offers.forEach(function (id) {
      var p = PRODUCTS[id];
      var row = el('li', 'row');
      var main = el('div', 'row__main');
      main.appendChild(el('span', 'row__title', p.name));
      main.appendChild(el('span', 'row__meta', p.variant));
      var add = button('Agregar', 'secondary', p.name + ' · ' + p.variant + ' con descuento');
      add.addEventListener('click', function () {
        Cart.add(id, true);
        paintCart();
        $('[data-cart-close]', sheet).focus();
      });
      row.appendChild(main);
      row.appendChild(priceNode({ upsell: true, base_price: p.price, price: round2(p.price * UPSELL_FACTOR) }));
      row.appendChild(add);
      offerList.appendChild(row);
    });

    $('[data-cart-total]').textContent = money(Cart.total());
    $('[data-cart-checkout]').disabled = items.length === 0;
  }

  function addAndOpen(id) {
    Cart.add(id, false);
    paintCart();
    openCart();
  }

  // ================= Checkout =================
  function checkout(btn) {
    if (!Cart.items.length) return;
    var label = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Redirigiendo al pago…';
    hideError();

    fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: Cart.items.map(function (i) { return { product_id: i.product_id, upsell: i.upsell === true }; }) })
    })
      .then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; });
      })
      .then(function (res) {
        if (res.ok && res.j.checkout_url) { location.href = res.j.checkout_url; return; }
        showError(res.j.error === 'config_missing'
          ? 'Los pagos todavía no están activos. Vuelve a intentarlo más tarde.'
          : (res.j.message || 'No pudimos abrir el pago. Inténtalo de nuevo en unos segundos.'));
        btn.disabled = false;
        btn.textContent = label;
      })
      .catch(function () {
        showError('No hay conexión con el servidor. Revisa tu conexión e inténtalo de nuevo.');
        btn.disabled = false;
        btn.textContent = label;
      });
  }

  function showError(msg) {
    var err = $('[data-cart-error]');
    err.textContent = msg;
    err.hidden = false;
  }

  // ================= Arranque =================
  function init() {
    Cart.load();
    localizeMoney();
    paintNiches();
    paintCart();

    $$('[data-qty]').forEach(function (opt) {
      opt.addEventListener('click', function () {
        qty = Number(opt.getAttribute('data-qty'));
        paintNiches();
      });
    });

    $$('[data-add-niche]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var niche = btn.closest('[data-niche]').getAttribute('data-niche');
        addAndOpen('static_' + niche + '_' + qty);
      });
    });

    $$('[data-add]').forEach(function (btn) {
      btn.addEventListener('click', function () { addAndOpen(btn.getAttribute('data-add')); });
    });

    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-cart-open]')) { openCart(); return; }
      if (e.target.closest('[data-cart-close]') || e.target.closest('[data-cart-scrim]')) closeCart();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeCart();
    });

    $('[data-cart-checkout]').addEventListener('click', function (e) { checkout(e.currentTarget); });

    // Si el carrito cambia en otra pestaña, se refleja aquí.
    window.addEventListener('storage', function (e) {
      if (e.key === KEY) { Cart.load(); paintCart(); }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

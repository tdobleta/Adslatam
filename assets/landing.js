// Landing — carrito y checkout.
// El frontend solo conoce id, nombre y precio de vitrina: el backend (api/_catalog.js)
// recalcula todo contra su propio catálogo antes de cobrar. Mantener ambos en sincronía.
(function () {
  'use strict';

  var PRODUCTS = {
    static_fashion_25:         { name: '25 ads estáticos', variant: 'Moda', price: 6.99 },
    static_fashion_50:         { name: '50 ads estáticos + 25 de regalo', variant: 'Moda', price: 9.99 },
    static_supplements_25:     { name: '25 ads estáticos', variant: 'Suplementos y medicinales', price: 6.99 },
    static_supplements_50:     { name: '50 ads estáticos + 25 de regalo', variant: 'Suplementos y medicinales', price: 9.99 },
    static_gadgets_25:         { name: '25 ads estáticos', variant: 'Gadgets', price: 6.99 },
    static_gadgets_50:         { name: '50 ads estáticos + 25 de regalo', variant: 'Gadgets', price: 9.99 },
    static_beauty_25:          { name: '25 ads estáticos', variant: 'Beauty', price: 6.99 },
    static_beauty_50:          { name: '50 ads estáticos + 25 de regalo', variant: 'Beauty', price: 9.99 },
    static_bundle_200:         { name: '200 ads estáticos', variant: '50 de cada nicho', price: 24.99 },
    static_fashion_brands_75:  { name: '75 ads de marcas de moda', variant: 'Eme Studios · Scuffers · Nude Project', price: 17.99 },
    static_product_brands_100: { name: '100 ads de gadgets y productos', variant: 'Ganga Home · Voltra · Smud · Lili Pink', price: 14.99 },
    dropship_100:              { name: '50 videos de dropshipping', variant: 'Pack completo', price: 14.99 }
  };

  // Ofertas con 65 % de descuento que el carrito sugiere después del primer pack.
  var UPSELLS = [
    'static_bundle_200', 'dropship_100', 'static_fashion_brands_75', 'static_product_brands_100',
    'static_fashion_50', 'static_supplements_50', 'static_gadgets_50', 'static_beauty_50'
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
  var usd = function (n) { return moneyFmt.format(Number(n)); };

  // ================= Convertidor de monedas (estimado) =================
  // Los precios del catálogo están en USD. Otras monedas se muestran como estimado con
  // cotizaciones de /api/rates; ARS es exacto cuando Mercado Pago cobra en pesos.
  var CURRENCIES = {
    USD: { label: 'Dólar estadounidense (USD)', locale: 'es-US' },
    EUR: { label: 'Euro (EUR)', locale: 'es-ES' },
    ARS: { label: 'Peso argentino (ARS)', locale: 'es-AR' },
    BOB: { label: 'Boliviano (BOB)', locale: 'es-BO' },
    CLP: { label: 'Peso chileno (CLP)', locale: 'es-CL' },
    COP: { label: 'Peso colombiano (COP)', locale: 'es-CO' },
    CRC: { label: 'Colón costarricense (CRC)', locale: 'es-CR' },
    DOP: { label: 'Peso dominicano (DOP)', locale: 'es-DO' },
    GTQ: { label: 'Quetzal guatemalteco (GTQ)', locale: 'es-GT' },
    HNL: { label: 'Lempira hondureño (HNL)', locale: 'es-HN' },
    MXN: { label: 'Peso mexicano (MXN)', locale: 'es-MX' },
    NIO: { label: 'Córdoba nicaragüense (NIO)', locale: 'es-NI' },
    PEN: { label: 'Sol peruano (PEN)', locale: 'es-PE' },
    PYG: { label: 'Guaraní paraguayo (PYG)', locale: 'es-PY' },
    UYU: { label: 'Peso uruguayo (UYU)', locale: 'es-UY' },
    VES: { label: 'Bolívar venezolano (VES)', locale: 'es-VE' }
  };
  var CURRENCY_KEY = 'sora.currency';
  // Zona horaria del navegador -> moneda sugerida. Ecuador, El Salvador, Panamá y Puerto Rico usan USD.
  var ZONES = {
    'America/La_Paz': 'BOB', 'America/Santiago': 'CLP', 'America/Punta_Arenas': 'CLP', 'Pacific/Easter': 'CLP',
    'America/Bogota': 'COP', 'America/Costa_Rica': 'CRC', 'America/Santo_Domingo': 'DOP',
    'America/Guatemala': 'GTQ', 'America/Tegucigalpa': 'HNL', 'America/Managua': 'NIO',
    'America/Lima': 'PEN', 'America/Asuncion': 'PYG', 'America/Montevideo': 'UYU', 'America/Caracas': 'VES',
    'America/Mexico_City': 'MXN', 'America/Cancun': 'MXN', 'America/Merida': 'MXN', 'America/Monterrey': 'MXN',
    'America/Matamoros': 'MXN', 'America/Chihuahua': 'MXN', 'America/Ciudad_Juarez': 'MXN', 'America/Ojinaga': 'MXN',
    'America/Mazatlan': 'MXN', 'America/Bahia_Banderas': 'MXN', 'America/Hermosillo': 'MXN', 'America/Tijuana': 'MXN',
    'Europe/Madrid': 'EUR', 'Atlantic/Canary': 'EUR', 'Africa/Ceuta': 'EUR', 'Europe/Lisbon': 'EUR',
    'Europe/Paris': 'EUR', 'Europe/Berlin': 'EUR', 'Europe/Rome': 'EUR', 'Europe/Amsterdam': 'EUR',
    'Europe/Brussels': 'EUR', 'Europe/Vienna': 'EUR', 'Europe/Dublin': 'EUR'
  };
  var currency = 'USD';
  var rates = null;
  var curFmts = {};

  function suggestedCurrency() {
    try {
      var saved = localStorage.getItem(CURRENCY_KEY);
      if (saved && CURRENCIES[saved]) return saved;
    } catch (e) {}
    var zone = '';
    try { zone = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) {}
    if (zone.indexOf('America/Argentina/') === 0 || zone === 'America/Buenos_Aires') return 'ARS';
    return ZONES[zone] || 'USD';
  }

  function formatIn(code, value) {
    var digits = Math.abs(value) >= 100 ? 0 : 2;
    var key = code + digits;
    if (!curFmts[key]) {
      var opts = { style: 'currency', currency: code, currencyDisplay: 'narrowSymbol', minimumFractionDigits: digits, maximumFractionDigits: digits };
      try { curFmts[key] = new Intl.NumberFormat(CURRENCIES[code].locale, opts); }
      catch (e) {
        try { opts.currencyDisplay = 'symbol'; curFmts[key] = new Intl.NumberFormat(CURRENCIES[code].locale, opts); }
        catch (e2) { curFmts[key] = { format: function (n) { return Number(n).toFixed(digits) + ' ' + code; } }; }
      }
    }
    var out = curFmts[key].format(value);
    // "$" solo no dice de qué país es: se agrega el código.
    return /\$/.test(out) && out.indexOf(code) === -1 ? out + ' ' + code : out;
  }

  // ARS exacto: mismo redondeo que api/_mercadopago.js (pesos enteros por ítem).
  var exactArs = function () { return currency === 'ARS' && charge.currency === 'ARS'; };

  var money = function (n) {
    if (currency === 'USD' || !rates || !rates[currency]) return usd(n);
    if (exactArs()) return formatIn('ARS', Math.round(Number(n) * charge.rate));
    return '≈ ' + formatIn(currency, Number(n) * rates[currency]);
  };

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
      var whole = usd(node.getAttribute('data-money-millions')).replace(/[.,]00(?=\D*$)/, '');
      node.textContent = whole + ' M';
    });
  }

  // ================= Selector de cantidad por nicho =================
  var PRICES = { 25: 6.99, 50: 9.99 };
  var GIFT = { 50: 25 }; // ads de regalo por tamaño (también en api/_catalog.js)
  var qty = 50;

  function paintNiches() {
    $$('[data-qty]').forEach(function (opt) {
      var on = Number(opt.getAttribute('data-qty')) === qty;
      opt.classList.toggle('is-selected', on);
      opt.setAttribute('aria-checked', String(on));
    });
    $$('[data-niche]').forEach(function (row) {
      var gift = GIFT[qty] || 0;
      $('[data-niche-price]', row).textContent = money(PRICES[qty]);
      $('[data-niche-gift]', row).hidden = !gift;
      $('[data-niche-unit]', row).textContent = money(round2(PRICES[qty] / (qty + gift))) + ' por anuncio';
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

    $('[data-cart-total]').textContent = exactArs()
      ? formatIn('ARS', items.reduce(function (s, i) { return s + Math.round(i.price * charge.rate); }, 0))
      : money(Cart.total());
    $('[data-cart-checkout]').disabled = items.length === 0;
    paintCharge();
  }

  function addAndOpen(id) {
    Cart.add(id, false);
    paintCart();
    openCart();
  }

  // ================= Checkout (Mercado Pago) =================
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var EMAIL_KEY = 'sora.checkout.email';
  var EMAIL_HINT = 'Lo usamos para identificar tu compra si necesitas ayuda.';
  var charge = { currency: 'USD', rate: null }; // moneda en la que cobra Mercado Pago

  function setEmailError(msg) {
    var field = $('[data-email-field]');
    var input = $('#checkout-email');
    field.classList.toggle('lm-field--error', !!msg);
    if (msg) input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid');
    $('[data-email-desc]').textContent = msg || EMAIL_HINT;
  }

  // Si el servidor cobra en pesos, se muestra el importe aproximado antes de pagar.
  function loadChargeConfig() {
    fetch('/api/checkout', { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : {}; })
      .then(function (j) {
        if (j && j.currency === 'ARS' && j.ars_per_usd > 0) {
          charge = { currency: 'ARS', rate: Number(j.ars_per_usd) };
          repaint();
        }
      })
      .catch(function () {});
  }

  function paintCharge() {
    var note = $('[data-cart-charge]');
    var shown = rates && rates[currency] ? currency : 'USD';
    if (!Cart.items.length || shown === charge.currency) { note.hidden = true; return; }
    var text;
    if (charge.currency === 'ARS') {
      var ars = Cart.items.reduce(function (s, i) { return s + Math.round(i.price * charge.rate); }, 0);
      text = 'Mercado Pago te cobra ' + formatIn('ARS', ars) + ' en pesos argentinos.';
    } else {
      text = 'Mercado Pago te cobra ' + usd(Cart.total()) + ' en dólares.';
    }
    if (shown !== 'USD' || charge.currency !== 'USD') text += ' Si tu tarjeta es de otra moneda, tu banco hace la conversión.';
    if (shown !== 'USD' && !exactArs()) text += ' El total en ' + shown + ' es un estimado.';
    note.textContent = text;
    note.hidden = false;
  }

  // ================= Selector de moneda =================
  function repaint() {
    localizeMoney();
    paintNiches();
    paintCart();
    var hint = $('[data-currency-hint]');
    if (hint) hint.hidden = currency === 'USD' || exactArs();
  }

  function initCurrency() {
    var select = $('[data-currency]');
    if (!select) return;
    Object.keys(CURRENCIES).forEach(function (code) {
      var opt = el('option', null, CURRENCIES[code].label);
      opt.value = code;
      select.appendChild(opt);
    });
    select.addEventListener('change', function () {
      currency = select.value;
      try { localStorage.setItem(CURRENCY_KEY, currency); } catch (e) {}
      repaint();
    });
    fetch('/api/rates')
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) {
        if (!j || !j.rates) return;
        rates = j.rates;
        Object.keys(CURRENCIES).forEach(function (code) {
          if (!rates[code]) select.querySelector('option[value="' + code + '"]').remove();
        });
        var pick = suggestedCurrency();
        currency = rates[pick] ? pick : 'USD';
        select.value = currency;
        $('[data-currency-picker]').hidden = false;
        repaint();
      })
      .catch(function () {});
  }

  function checkout(btn) {
    if (!Cart.items.length) return;
    hideError();
    var input = $('#checkout-email');
    var email = input.value.trim();
    if (!EMAIL_RE.test(email)) {
      setEmailError(email ? 'Revisa el email: falta algo, por ejemplo nombre@correo.com.' : 'Escribe tu email para continuar.');
      input.focus();
      return;
    }
    setEmailError(null);
    try { localStorage.setItem(EMAIL_KEY, email); } catch (e) {}

    var label = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Abriendo Mercado Pago…';

    var restore = function () { btn.disabled = false; btn.textContent = label; };

    fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        items: Cart.items.map(function (i) { return { product_id: i.product_id, upsell: i.upsell === true }; })
      })
    })
      .then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; });
      })
      .then(function (res) {
        if (res.ok && res.j.checkout_url) { location.href = res.j.checkout_url; return; }
        restore();
        if (res.j.error === 'invalid_email') { setEmailError(res.j.message); input.focus(); return; }
        showError(res.j.error === 'config_missing'
          ? 'Los pagos todavía no están activos. Vuelve a intentarlo más tarde.'
          : (res.j.message || 'No pudimos abrir Mercado Pago. Inténtalo de nuevo en unos segundos.'));
      })
      .catch(function () {
        restore();
        showError('No hay conexión con el servidor. Revisa tu conexión e inténtalo de nuevo.');
      });
  }

  function showError(msg) {
    var err = $('[data-cart-error]');
    err.textContent = msg;
    err.hidden = false;
  }

  // ================= Barra superior =================
  function initNav() {
    var nav = $('[data-nav]');
    var promo = $('.promo');
    if (!nav) return;

    // Transparente arriba; vidrio cuando ya flota sobre el contenido.
    var ticking = false;
    var paintScroll = function () {
      ticking = false;
      nav.classList.toggle('is-scrolled', window.scrollY > (promo ? promo.offsetHeight : 0));
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(paintScroll); }
    }, { passive: true });
    paintScroll();

    if (!('IntersectionObserver' in window)) return;

    // El botón principal de la barra solo aparece cuando el de la portada ya no se ve.
    var cta = $('[data-nav-cta]');
    var heroActions = $('[data-hero-actions]');
    if (cta && heroActions) {
      new IntersectionObserver(function (entries) {
        cta.hidden = entries[0].isIntersecting;
      }).observe(heroActions);
    }

    // Resalta la sección visible.
    var links = $$('[data-nav-link]');
    var setActive = function (id) {
      links.forEach(function (a) {
        var on = a.getAttribute('href') === '#' + id;
        a.classList.toggle('is-active', on);
        if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
      });
    };
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['top'].concat(links.map(function (a) { return a.getAttribute('href').slice(1); })).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  // ================= Arranque =================
  function init() {
    Cart.load();
    initNav();
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

    $('[data-checkout-form]').addEventListener('submit', function (e) {
      e.preventDefault();
      checkout($('[data-cart-checkout]'));
    });
    $('#checkout-email').addEventListener('blur', function (e) {
      var v = e.target.value.trim();
      if (v && !EMAIL_RE.test(v)) setEmailError('Revisa el email: falta algo, por ejemplo nombre@correo.com.');
      else setEmailError(null);
    });
    try { $('#checkout-email').value = localStorage.getItem(EMAIL_KEY) || ''; } catch (e) {}
    loadChargeConfig();
    initCurrency();

    // Si el carrito cambia en otra pestaña, se refleja aquí.
    window.addEventListener('storage', function (e) {
      if (e.key === KEY) { Cart.load(); paintCart(); }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

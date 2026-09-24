/* @ds-bundle: {"format":4,"namespace":"Lumen","components":[{"name":"Button"},{"name":"TextField"},{"name":"Switch"},{"name":"SegmentedControl"},{"name":"Badge"},{"name":"Card"},{"name":"Metric"},{"name":"NavBar"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    return Array.prototype.filter.call(arguments, Boolean).join(' ');
  }

  function rest(props, keys) {
    var out = {};
    for (var k in props) {
      if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    }
    return out;
  }

  function Button(props) {
    var p = rest(props, ['variant', 'size', 'className', 'children', 'type']);
    return h('button', Object.assign({ type: props.type || 'button' }, p, {
      className: cx('lm-btn', 'lm-btn--' + (props.variant || 'secondary'), 'lm-btn--' + (props.size || 'md'), props.className)
    }), props.children);
  }

  function TextField(props) {
    var autoId = React.useId();
    var id = props.id || autoId;
    var p = rest(props, ['label', 'hint', 'error', 'className', 'id']);
    var message = props.error || props.hint;
    var descId = message ? id + '-desc' : undefined;
    return h('div', { className: cx('lm-field', props.error && 'lm-field--error', props.className) },
      props.label ? h('label', { className: 'lm-field__label', htmlFor: id }, props.label) : null,
      h('input', Object.assign({ className: 'lm-field__input', id: id, 'aria-invalid': props.error ? true : undefined, 'aria-describedby': descId }, p)),
      message ? h('p', { className: 'lm-field__desc', id: descId }, message) : null
    );
  }

  function Switch(props) {
    var controlled = props.checked !== undefined;
    var state = React.useState(!!props.defaultChecked);
    var on = controlled ? !!props.checked : state[0];
    function toggle() {
      var next = !on;
      if (!controlled) state[1](next);
      if (props.onChange) props.onChange(next);
    }
    return h('label', { className: cx('lm-switch', props.disabled && 'is-disabled', props.className) },
      h('button', {
        type: 'button', role: 'switch', 'aria-checked': on, disabled: props.disabled,
        className: 'lm-switch__track', onClick: toggle
      }, h('span', { className: 'lm-switch__thumb' })),
      props.label ? h('span', { className: 'lm-switch__label' }, props.label) : null
    );
  }

  function SegmentedControl(props) {
    var options = (props.options || []).map(function (o) {
      return typeof o === 'string' ? { value: o, label: o } : o;
    });
    var controlled = props.value !== undefined;
    var state = React.useState(props.defaultValue !== undefined ? props.defaultValue : (options[0] && options[0].value));
    var current = controlled ? props.value : state[0];
    return h('div', { role: 'radiogroup', 'aria-label': props['aria-label'], className: cx('lm-seg', props.className) },
      options.map(function (o) {
        var selected = o.value === current;
        return h('button', {
          key: o.value, type: 'button', role: 'radio', 'aria-checked': selected,
          className: cx('lm-seg__opt', selected && 'is-selected'),
          onClick: function () {
            if (!controlled) state[1](o.value);
            if (props.onChange) props.onChange(o.value);
          }
        }, o.label);
      })
    );
  }

  function Badge(props) {
    return h('span', { className: cx('lm-badge', 'lm-badge--' + (props.tone || 'neutral'), props.className) },
      props.dot ? h('span', { className: 'lm-badge__dot', 'aria-hidden': true }) : null,
      props.children
    );
  }

  function Card(props) {
    var p = rest(props, ['title', 'subtitle', 'action', 'children', 'className', 'padding']);
    var head = (props.title || props.action)
      ? h('div', { className: 'lm-card__head' },
          h('div', { className: 'lm-card__heading' },
            props.title ? h('h3', { className: 'lm-card__title' }, props.title) : null,
            props.subtitle ? h('p', { className: 'lm-card__subtitle' }, props.subtitle) : null
          ),
          props.action ? h('div', { className: 'lm-card__action' }, props.action) : null
        )
      : null;
    return h('section', Object.assign({}, p, {
      className: cx('lm-card', props.padding === 'none' && 'lm-card--flush', props.className)
    }), head, props.children);
  }

  function Sparkline(data) {
    if (!data || data.length < 2) return null;
    var w = 120, ht = 40, pad = 4;
    var min = Math.min.apply(null, data), max = Math.max.apply(null, data), span = (max - min) || 1;
    var pts = data.map(function (v, i) {
      return [pad + (i / (data.length - 1)) * (w - pad * 2), ht - pad - ((v - min) / span) * (ht - pad * 2)];
    });
    var line = pts.map(function (pt, i) { return (i ? 'L' : 'M') + pt[0].toFixed(1) + ' ' + pt[1].toFixed(1); }).join(' ');
    var first = pts[0], last = pts[pts.length - 1];
    var area = line + ' L' + last[0].toFixed(1) + ' ' + ht + ' L' + first[0].toFixed(1) + ' ' + ht + ' Z';
    return h('svg', { className: 'lm-metric__spark', viewBox: '0 0 ' + w + ' ' + ht, width: w, height: ht, 'aria-hidden': true },
      h('path', { className: 'lm-metric__area', d: area }),
      h('path', { className: 'lm-metric__line', d: line }),
      h('circle', { className: 'lm-metric__dot', cx: last[0], cy: last[1], r: 3.5 })
    );
  }

  var ARROWS = { up: '↑', down: '↓', flat: '→' };

  function Metric(props) {
    var trend = props.trend || 'flat';
    var tone = props.deltaTone || (trend === 'up' ? 'positive' : trend === 'down' ? 'negative' : 'neutral');
    return h('div', { className: cx('lm-metric', props.className) },
      h('span', { className: 'lm-metric__label' }, props.label),
      h('div', { className: 'lm-metric__row' },
        h('span', { className: 'lm-metric__value' }, props.value),
        Sparkline(props.data)
      ),
      (props.delta || props.caption)
        ? h('div', { className: 'lm-metric__foot' },
            props.delta ? h('span', { className: 'lm-metric__delta lm-metric__delta--' + tone }, ARROWS[trend] + ' ' + props.delta) : null,
            props.caption ? h('span', null, props.caption) : null
          )
        : null
    );
  }

  function NavBar(props) {
    return h('header', { className: cx('lm-navbar', props.sticky === false && 'lm-navbar--static', props.className) },
      h('div', { className: 'lm-navbar__lead' },
        props.leading || null,
        props.title ? h('span', { className: 'lm-navbar__title' }, props.title) : null
      ),
      props.children ? h('div', { className: 'lm-navbar__actions' }, props.children) : null
    );
  }

  window.Lumen = Object.assign(window.Lumen || {}, {
    Button: Button,
    TextField: TextField,
    Switch: Switch,
    SegmentedControl: SegmentedControl,
    Badge: Badge,
    Card: Card,
    Metric: Metric,
    NavBar: NavBar
  });
})();

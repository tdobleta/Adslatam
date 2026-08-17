/* @ds-bundle: {"format":4,"namespace":"SaaSModernaDesignSystem_2df059","components":[{"name":"CanvasLabel","sourcePath":"components/app/CanvasLabel.jsx"},{"name":"InspectorRow","sourcePath":"components/app/InspectorRow.jsx"},{"name":"NumberField","sourcePath":"components/app/InspectorRow.jsx"},{"name":"LayerRow","sourcePath":"components/app/LayerRow.jsx"},{"name":"PanelSection","sourcePath":"components/app/PanelSection.jsx"},{"name":"Toolbar","sourcePath":"components/app/Toolbar.jsx"},{"name":"ToolbarItem","sourcePath":"components/app/Toolbar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"PromptBar","sourcePath":"components/forms/PromptBar.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"ArrowLink","sourcePath":"components/marketing/ArrowLink.jsx"},{"name":"CheckList","sourcePath":"components/marketing/CheckList.jsx"},{"name":"FeatureTile","sourcePath":"components/marketing/FeatureTile.jsx"},{"name":"LogoRow","sourcePath":"components/marketing/LogoRow.jsx"},{"name":"SectionHeading","sourcePath":"components/marketing/SectionHeading.jsx"},{"name":"TestimonialCard","sourcePath":"components/marketing/TestimonialCard.jsx"}],"sourceHashes":{"components/app/CanvasLabel.jsx":"f897d42426e0","components/app/InspectorRow.jsx":"bebe156ee6fb","components/app/LayerRow.jsx":"19a387442eff","components/app/PanelSection.jsx":"0dc361cac254","components/app/Toolbar.jsx":"319534cb6725","components/core/Badge.jsx":"ef4c4a641cae","components/core/Button.jsx":"6e4dd3a6079c","components/core/Card.jsx":"03988aefc24f","components/core/Icon.jsx":"bef5f0800f30","components/core/IconButton.jsx":"07419eac87d1","components/core/Wordmark.jsx":"af2f53e3b722","components/forms/Checkbox.jsx":"3546abcb577f","components/forms/Input.jsx":"b105848889c2","components/forms/PromptBar.jsx":"6117c52f4e9e","components/forms/SegmentedControl.jsx":"22d0813fa6fc","components/forms/Select.jsx":"7b04ffae608a","components/forms/Switch.jsx":"694a9d19da36","components/marketing/ArrowLink.jsx":"e6598640005e","components/marketing/CheckList.jsx":"3f1da189c1d4","components/marketing/FeatureTile.jsx":"3ebc8cb61fe4","components/marketing/LogoRow.jsx":"05f96232da3b","components/marketing/SectionHeading.jsx":"8d30efce732f","components/marketing/TestimonialCard.jsx":"eeef59f2b81c","doc-page.js":"371bab66f42d","ui_kits/editor/Canvas.jsx":"145c6688b147","ui_kits/editor/Inspector.jsx":"bb93b8a713a5","ui_kits/editor/LayersPanel.jsx":"2c6692b541d0","ui_kits/marketing_site/AudienceSection.jsx":"e76a33dded53","ui_kits/marketing_site/BentoSection.jsx":"378c767bb0ed","ui_kits/marketing_site/CtaFooter.jsx":"4867b3716a46","ui_kits/marketing_site/Hero.jsx":"7f12d2c85e9e","ui_kits/marketing_site/SiteNav.jsx":"1a6f98bdc8d9","ui_kits/marketing_site/TestimonialWall.jsx":"59c435c08434","ui_kits/templates/TemplateCard.jsx":"98f459d97f66"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SaaSModernaDesignSystem_2df059 = window.SaaSModernaDesignSystem_2df059 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/app/CanvasLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Selection chrome on the canvas: a 1px blue outline with a small name tag above it. */
function CanvasLabel({
  label,
  tone = 'blue',
  children,
  style,
  ...rest
}) {
  const colors = {
    blue: 'var(--blue-500)',
    violet: 'var(--violet-500)',
    magenta: 'var(--magenta-500)',
    attention: 'var(--attention)'
  };
  const c = colors[tone] || colors.blue;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      position: 'relative',
      outline: '1px solid ' + c,
      outlineOffset: 0,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: -15,
      font: 'var(--weight-semibold) 9px/1 var(--font-sans)',
      letterSpacing: '0.02em',
      color: c,
      whiteSpace: 'nowrap'
    }
  }, label), children);
}
Object.assign(__ds_scope, { CanvasLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/CanvasLabel.jsx", error: String((e && e.message) || e) }); }

// components/app/InspectorRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Label-left / control-right row. Labels are fixed-width so controls align down the panel. */
function InspectorRow({
  label,
  children,
  labelWidth = 56,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      minHeight: 28,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: labelWidth,
      flex: '0 0 auto',
      font: 'var(--type-xs)',
      fontWeight: 'var(--weight-regular)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      minWidth: 0
    }
  }, children));
}

/** Small numeric field used across the inspector. */
function NumberField({
  value,
  prefix,
  onChange,
  width,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      height: 28,
      padding: '0 8px',
      flex: width ? '0 0 auto' : 1,
      width,
      background: 'var(--surface-inset)',
      borderRadius: 'var(--radius-sm)',
      minWidth: 0,
      ...style
    }
  }, prefix ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-2xs, var(--type-xs))',
      fontSize: 11,
      color: 'var(--text-subtle)'
    }
  }, prefix) : null, /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    onChange: onChange
  }, rest, {
    style: {
      width: '100%',
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'var(--type-xs)',
      color: 'var(--text-strong)'
    }
  })));
}
Object.assign(__ds_scope, { InspectorRow, NumberField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/InspectorRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  elevation = 'card',
  padding = 20,
  radius = 'var(--radius-card)',
  interactive = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const shadows = {
    flat: 'inset 0 0 0 1px var(--line-subtle)',
    card: 'var(--shadow-card)',
    panel: 'var(--shadow-panel)',
    float: 'var(--shadow-float)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      background: 'var(--surface-card)',
      borderRadius: radius,
      padding,
      boxShadow: interactive && hover ? 'var(--shadow-panel)' : shadows[elevation],
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-out)',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://cdn.jsdelivr.net/npm/lucide-static@0.428.0/icons/';
const cache = new Map();

/** Lucide glyph, fetched once per name and inlined so it inherits currentColor. */
function Icon({
  name = 'arrow-right',
  size = 16,
  color = 'currentColor',
  style,
  ...rest
}) {
  const [svg, setSvg] = React.useState(() => cache.get(name) || '');
  React.useEffect(() => {
    if (cache.has(name)) {
      setSvg(cache.get(name));
      return;
    }
    let alive = true;
    fetch(CDN + name + '.svg').then(r => r.ok ? r.text() : '').then(t => {
      const clean = t.replace(/<!--[\s\S]*?-->/g, '').trim();
      cache.set(name, clean);
      if (alive) setSvg(clean);
    }).catch(() => {});
    return () => {
      alive = false;
    };
  }, [name]);
  const sized = svg ? svg.replace('<svg', '<svg width="' + size + '" height="' + size + '" style="display:block"') : '';
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      flex: '0 0 auto',
      color,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: sized
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/app/LayerRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** One row of the layer tree: indent, disclosure, type glyph, name, optional trailing meta. */
function LayerRow({
  name,
  icon = 'square',
  depth = 0,
  selected = false,
  expandable = false,
  expanded = false,
  meta,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      height: 24,
      paddingRight: 8,
      paddingLeft: 6 + depth * 13,
      cursor: 'pointer',
      borderRadius: 'var(--radius-xs)',
      background: selected ? 'var(--accent)' : hover ? 'var(--surface-hover)' : 'transparent',
      color: selected ? 'var(--text-inverse)' : 'var(--text-body)',
      transition: 'background var(--duration-instant) var(--ease-standard)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: expandable ? expanded ? 'chevron-down' : 'chevron-right' : 'dot',
    size: 11,
    color: selected ? 'rgba(255,255,255,.8)' : 'var(--text-subtle)',
    style: {
      opacity: expandable ? 1 : 0
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12,
    color: selected ? 'var(--ink-000)' : 'var(--blue-500)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      font: 'var(--type-xs)',
      fontWeight: 'var(--weight-regular)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, name), meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-xs)',
      fontSize: 11,
      color: selected ? 'rgba(255,255,255,.85)' : 'var(--text-subtle)'
    }
  }, meta) : null);
}
Object.assign(__ds_scope, { LayerRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/LayerRow.jsx", error: String((e && e.message) || e) }); }

// components/app/PanelSection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Titled group inside the inspector: 11px label row with an optional add affordance. */
function PanelSection({
  title,
  action = 'plus',
  children,
  info = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({}, rest, {
    style: {
      padding: '10px 12px',
      boxShadow: 'inset 0 -1px 0 var(--line-subtle)',
      ...style
    }
  }), title ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 22,
      marginBottom: children ? 6 : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      font: 'var(--type-xs)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, title, info ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "info",
    size: 11,
    color: "var(--text-subtle)"
  }) : null), action ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: action,
    size: 13,
    color: "var(--text-subtle)"
  }) : null) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, children) : null);
}
Object.assign(__ds_scope, { PanelSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/PanelSection.jsx", error: String((e && e.message) || e) }); }

// components/app/Toolbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Editor top bar: left tool cluster, flexible middle, right cluster. 56px tall, hairline bottom. */
function Toolbar({
  left,
  center,
  right,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 'var(--topbar-h)',
      padding: '0 12px',
      background: 'var(--surface-card)',
      boxShadow: 'inset 0 -1px 0 var(--line-subtle)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, left), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      minWidth: 0
    }
  }, center), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, right));
}

/** Text + icon tool entry for the toolbar's left cluster. */
function ToolbarItem({
  icon,
  children,
  active = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 30,
      padding: '0 10px',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      background: active ? 'var(--surface-active)' : hover ? 'var(--surface-hover)' : 'transparent',
      color: 'var(--text-strong)',
      font: 'var(--type-xs)',
      transition: 'var(--transition-control)',
      ...style
    }
  }), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14,
    color: "var(--text-muted)"
  }) : null, children);
}
Object.assign(__ds_scope, { Toolbar, ToolbarItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/Toolbar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    background: 'var(--surface-inset)',
    color: 'var(--text-body)'
  },
  accent: {
    background: 'var(--accent-soft)',
    color: 'var(--blue-700)'
  },
  brand: {
    background: 'var(--gradient-brand-flat)',
    color: 'var(--text-inverse)'
  },
  success: {
    background: '#E4FBEF',
    color: 'var(--green-600)'
  },
  attention: {
    background: '#FFEDE6',
    color: 'var(--orange-600)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-body)',
    boxShadow: 'inset 0 0 0 1px var(--line)'
  },
  inverse: {
    background: 'rgba(255,255,255,.16)',
    color: 'var(--text-inverse)'
  }
};
function Badge({
  children,
  tone = 'neutral',
  icon,
  uppercase = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      height: 22,
      padding: '0 9px',
      borderRadius: 'var(--radius-pill)',
      font: 'var(--type-xs)',
      letterSpacing: uppercase ? 'var(--tracking-caps)' : 'var(--tracking-tight)',
      textTransform: uppercase ? 'uppercase' : 'none',
      fontSize: uppercase ? 'var(--size-2xs)' : undefined,
      whiteSpace: 'nowrap',
      ...TONES[tone],
      ...style
    }
  }), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 'var(--control-h-sm)',
    padding: '0 12px',
    font: 'var(--type-xs)',
    gap: 6,
    icon: 14
  },
  md: {
    height: 'var(--control-h)',
    padding: '0 16px',
    font: 'var(--type-sm)',
    gap: 7,
    icon: 16
  },
  lg: {
    height: 'var(--control-h-lg)',
    padding: '0 22px',
    font: 'var(--weight-semibold) 15px/1.2 var(--font-sans)',
    gap: 8,
    icon: 18
  },
  xl: {
    height: 'var(--control-h-xl)',
    padding: '0 28px',
    font: 'var(--weight-semibold) 17px/1.2 var(--font-sans)',
    gap: 9,
    icon: 20
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--accent)',
    color: 'var(--accent-contrast)',
    boxShadow: 'var(--shadow-accent)'
  },
  dark: {
    background: 'var(--action-solid)',
    color: 'var(--text-inverse)',
    boxShadow: 'var(--shadow-xs)'
  },
  gradient: {
    background: 'var(--gradient-brand-flat)',
    color: 'var(--text-inverse)',
    boxShadow: 'var(--shadow-accent)'
  },
  attention: {
    background: 'var(--attention)',
    color: 'var(--text-inverse)',
    boxShadow: '0 2px 8px rgba(255,78,23,.30)'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--text-strong)',
    boxShadow: 'inset 0 0 0 1px var(--line)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)'
  },
  inverse: {
    background: 'var(--ink-000)',
    color: 'var(--ink-900)'
  }
};
const HOVER = {
  primary: 'var(--accent-hover)',
  dark: 'var(--action-solid-hover)',
  attention: 'var(--orange-600)',
  secondary: 'var(--surface-hover)',
  ghost: 'var(--surface-hover)',
  inverse: 'var(--ink-050)'
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  shape = 'rounded',
  icon,
  iconRight,
  fullWidth = false,
  disabled = false,
  as = 'button',
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: as === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest, {
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      font: s.font,
      letterSpacing: 'var(--tracking-tight)',
      whiteSpace: 'nowrap',
      borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-control)',
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'var(--transition-control)',
      transform: press && !disabled ? 'scale(var(--press-scale))' : 'scale(1)',
      ...v,
      background: hover && !disabled && HOVER[variant] ? HOVER[variant] : v.background,
      ...style
    }
  }), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 24,
  md: 28,
  lg: 36
};
function IconButton({
  icon = 'plus',
  size = 'md',
  variant = 'ghost',
  active = false,
  label,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const px = SIZES[size] || SIZES.md;
  const fills = {
    ghost: active ? 'var(--surface-active)' : hover ? 'var(--surface-hover)' : 'transparent',
    solid: active ? 'var(--accent)' : hover ? 'var(--surface-hover)' : 'var(--surface-inset)',
    accent: hover ? 'var(--accent-hover)' : 'var(--accent)'
  };
  const colors = {
    ghost: active ? 'var(--text-strong)' : 'var(--text-muted)',
    solid: active ? 'var(--ink-000)' : 'var(--text-body)',
    accent: 'var(--ink-000)'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label || icon,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      width: px,
      height: px,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      background: fills[variant],
      color: colors[variant],
      transition: 'var(--transition-control)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'lg' ? 18 : 15
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SaaS Moderna has no supplied logo file. The brand is set in type:
 * "SaaS" in black weight, "Moderna" in regular, tight tracking, one word-space.
 */
function Wordmark({
  size = 18,
  tone = 'ink',
  style,
  ...rest
}) {
  const color = tone === 'inverse' ? 'var(--text-inverse)' : 'var(--text-strong)';
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: '0.28em',
      fontFamily: 'var(--font-display)',
      fontSize: size,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-black)'
    }
  }, "SaaS"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-regular)',
      opacity: tone === 'inverse' ? 0.86 : 0.72
    }
  }, "Moderna"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      font: 'var(--type-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 16,
      height: 16,
      borderRadius: 'var(--radius-xs)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: checked ? 'var(--accent)' : 'var(--surface-card)',
      boxShadow: checked ? 'none' : 'inset 0 0 0 1px var(--line-strong)',
      transition: 'var(--transition-control)'
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 11,
    color: "var(--ink-000)"
  }) : null), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  value,
  defaultValue,
  placeholder,
  icon,
  size = 'md',
  invalid = false,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: h,
      padding: '0 12px',
      background: disabled ? 'var(--surface-inset)' : 'var(--surface-card)',
      borderRadius: 'var(--radius-control)',
      boxShadow: invalid ? 'inset 0 0 0 1px var(--danger)' : focus ? 'inset 0 0 0 1px var(--line-focus), var(--ring-focus)' : 'inset 0 0 0 1px var(--line)',
      transition: 'var(--transition-control)',
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15,
    color: "var(--text-subtle)"
  }) : null, /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: size === 'lg' ? 'var(--type-body)' : 'var(--type-sm)',
      color: 'var(--text-strong)'
    }
  })));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/PromptBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hero AI prompt field: a white capsule floating on the gradient, inside a translucent halo. */
function PromptBar({
  placeholder = 'Describe the site you want to build',
  value,
  onChange,
  onSubmit,
  cta = 'Start with AI',
  badge = 'AI',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      padding: 10,
      borderRadius: 'var(--radius-3xl)',
      background: 'rgba(255,255,255,.28)',
      backdropFilter: 'saturate(140%) blur(10px)',
      WebkitBackdropFilter: 'saturate(140%) blur(10px)',
      boxShadow: '0 20px 60px rgba(30,20,80,.18)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      height: 60,
      padding: '0 10px 0 14px',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      background: 'var(--violet-050)',
      color: 'var(--violet-500)',
      font: 'var(--weight-bold) 11px/1 var(--font-sans)',
      letterSpacing: '-0.02em'
    }
  }, badge), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onKeyDown: e => {
      if (e.key === 'Enter' && onSubmit) onSubmit(e.currentTarget.value);
    },
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'var(--type-body-lg)',
      fontWeight: 'var(--weight-regular)',
      color: 'var(--text-strong)'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "gradient",
    size: "lg",
    icon: "sparkles",
    onClick: () => onSubmit && onSubmit(value)
  }, cta)));
}
Object.assign(__ds_scope, { PromptBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/PromptBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pill-track tab switcher used for audience filters and panel modes. */
function SegmentedControl({
  items = [],
  value,
  onChange,
  variant = 'pill',
  style,
  ...rest
}) {
  const pill = variant === 'pill';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      flexWrap: pill ? 'wrap' : 'nowrap',
      gap: pill ? 2 : 0,
      padding: pill ? 3 : 2,
      background: pill ? 'var(--surface-inset)' : 'var(--surface-card)',
      borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-md)',
      boxShadow: pill ? 'none' : 'inset 0 0 0 1px var(--line-subtle)',
      ...style
    }
  }), items.map(it => {
    const key = it.value ?? it,
      label = it.label ?? it,
      on = key === value;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      onClick: () => onChange && onChange(key),
      style: {
        height: pill ? 30 : 26,
        padding: pill ? '0 16px' : '0 12px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-sm)',
        background: on ? pill ? 'var(--ink-900)' : 'var(--surface-inset)' : 'transparent',
        color: on ? pill ? 'var(--text-inverse)' : 'var(--text-strong)' : 'var(--text-muted)',
        font: 'var(--type-sm)',
        letterSpacing: 'var(--tracking-tight)',
        transition: 'var(--transition-control)'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  value,
  onChange,
  size = 'md',
  style,
  ...rest
}) {
  const h = size === 'sm' ? 'var(--control-h-sm)' : 'var(--control-h)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    onChange: onChange
  }, rest, {
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: h,
      padding: '0 26px 0 10px',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-inset)',
      color: 'var(--text-strong)',
      font: 'var(--type-xs)',
      cursor: 'pointer',
      outline: 'none'
    }
  }), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value ?? o,
    value: o.value ?? o
  }, o.label ?? o))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 13,
    color: "var(--text-subtle)",
    style: {
      position: 'absolute',
      right: 8,
      pointerEvents: 'none'
    }
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => onChange && onChange(!checked)
  }, rest, {
    style: {
      width: 34,
      height: 20,
      padding: 2,
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--accent)' : 'var(--ink-200)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      display: 'inline-flex',
      alignItems: 'center',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: 'var(--ink-000)',
      boxShadow: 'var(--shadow-xs)',
      transform: checked ? 'translateX(14px)' : 'translateX(0)',
      transition: 'transform var(--duration-fast) var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ArrowLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ArrowLink({
  children,
  href = '#',
  tone = 'accent',
  size = 15,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const colors = {
    accent: 'var(--text-link)',
    ink: 'var(--text-strong)',
    inverse: 'var(--text-inverse)'
  };
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: colors[tone],
      fontFamily: 'var(--font-sans)',
      fontSize: size,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-tight)',
      textDecoration: 'none',
      ...style
    }
  }), children, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: size,
    style: {
      transform: hover ? 'translateX(3px)' : 'none',
      transition: 'transform var(--duration-fast) var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { ArrowLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ArrowLink.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CheckList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CheckList({
  items = [],
  tone = 'ink',
  direction = 'row',
  style,
  ...rest
}) {
  const inverse = tone === 'inverse';
  return /*#__PURE__*/React.createElement("ul", _extends({}, rest, {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: direction === 'row' ? 'row' : 'column',
      gap: direction === 'row' ? 24 : 10,
      ...style
    }
  }), items.map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      font: 'var(--type-sm)',
      color: inverse ? 'var(--text-inverse)' : 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    color: inverse ? 'var(--ink-000)' : 'var(--green-600)'
  }), t)));
}
Object.assign(__ds_scope, { CheckList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CheckList.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FeatureTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILLS = {
  blue: 'var(--gradient-tile-blue)',
  violet: 'var(--gradient-tile-violet)',
  green: 'var(--gradient-tile-green)',
  night: 'var(--gradient-tile-night)',
  mist: 'var(--gradient-tile-mist)',
  white: 'var(--surface-card)'
};

/** Bento feature tile: gradient or white panel, title + one-line body top-left, round arrow top-right, artwork bleeding off the bottom edge. */
function FeatureTile({
  title,
  body,
  fill = 'blue',
  href,
  children,
  minHeight = 240,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const light = fill === 'white' || fill === 'mist';
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      position: 'relative',
      overflow: 'hidden',
      minHeight,
      borderRadius: 'var(--radius-tile)',
      background: FILLS[fill] || FILLS.blue,
      boxShadow: light ? 'inset 0 0 0 1px var(--line-subtle)' : 'none',
      color: light ? 'var(--text-strong)' : 'var(--text-inverse)',
      transition: 'transform var(--duration-base) var(--ease-out)',
      transform: hover ? 'translateY(-3px)' : 'none',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      padding: '22px 22px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h4)',
      fontSize: 18,
      letterSpacing: 'var(--tracking-heading)'
    }
  }, title), body ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      font: 'var(--type-xs)',
      fontWeight: 'var(--weight-regular)',
      lineHeight: 1.5,
      color: light ? 'var(--text-muted)' : 'var(--text-inverse-muted)'
    }
  }, body) : null), href !== undefined ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: '0 0 auto',
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: light ? 'var(--surface-inset)' : 'rgba(255,255,255,.22)',
      transform: hover ? 'translate(2px,-2px)' : 'none',
      transition: 'transform var(--duration-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 13,
    color: light ? 'var(--text-muted)' : 'var(--ink-000)'
  })) : null), children);
}
Object.assign(__ds_scope, { FeatureTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FeatureTile.jsx", error: String((e && e.message) || e) }); }

// components/marketing/LogoRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Customer proof strip. Names are set in type, since no partner logo files ship with this system. */
function LogoRow({
  names = [],
  tone = 'inverse',
  caption,
  style,
  ...rest
}) {
  const inverse = tone === 'inverse';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 18,
      ...style
    }
  }), caption ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-xs)',
      color: inverse ? 'var(--text-inverse-muted)' : 'var(--text-subtle)'
    }
  }, caption) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 44
    }
  }, names.map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '-0.01em',
      color: inverse ? 'var(--text-inverse)' : 'var(--ink-700)',
      opacity: inverse ? 0.9 : 0.62
    }
  }, n))));
}
Object.assign(__ds_scope, { LogoRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/LogoRow.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'left',
  maxWidth = 640,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth,
      textAlign: align,
      margin: align === 'center' ? '0 auto' : undefined,
      ...style
    }
  }), eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      color: 'var(--text-subtle)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--type-h1)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-strong)',
      textWrap: 'pretty'
    }
  }, title), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body-lg)',
      color: 'var(--text-muted)',
      textWrap: 'pretty'
    }
  }, body) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Social-proof card for the masonry wall: avatar, name, @handle, short body with @mentions highlighted. */
function TestimonialCard({
  name,
  handle,
  avatar,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      padding: 16,
      boxShadow: 'var(--shadow-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      flex: '0 0 auto',
      overflow: 'hidden',
      background: avatar ? `center/cover url(${avatar})` : 'var(--surface-inset)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--weight-semibold) 12px/1 var(--font-sans)',
      color: 'var(--text-subtle)'
    }
  }, avatar ? null : (name || '?').slice(0, 1)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-xs)',
      fontWeight: 'var(--weight-regular)',
      color: 'var(--text-subtle)'
    }
  }, handle))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-sm)',
      fontWeight: 'var(--weight-regular)',
      lineHeight: 1.5,
      color: 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, children));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/editor/Canvas.jsx
try { (() => {
const {
  CanvasLabel,
  Badge,
  Button,
  Card,
  Icon
} = window.SaaSModernaDesignSystem_2df059;
function DeviceFrame({
  label,
  width,
  children,
  active
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      width
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 20,
      font: 'var(--weight-semibold) 10px/1 var(--font-sans)',
      color: active ? 'var(--blue-500)' : 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 3,
      background: active ? 'var(--blue-500)' : 'var(--ink-300)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "monitor",
    size: 8,
    color: "#fff"
  })), label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, "Breakpoint ", /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 10,
    color: "var(--blue-500)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      outline: active ? '1px solid var(--blue-500)' : '1px solid var(--line)',
      height: 400,
      overflow: 'hidden'
    }
  }, children));
}
function Canvas() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      position: 'relative',
      background: 'var(--ink-050)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      padding: '28px 40px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(DeviceFrame, {
    label: "Desktop",
    width: 560,
    active: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 30px',
      position: 'relative',
      height: '100%',
      background: '#FBF9F5'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--type-xs)',
      color: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Studio"), /*#__PURE__*/React.createElement("span", null, "say hello")), /*#__PURE__*/React.createElement(CanvasLabel, {
    label: "Header",
    style: {
      marginTop: 26,
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 44px/0.98 Georgia, serif',
      letterSpacing: '-0.02em',
      color: 'var(--ink-900)'
    }
  }, "Creative", /*#__PURE__*/React.createElement("br", null), "Portfolio")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      maxWidth: 330,
      font: 'var(--type-sm)',
      fontWeight: 'var(--weight-regular)',
      color: 'var(--ink-600)'
    }
  }, "This template is for professionals in the creative industry. It offers a minimalistic layout that allows you to showcase your skills in a clear and concise manner."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 150,
      background: 'linear-gradient(120deg,#B9A6F5 0%,#D9C7FB 40%,#EFE3FF 100%)'
    }
  }))), /*#__PURE__*/React.createElement(DeviceFrame, {
    label: "Phone \xB7 390",
    width: 200
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      background: '#FBF9F5',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 24px/1 Georgia, serif',
      color: 'var(--ink-900)'
    }
  }, "Creative", /*#__PURE__*/React.createElement("br", null), "Portfolio"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      font: 'var(--type-xs)',
      fontWeight: 'var(--weight-regular)',
      color: 'var(--ink-600)'
    }
  }, "A minimalistic layout for creative professionals."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      height: 120,
      borderRadius: 6,
      background: 'linear-gradient(160deg,#B9A6F5,#EFE3FF)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 300,
      bottom: 92
    }
  }, /*#__PURE__*/React.createElement(CanvasLabel, {
    label: "Button Component",
    tone: "attention",
    style: {
      padding: 4,
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "attention",
    icon: "arrow-right"
  }, "Start Today"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 34,
      top: 120,
      width: 200
    }
  }, /*#__PURE__*/React.createElement(CanvasLabel, {
    label: "CMS Tweet",
    tone: "magenta"
  }, /*#__PURE__*/React.createElement(Card, {
    elevation: "card",
    padding: 12,
    style: {
      borderRadius: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      background: 'var(--surface-inset)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-xs)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, "Kevin"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-xs)',
      fontSize: 11,
      color: 'var(--text-subtle)'
    }
  }, "@kvncnls"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      font: 'var(--type-xs)',
      fontWeight: 'var(--weight-regular)',
      color: 'var(--text-body)'
    }
  }, "It's like a design tool, but you're actually building the site.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: 18,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-float)',
      padding: '5px 8px'
    }
  }, ['mouse-pointer-2', 'hand', 'message-circle'].map((n, i) => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      background: i === 0 ? 'var(--surface-inset)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 14,
    color: i === 0 ? 'var(--text-strong)' : 'var(--text-muted)'
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 18,
      background: 'var(--line-subtle)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      padding: '0 8px',
      font: 'var(--type-xs)',
      color: 'var(--text-body)'
    }
  }, "100% ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 11,
    color: "var(--text-subtle)"
  }))));
}
window.Canvas = Canvas;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/editor/Canvas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/editor/Inspector.jsx
try { (() => {
const {
  PanelSection,
  InspectorRow,
  NumberField,
  Select,
  SegmentedControl,
  IconButton,
  Switch,
  Icon
} = window.SaaSModernaDesignSystem_2df059;
function Inspector({
  layerName
}) {
  const [dir, setDir] = React.useState('Vertical');
  const [type, setType] = React.useState('Stack');
  const [wrap, setWrap] = React.useState('No');
  const [visible, setVisible] = React.useState(true);
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 246,
      flex: '0 0 auto',
      background: 'var(--surface-card)',
      boxShadow: 'inset 1px 0 0 var(--line-subtle)',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      padding: '8px 10px',
      boxShadow: 'inset 0 -1px 0 var(--line-subtle)'
    }
  }, ['align-start-vertical', 'align-center-vertical', 'align-end-vertical'].map(n => /*#__PURE__*/React.createElement(IconButton, {
    key: n,
    icon: n,
    size: "sm"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), ['align-start-horizontal', 'align-center-horizontal', 'align-end-horizontal'].map(n => /*#__PURE__*/React.createElement(IconButton, {
    key: n,
    icon: n,
    size: "sm"
  }))), /*#__PURE__*/React.createElement(PanelSection, {
    title: "Overlays"
  }), /*#__PURE__*/React.createElement(PanelSection, {
    title: "Link"
  }), /*#__PURE__*/React.createElement(PanelSection, {
    title: "Breakpoint",
    info: true,
    action: null
  }, /*#__PURE__*/React.createElement(InspectorRow, {
    label: "Position"
  }, /*#__PURE__*/React.createElement(NumberField, {
    prefix: "X",
    value: "0",
    readOnly: true
  }), /*#__PURE__*/React.createElement(NumberField, {
    prefix: "Y",
    value: "0",
    readOnly: true
  })), /*#__PURE__*/React.createElement(InspectorRow, {
    label: "Width"
  }, /*#__PURE__*/React.createElement(NumberField, {
    value: "1400",
    readOnly: true
  }), /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    options: ['Fixed', 'Auto', 'Fill']
  })), /*#__PURE__*/React.createElement(InspectorRow, {
    label: "Height"
  }, /*#__PURE__*/React.createElement(NumberField, {
    value: "Auto",
    readOnly: true
  }), /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    options: ['Fit', 'Fixed']
  }))), /*#__PURE__*/React.createElement(PanelSection, {
    title: "Layout",
    info: true,
    action: null
  }, /*#__PURE__*/React.createElement(InspectorRow, {
    label: "Type"
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    variant: "panel",
    items: ['Stack', 'Grid'],
    value: type,
    onChange: setType
  })), /*#__PURE__*/React.createElement(InspectorRow, {
    label: "Direction"
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    variant: "panel",
    items: [{
      label: '↔',
      value: 'Horizontal'
    }, {
      label: '↕',
      value: 'Vertical'
    }],
    value: dir,
    onChange: setDir
  })), /*#__PURE__*/React.createElement(InspectorRow, {
    label: "Distribute"
  }, /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    options: ['Start', 'Center', 'End', 'Space between'],
    style: {
      flex: 1
    }
  })), /*#__PURE__*/React.createElement(InspectorRow, {
    label: "Align"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, ['align-left', 'align-center', 'align-right'].map((n, i) => /*#__PURE__*/React.createElement(IconButton, {
    key: n,
    icon: n,
    size: "sm",
    variant: "solid",
    active: i === 1
  })))), /*#__PURE__*/React.createElement(InspectorRow, {
    label: "Wrap"
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    variant: "panel",
    items: ['Yes', 'No'],
    value: wrap,
    onChange: setWrap
  })), /*#__PURE__*/React.createElement(InspectorRow, {
    label: "Gap"
  }, /*#__PURE__*/React.createElement(NumberField, {
    value: "0",
    readOnly: true
  })), /*#__PURE__*/React.createElement(InspectorRow, {
    label: "Padding"
  }, /*#__PURE__*/React.createElement(NumberField, {
    value: "80",
    readOnly: true
  }), /*#__PURE__*/React.createElement(NumberField, {
    value: "0",
    readOnly: true
  }), /*#__PURE__*/React.createElement(NumberField, {
    value: "0",
    readOnly: true
  }), /*#__PURE__*/React.createElement(NumberField, {
    value: "0",
    readOnly: true
  }))), /*#__PURE__*/React.createElement(PanelSection, {
    title: "Styles"
  }), /*#__PURE__*/React.createElement(PanelSection, {
    title: "Visibility",
    action: null
  }, /*#__PURE__*/React.createElement(InspectorRow, {
    label: layerName || 'Layer'
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Switch, {
    checked: visible,
    onChange: setVisible
  }))));
}
window.Inspector = Inspector;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/editor/Inspector.jsx", error: String((e && e.message) || e) }); }

// ui_kits/editor/LayersPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  LayerRow,
  SegmentedControl,
  Icon
} = window.SaaSModernaDesignSystem_2df059;
const TREE = [{
  name: 'Desktop',
  icon: 'monitor',
  depth: 0,
  meta: 'Primary · 1200+',
  expandable: true
}, {
  name: 'Hero',
  icon: 'box',
  depth: 1,
  expandable: true
}, {
  name: 'Nav',
  icon: 'layout-grid',
  depth: 2
}, {
  name: 'Hero',
  icon: 'box',
  depth: 2,
  expandable: true
}, {
  name: 'Header',
  icon: 'type',
  depth: 3
}, {
  name: 'Paragraph',
  icon: 'type',
  depth: 3
}, {
  name: 'Button',
  icon: 'square',
  depth: 3
}, {
  name: 'Asset',
  icon: 'box',
  depth: 3,
  expandable: true
}, {
  name: 'Icon',
  icon: 'circle',
  depth: 4
}, {
  name: 'Video',
  icon: 'video',
  depth: 4
}, {
  name: 'Image',
  icon: 'image',
  depth: 4
}, {
  name: 'Clients',
  icon: 'box',
  depth: 1,
  expandable: true
}, {
  name: 'Testimonials',
  icon: 'box',
  depth: 1,
  expandable: true
}, {
  name: 'Pricing',
  icon: 'box',
  depth: 1,
  expandable: true
}, {
  name: 'Footer',
  icon: 'box',
  depth: 1,
  expandable: true
}];
function LayersPanel({
  selected,
  onSelect
}) {
  const [tab, setTab] = React.useState('Layers');
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 216,
      flex: '0 0 auto',
      background: 'var(--surface-card)',
      boxShadow: 'inset -1px 0 0 var(--line-subtle)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 8px 6px'
    }
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    variant: "panel",
    items: ['Pages', 'Layers', 'Assets'],
    value: tab,
    onChange: setTab,
    style: {
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '2px 6px 12px'
    }
  }, tab === 'Layers' ? TREE.map((n, i) => /*#__PURE__*/React.createElement(LayerRow, _extends({
    key: i
  }, n, {
    expanded: n.expandable,
    selected: selected === n.name + i,
    onClick: () => onSelect(n.name + i, n.name)
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      font: 'var(--type-xs)',
      color: 'var(--text-subtle)',
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "folder",
    size: 14,
    color: "var(--text-subtle)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, "No ", tab.toLowerCase(), " in this project yet."))));
}
window.LayersPanel = LayersPanel;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/editor/LayersPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/AudienceSection.jsx
try { (() => {
const {
  SegmentedControl,
  ArrowLink,
  Badge
} = window.SaaSModernaDesignSystem_2df059;
const COPY = {
  Personal: 'Put a portfolio online in an afternoon. Pick a template, replace the words, publish on your own domain.',
  Freelancers: 'Hand clients a real site, not a prototype. Edit on the canvas, publish the same afternoon, bill for the outcome.',
  Agencies: 'Run every client site from one workspace. Shared components, staged reviews, one-click rollbacks.',
  Marketing: 'Iterate at lightning speed. Quickly build unique landing pages or set up dedicated SEO pages to drive traffic to your website. Use built-in analytics or a 3rd party service to track everything.',
  Startups: 'Ship the launch page today and the product site next week, without borrowing an engineer.',
  Scaleups: 'Localize, test and roll out across markets while the design system stays in one place.'
};
function BreakpointFrame({
  label,
  width,
  hint
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: width,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 22,
      padding: '0 8px',
      background: 'var(--surface-inset)',
      borderRadius: 'var(--radius-sm) var(--radius-sm) 0 0',
      font: 'var(--type-xs)',
      fontSize: 10,
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", null, hint)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 250,
      background: 'linear-gradient(180deg,#1868FF 0%,#1868FF 46%,#F7EEDC 46%,#F7EEDC 74%,#1868FF 74%)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-black) 34px/0.9 var(--font-display)',
      letterSpacing: '-0.04em',
      color: '#fff',
      textAlign: 'center'
    }
  }, "Year in", /*#__PURE__*/React.createElement("br", null), "Motion"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 60,
      background: 'var(--yellow-500)',
      color: 'var(--ink-900)',
      borderRadius: 'var(--radius-pill)',
      padding: '5px 14px',
      font: 'var(--weight-bold) 12px/1 var(--font-sans)',
      whiteSpace: 'nowrap'
    }
  }, "Let's go!"))));
}
function AudienceSection() {
  const [tab, setTab] = React.useState('Marketing');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 24px 112px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '380px 1fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--type-h1)',
      fontSize: 40,
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-strong)',
      textWrap: 'balance'
    }
  }, "Build sites of any size, solo or with your team."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    items: Object.keys(COPY),
    value: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      font: 'var(--type-body)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-muted)'
    }
  }, COPY[tab]), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(ArrowLink, {
    href: "#"
  }, "Learn more"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(BreakpointFrame, {
    label: "Desktop \xB7 1200",
    hint: "Breakpoint",
    width: 3
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 2
    }
  }, /*#__PURE__*/React.createElement(BreakpointFrame, {
    label: "Tablet \xB7 810",
    hint: "Breakpoint",
    width: 1
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -24,
      top: -12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    style: {
      background: 'var(--teal-500)',
      color: '#fff'
    }
  }, "Designer"))))));
}
window.AudienceSection = AudienceSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/AudienceSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/BentoSection.jsx
try { (() => {
const {
  SectionHeading,
  FeatureTile,
  Badge,
  Button,
  Icon,
  Card
} = window.SaaSModernaDesignSystem_2df059;

/* Small in-tile product mocks. Every tile crops its artwork against the bottom edge. */
function BrowserMock({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-panel)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22,
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      padding: '0 8px',
      background: 'var(--ink-050)'
    }
  }, ['#D4D4D4', '#D4D4D4', '#D4D4D4'].map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: c
    }
  }))), children);
}
function CmsRows() {
  const rows = [['How to Become a Better Web Designer', '10 February 2023', 'var(--blue-300)'], ['How to Create a Website', '18 January 2023', 'var(--blue-500)'], ['Exploring Parallax Scrolling', '5 January 2023', 'var(--violet-500)'], ['Building a Responsive Navigation', '28 December 2022', 'var(--magenta-500)']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 18,
      right: 18,
      bottom: -10,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
      boxShadow: 'var(--shadow-panel)',
      padding: '8px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      font: 'var(--type-xs)',
      fontSize: 10,
      color: 'var(--text-subtle)',
      paddingBottom: 6,
      boxShadow: 'inset 0 -1px 0 var(--line-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, "Title"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 92,
      flex: '0 0 auto'
    }
  }, "Date"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34
    }
  }, "Tint")), rows.map(([t, d, c]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      height: 26,
      font: 'var(--type-xs)',
      fontSize: 11,
      color: 'var(--text-body)',
      boxShadow: 'inset 0 -1px 0 var(--line-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-text",
    size: 11,
    color: "var(--text-subtle)"
  }), t), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 92,
      flex: '0 0 auto',
      whiteSpace: 'nowrap',
      color: 'var(--text-subtle)'
    }
  }, d), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 24,
      height: 12,
      borderRadius: 3,
      background: c
    }
  })))));
}
function BentoSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '112px 24px',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Powerfully simple.",
    body: "SaaS Moderna makes building professional sites easy, fast and fun while delivering best-in-class SEO, performance, and hosting.",
    maxWidth: 560
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 16,
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(FeatureTile, {
    title: "Start with AI",
    body: "Generate a beautiful first version of your site, then go in and customize.",
    fill: "blue",
    href: "#",
    minHeight: 300,
    style: {
      gridColumn: 'span 6'
    }
  }, /*#__PURE__*/React.createElement(BrowserMock, {
    style: {
      position: 'absolute',
      left: 32,
      right: 32,
      bottom: 0,
      height: 150
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      background: 'linear-gradient(160deg,#1B3A8F 0%,#3E6BE0 45%,#C4A0F0 100%)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    elevation: "float",
    padding: 12,
    style: {
      position: 'absolute',
      left: '22%',
      top: 14,
      width: 250
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "AI"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "gradient",
    icon: "sparkles"
  }, "Start")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-xs)',
      fontWeight: 'var(--weight-regular)',
      color: 'var(--text-body)',
      lineHeight: 1.45
    }
  }, "A recipe site for professional chef Abi Roman. Use vivid colors and modern type."))))), /*#__PURE__*/React.createElement(FeatureTile, {
    title: "CMS",
    body: "Run a blog, list job openings, or manage your event schedule.",
    fill: "violet",
    href: "#",
    minHeight: 280,
    style: {
      gridColumn: 'span 3'
    }
  }, /*#__PURE__*/React.createElement(CmsRows, null)), /*#__PURE__*/React.createElement(FeatureTile, {
    title: "SEO",
    body: "Build lightning-fast, globally optimized sites.",
    fill: "green",
    href: "#",
    minHeight: 280,
    style: {
      gridColumn: 'span 3'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 124,
      height: 124,
      borderRadius: '50%',
      border: '7px solid rgba(255,255,255,.9)',
      display: 'grid',
      placeItems: 'center',
      font: 'var(--weight-bold) 42px/1 var(--font-display)',
      color: '#fff',
      letterSpacing: '-0.03em'
    }
  }, "100"))), /*#__PURE__*/React.createElement(FeatureTile, {
    title: "Effects",
    body: "Use scroll and appear effects like transforms and parallax scrolling.",
    fill: "night",
    href: "#",
    minHeight: 260,
    style: {
      gridColumn: 'span 4'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      bottom: -6,
      font: 'var(--weight-black) 54px/0.95 var(--font-display)',
      letterSpacing: '-0.04em',
      color: 'transparent',
      WebkitTextStroke: '1.5px rgba(255,255,255,.5)'
    }
  }, "NO CODE", /*#__PURE__*/React.createElement("br", null), "EFFECTS"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 24,
      bottom: 20,
      width: 190,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-float)',
      padding: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, [['Trigger', 'On Appear'], ['Preset', 'Scale in'], ['Enter', 'Effect']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      font: 'var(--type-xs)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, k, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--surface-inset)',
      borderRadius: 4,
      padding: '3px 8px',
      color: 'var(--text-strong)'
    }
  }, v))))), /*#__PURE__*/React.createElement(FeatureTile, {
    title: "Plugins",
    body: "Connect your site to popular apps.",
    fill: "white",
    href: "#",
    minHeight: 260,
    style: {
      gridColumn: 'span 2'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 22,
      right: 22,
      bottom: -14,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 8
    }
  }, ['music', 'mic', 'youtube', 'figma', 'calendar', 'shopping-bag', 'map-pin', 'video', 'rss'].map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      height: 54,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-inset)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 18,
    color: "var(--text-muted)"
  }))))))));
}
window.BentoSection = BentoSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/BentoSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/CtaFooter.jsx
try { (() => {
const {
  PromptBar,
  CheckList,
  Wordmark,
  Icon
} = window.SaaSModernaDesignSystem_2df059;
const COLUMNS = [['Company', ['About', 'Careers', 'Cookies', 'Security', 'Privacy', 'Charges', 'Terms']], ['Product', ['Learn', 'Plugins', 'Awards', 'Agencies', 'Startups', 'Freelancers', 'Business', 'Pricing']], ['Templates', ['New', 'Free', 'Artificial intelligence', 'Agency', 'Blog', 'Business', 'Ecommerce', 'Landing page', 'Portfolio']], ['Resources', ['Desktop apps', 'Partners', 'Experts', 'Figma plugin', 'Changelog']], ['Support', ['Updates', 'Hype feed', 'Community', 'Contact']]];
function CtaFooter({
  prompt,
  setPrompt,
  onSubmit
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-night)',
      color: 'var(--text-inverse)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '96px 24px 72px',
      background: 'linear-gradient(160deg,#0099FF 0%,#7A5CFF 42%,#C93AF5 78%,#1A0A2E 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-night-fade)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 780,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 44
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      textAlign: 'center',
      font: 'var(--type-display-2)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-inverse)',
      textWrap: 'balance'
    }
  }, "Start your dream site with AI."), /*#__PURE__*/React.createElement(PromptBar, {
    style: {
      width: '100%'
    },
    value: prompt,
    onChange: e => setPrompt(e.target.value),
    onSubmit: onSubmit,
    placeholder: "An iOS to-do app startup called Magic"
  }), /*#__PURE__*/React.createElement(CheckList, {
    tone: "inverse",
    items: ['Active community', '100 free CMS items', 'Publish for free', 'Unlimited projects', 'Mac & Windows']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 24px 40px',
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 32
    }
  }, COLUMNS.map(([title, items]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-inverse)'
    }
  }, title), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      font: 'var(--type-xs)',
      fontWeight: 'var(--weight-regular)',
      color: 'rgba(255,255,255,.6)'
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 24px 48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 15,
    tone: "inverse"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, ['twitter', 'youtube', 'instagram', 'dribbble'].map(n => /*#__PURE__*/React.createElement(Icon, {
    key: n,
    name: n === 'twitter' ? 'twitter' : n,
    size: 15,
    color: "rgba(255,255,255,.55)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-xs)',
      fontSize: 11,
      color: 'rgba(255,255,255,.4)'
    }
  }, "SaaS Moderna B.V. \xA9 2026"))));
}
window.CtaFooter = CtaFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/CtaFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/Hero.jsx
try { (() => {
const {
  PromptBar,
  LogoRow,
  Icon
} = window.SaaSModernaDesignSystem_2df059;
function Hero({
  prompt,
  setPrompt,
  onSubmit
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--gradient-hero)',
      padding: '84px 24px 0',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      font: 'var(--weight-semibold) 15px/1 var(--font-sans)',
      color: 'var(--violet-500)',
      marginBottom: 34
    }
  }, "Announcing Moderna AI ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      textAlign: 'center',
      maxWidth: 780,
      color: 'var(--text-strong)',
      font: 'var(--type-display-1)',
      letterSpacing: 'var(--tracking-display)',
      textWrap: 'balance'
    }
  }, "Start your dream site with AI. Zero code, maximum speed."), /*#__PURE__*/React.createElement(PromptBar, {
    style: {
      width: '100%',
      maxWidth: 720,
      marginTop: 44
    },
    value: prompt,
    onChange: e => setPrompt(e.target.value),
    onSubmit: onSubmit,
    placeholder: "An iOS to-do app startup called Magic"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 84,
      paddingBottom: 40,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(LogoRow, {
    caption: "Large businesses already run their site on SaaS Moderna",
    names: ['Northwind', 'Rarify', 'Zeppelin', 'Superhuman', 'Loopfiles', 'Hodinkee']
  }))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/SiteNav.jsx
try { (() => {
const {
  Wordmark,
  Button,
  Icon
} = window.SaaSModernaDesignSystem_2df059;
function SiteNav({
  onCta
}) {
  const links = ['Product', 'Templates', 'Community', 'Resources', 'Awards', 'Pricing'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      height: 60,
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      padding: '0 28px',
      background: 'rgba(255,255,255,.82)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)',
      boxShadow: 'inset 0 -1px 0 var(--line-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 17
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22,
      flex: 1
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      font: 'var(--type-sm)',
      color: 'var(--text-body)'
    }
  }, l, i === 0 || i === 3 ? /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 13,
    color: "var(--text-subtle)"
  }) : null))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: 'var(--type-sm)',
      color: 'var(--text-body)'
    }
  }, "Log in"), /*#__PURE__*/React.createElement(Button, {
    shape: "pill",
    size: "md",
    onClick: onCta
  }, "Sign up"));
}
window.SiteNav = SiteNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/SiteNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/TestimonialWall.jsx
try { (() => {
const {
  TestimonialCard,
  ArrowLink
} = window.SaaSModernaDesignSystem_2df059;
const QUOTES = [['Danna Petty', '@DannPetty', "I learned how to build a website in SaaS Moderna! My goal was to learn the basic tools in about 20 minutes a day last week. Nothing fancy. No special design. Just randomness elements that's responsive."], ['Daniël van der Winden', '@dvdwinden', "I've built pretty handy sites powered by Craft or WordPress in the past, but seeing this tackle CMS stuff so effortlessly is mind-boggling."], ['Miguel Ventura', '@migdvv', "Learned some basics yesterday, and today I delivered a landing page for a client. It's so unreal how small the learning curve is from Figma. Absolutely loving it."], ['./on', '@oleg_nykolyn', 'Yo, this is sick AF. Mind-blowing tbh.'], ['Lauren Waller', '@waller_texas', 'Honestly the publish time is insanely fast. Just published 2 weeks of changes in 5 seconds — almost too fast for such a big moment.'], ['Parker', '@_prkr', 'I was enjoying it a lot but I am BLOWN AWAY by how quickly the CMS clicked.'], ['Amos', '@amosbnk', 'Playing around with landing pages this week. I suck at animations, but this made it so easy.'], ['Christophe', '@koenbok', 'Thank you for building this and empowering designers. The site went live in less than a week.'], ['Riad', '@rriaad', "I've been designing for the past 6 years and I still can't believe how much I love working in one canvas."], ['Mani', '@Mani97', "It's brilliant in how differently it treats complex things. Finally learned something."], ['Kevin', '@kvncnls', "It's like a design tool, but you're actually building the site."], ['Sofia Reyes', '@sofia_builds', 'Shipped a client microsite between two meetings. No handoff, no tickets.']];
function TestimonialWall() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 0 40px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1360,
      margin: '0 auto',
      position: 'relative',
      height: 420,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      columns: 5,
      columnGap: 14,
      padding: '0 24px'
    }
  }, QUOTES.map(([n, h, q]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      breakInside: 'avoid',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    name: n,
    handle: h
  }, q)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'linear-gradient(180deg,rgba(255,255,255,0) 55%,#fff 100%),linear-gradient(90deg,#fff 0%,rgba(255,255,255,0) 8%,rgba(255,255,255,0) 92%,#fff 100%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 24px 96px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      maxWidth: 420,
      font: 'var(--type-h1)',
      fontSize: 40,
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-strong)'
    }
  }, "Tons of others love building and shipping sites with SaaS Moderna."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(ArrowLink, {
    href: "#"
  }, "Join the community"))));
}
window.TestimonialWall = TestimonialWall;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/TestimonialWall.jsx", error: String((e && e.message) || e) }); }

// ui_kits/templates/TemplateCard.jsx
try { (() => {
const {
  Badge,
  Button,
  Icon
} = window.SaaSModernaDesignSystem_2df059;

/* Template thumbnails are abstract gradient compositions: no template screenshots
   were supplied with the source material. */
function TemplateCard({
  name,
  category,
  price,
  fill,
  dark,
  onOpen
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: onOpen,
    style: {
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 250,
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      background: fill,
      boxShadow: hover ? 'var(--shadow-panel)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: 22,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      color: dark ? 'var(--ink-000)' : 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--type-xs)',
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("span", null, category), /*#__PURE__*/React.createElement("span", null, price === 0 ? 'Free' : '$' + price)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-bold) 30px/1 var(--font-display)',
      letterSpacing: '-0.035em'
    }
  }, name)), hover ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,.28)',
      display: 'grid',
      placeItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "inverse",
    icon: "eye"
  }, "Preview"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    iconRight: "arrow-right"
  }, "Use template"))) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, name), price === 0 ? /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Free") : /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-xs)',
      color: 'var(--text-muted)'
    }
  }, "$", price)));
}
window.TemplateCard = TemplateCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/templates/TemplateCard.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CanvasLabel = __ds_scope.CanvasLabel;

__ds_ns.InspectorRow = __ds_scope.InspectorRow;

__ds_ns.NumberField = __ds_scope.NumberField;

__ds_ns.LayerRow = __ds_scope.LayerRow;

__ds_ns.PanelSection = __ds_scope.PanelSection;

__ds_ns.Toolbar = __ds_scope.Toolbar;

__ds_ns.ToolbarItem = __ds_scope.ToolbarItem;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.PromptBar = __ds_scope.PromptBar;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.ArrowLink = __ds_scope.ArrowLink;

__ds_ns.CheckList = __ds_scope.CheckList;

__ds_ns.FeatureTile = __ds_scope.FeatureTile;

__ds_ns.LogoRow = __ds_scope.LogoRow;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

})();

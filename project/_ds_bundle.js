/* @ds-bundle: {"format":3,"namespace":"DesignSystem_d67542","components":[{"name":"Avatar","sourcePath":"components/atoms/Avatar.jsx"},{"name":"Badge","sourcePath":"components/atoms/Badge.jsx"},{"name":"Button","sourcePath":"components/atoms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/atoms/Checkbox.jsx"},{"name":"Divider","sourcePath":"components/atoms/Divider.jsx"},{"name":"IconButton","sourcePath":"components/atoms/IconButton.jsx"},{"name":"Input","sourcePath":"components/atoms/Input.jsx"},{"name":"Progress","sourcePath":"components/atoms/Progress.jsx"},{"name":"Radio","sourcePath":"components/atoms/Radio.jsx"},{"name":"Select","sourcePath":"components/atoms/Select.jsx"},{"name":"Skeleton","sourcePath":"components/atoms/Skeleton.jsx"},{"name":"Slider","sourcePath":"components/atoms/Slider.jsx"},{"name":"Spinner","sourcePath":"components/atoms/Spinner.jsx"},{"name":"Switch","sourcePath":"components/atoms/Switch.jsx"},{"name":"Tag","sourcePath":"components/atoms/Tag.jsx"},{"name":"Textarea","sourcePath":"components/atoms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/molecules/Accordion.jsx"},{"name":"Alert","sourcePath":"components/molecules/Alert.jsx"},{"name":"AppBar","sourcePath":"components/molecules/AppBar.jsx"},{"name":"BottomNav","sourcePath":"components/molecules/BottomNav.jsx"},{"name":"Breadcrumb","sourcePath":"components/molecules/Breadcrumb.jsx"},{"name":"Card","sourcePath":"components/molecules/Card.jsx"},{"name":"EmptyState","sourcePath":"components/molecules/EmptyState.jsx"},{"name":"ListRow","sourcePath":"components/molecules/ListRow.jsx"},{"name":"Menu","sourcePath":"components/molecules/Menu.jsx"},{"name":"Pagination","sourcePath":"components/molecules/Pagination.jsx"},{"name":"SegmentedControl","sourcePath":"components/molecules/SegmentedControl.jsx"},{"name":"Stat","sourcePath":"components/molecules/Stat.jsx"},{"name":"Stepper","sourcePath":"components/molecules/Stepper.jsx"},{"name":"Tabs","sourcePath":"components/molecules/Tabs.jsx"},{"name":"Toast","sourcePath":"components/molecules/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/molecules/Tooltip.jsx"},{"name":"BottomSheet","sourcePath":"components/organisms/BottomSheet.jsx"},{"name":"Dialog","sourcePath":"components/organisms/Dialog.jsx"},{"name":"Drawer","sourcePath":"components/organisms/Drawer.jsx"},{"name":"Popover","sourcePath":"components/organisms/Popover.jsx"},{"name":"Table","sourcePath":"components/organisms/Table.jsx"}],"sourceHashes":{"components/atoms/Avatar.jsx":"97f793f64825","components/atoms/Badge.jsx":"5143359d4d2b","components/atoms/Button.jsx":"1a2343e44a23","components/atoms/Checkbox.jsx":"ee6f7901cb28","components/atoms/Divider.jsx":"13dd1ae39ade","components/atoms/IconButton.jsx":"ad809cb493e1","components/atoms/Input.jsx":"b7fe53e69df6","components/atoms/Progress.jsx":"75bff924ef72","components/atoms/Radio.jsx":"bb6359a382ed","components/atoms/Select.jsx":"cdbad34e32da","components/atoms/Skeleton.jsx":"8f5356927ddf","components/atoms/Slider.jsx":"4e05072ae992","components/atoms/Spinner.jsx":"b3b564c0ac56","components/atoms/Switch.jsx":"891ff9cc93db","components/atoms/Tag.jsx":"0eea9a4a7a37","components/atoms/Textarea.jsx":"cc032aa32616","components/molecules/Accordion.jsx":"a3971222cc51","components/molecules/Alert.jsx":"81a800b2393c","components/molecules/AppBar.jsx":"a3f7b594c4d8","components/molecules/BottomNav.jsx":"8721453308ef","components/molecules/Breadcrumb.jsx":"2255886134cd","components/molecules/Card.jsx":"ac670fc116f8","components/molecules/EmptyState.jsx":"75b09fa76ac4","components/molecules/ListRow.jsx":"45929f96d77c","components/molecules/Menu.jsx":"873d2a61d600","components/molecules/Pagination.jsx":"7cf447c082ba","components/molecules/SegmentedControl.jsx":"0bd9f959cf07","components/molecules/Stat.jsx":"9bd88ea6e29b","components/molecules/Stepper.jsx":"dd26eba88d6a","components/molecules/Tabs.jsx":"5f2af0ee2f23","components/molecules/Toast.jsx":"89e4f7229c95","components/molecules/Tooltip.jsx":"dc45d7aed8f5","components/organisms/BottomSheet.jsx":"1d848a86ee86","components/organisms/Dialog.jsx":"a98872047d5e","components/organisms/Drawer.jsx":"1cef00bb7f52","components/organisms/Popover.jsx":"baf0ec12b217","components/organisms/Table.jsx":"8ce49296d59e"},"inlinedExternals":[],"unexposedExports":[{"name":"_alertIcons","sourcePath":"components/molecules/Alert.jsx"}]} */

(() => {

const __ds_ns = (window.DesignSystem_d67542 = window.DesignSystem_d67542 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/atoms/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Avatar — user image with initials fallback and optional status dot. */
function Avatar({
  src = null,
  name = '',
  size = 'md',
  square = false,
  status = false,
  className = '',
  ...rest
}) {
  const cls = ['ds-avatar', `ds-avatar--${size}`, square ? 'ds-avatar--square' : '', className].filter(Boolean).join(' ');
  const initials = (name || '').trim().replace(/\s+/g, ' ').split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    title: name || undefined
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : /*#__PURE__*/React.createElement("span", null, initials), status ? /*#__PURE__*/React.createElement("span", {
    className: "ds-avatar__status",
    "aria-hidden": "true"
  }) : null);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/atoms/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/atoms/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Badge — small status/label pill. */
function Badge({
  variant = 'neutral',
  dot = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ds-badge', `ds-badge--${variant}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    className: "ds-badge__dot",
    "aria-hidden": "true"
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/atoms/Badge.jsx", error: String((e && e.message) || e) }); }

// components/atoms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary action control.
 * variant: primary (ink) · accent (cobalt) · secondary (outline) · ghost · danger
 */
function Button({
  variant = 'primary',
  size = 'md',
  icon = null,
  iconRight = null,
  fullWidth = false,
  type = 'button',
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ds-btn', `ds-btn--${variant}`, `ds-btn--${size}`, fullWidth ? 'ds-btn--block' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    className: "ds-btn__icon",
    "aria-hidden": "true"
  }, icon) : null, children != null ? /*#__PURE__*/React.createElement("span", null, children) : null, iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "ds-btn__icon",
    "aria-hidden": "true"
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/atoms/Button.jsx", error: String((e && e.message) || e) }); }

// components/atoms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox — labeled checkbox with cobalt checked state. */
function Checkbox({
  label,
  className = '',
  disabled = false,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['ds-check', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ds-check__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label != null ? /*#__PURE__*/React.createElement("span", {
    className: "ds-check__label"
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/atoms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/atoms/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Divider — horizontal/vertical rule, optionally with a centered label. */
function Divider({
  orientation = 'horizontal',
  label,
  className = '',
  ...rest
}) {
  if (label) {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: ['ds-divider--label', className].filter(Boolean).join(' '),
      role: "separator"
    }, rest), label);
  }
  const o = orientation === 'vertical' ? 'ds-divider--v' : 'ds-divider--h';
  return /*#__PURE__*/React.createElement("hr", _extends({
    className: ['ds-divider', o, className].filter(Boolean).join(' ')
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/atoms/Divider.jsx", error: String((e && e.message) || e) }); }

// components/atoms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square, icon-only control.
 * variant: ghost (default) · outline · solid
 */
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  type = 'button',
  disabled = false,
  className = '',
  ...rest
}) {
  const cls = ['ds-iconbtn', `ds-iconbtn--${variant}`, `ds-iconbtn--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled,
    "aria-label": label,
    title: label
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/atoms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/atoms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _id = 0;

/**
 * Input — text field with optional label, leading icon, hint & error.
 */
function Input({
  label,
  hint,
  error,
  icon = null,
  required = false,
  id,
  className = '',
  ...rest
}) {
  const fieldId = id || React.useMemo(() => `ds-input-${++_id}`, [id]);
  const hasIcon = !!icon;
  return /*#__PURE__*/React.createElement("div", {
    className: ['ds-field', error ? 'ds-field--error' : '', className].filter(Boolean).join(' ')
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "ds-field__label",
    htmlFor: fieldId
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "ds-req"
  }, "*") : null) : null, /*#__PURE__*/React.createElement("div", {
    className: ['ds-inputwrap', hasIcon ? 'ds-inputwrap--hasicon' : ''].filter(Boolean).join(' ')
  }, hasIcon ? /*#__PURE__*/React.createElement("span", {
    className: "ds-inputwrap__icon",
    "aria-hidden": "true"
  }, icon) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: "ds-input",
    "aria-invalid": !!error
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    className: "ds-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "ds-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/atoms/Input.jsx", error: String((e && e.message) || e) }); }

// components/atoms/Progress.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Progress — linear bar. Pass `value` (0–100) or `indeterminate`. */
function Progress({
  value = 0,
  indeterminate = false,
  className = '',
  ...rest
}) {
  const cls = ['ds-progress', indeterminate ? 'ds-progress--indeterminate' : '', className].filter(Boolean).join(' ');
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "progressbar",
    "aria-valuenow": indeterminate ? undefined : pct,
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ds-progress__bar",
    style: indeterminate ? undefined : {
      width: `${pct}%`
    }
  }));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/atoms/Progress.jsx", error: String((e && e.message) || e) }); }

// components/atoms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio — labeled radio button with cobalt selected state. */
function Radio({
  label,
  className = '',
  disabled = false,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['ds-check', 'ds-check--radio', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ds-check__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-check__dot"
  })), label != null ? /*#__PURE__*/React.createElement("span", {
    className: "ds-check__label"
  }, label) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/atoms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/atoms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _sid = 0;

/** Select — native dropdown with custom chevron, label, hint & error. */
function Select({
  label,
  hint,
  error,
  required = false,
  options = null,
  placeholder,
  id,
  className = '',
  children,
  ...rest
}) {
  const fieldId = id || React.useMemo(() => `ds-select-${++_sid}`, [id]);
  return /*#__PURE__*/React.createElement("div", {
    className: ['ds-field', error ? 'ds-field--error' : '', className].filter(Boolean).join(' ')
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "ds-field__label",
    htmlFor: fieldId
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "ds-req"
  }, "*") : null) : null, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    className: "ds-select",
    "aria-invalid": !!error,
    defaultValue: placeholder ? '' : undefined
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder) : null, options ? options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  }) : children), error ? /*#__PURE__*/React.createElement("span", {
    className: "ds-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "ds-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/atoms/Select.jsx", error: String((e && e.message) || e) }); }

// components/atoms/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Skeleton — loading placeholder with shimmer. */
function Skeleton({
  variant = 'block',
  width,
  height,
  className = '',
  style = {},
  ...rest
}) {
  const v = variant === 'text' ? 'ds-skeleton--text' : variant === 'circle' ? 'ds-skeleton--circle' : '';
  const s = {
    ...style
  };
  if (width != null) s.width = typeof width === 'number' ? `${width}px` : width;
  if (height != null) s.height = typeof height === 'number' ? `${height}px` : height;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ds-skeleton', v, className].filter(Boolean).join(' '),
    style: s,
    "aria-hidden": "true"
  }, rest));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/atoms/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/atoms/Slider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Slider — range input with cobalt fill. Controlled (value) or uncontrolled (defaultValue). */
function Slider({
  value,
  defaultValue,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  label,
  showValue = false,
  className = '',
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue != null ? defaultValue : min);
  const val = value != null ? value : internal;
  const pct = (val - min) / (max - min) * 100;
  const handle = e => {
    const v = Number(e.target.value);
    if (value == null) setInternal(v);
    if (onChange) onChange(v);
  };
  const bg = `linear-gradient(90deg, var(--accent) ${pct}%, var(--surface-sunken) ${pct}%)`;
  return /*#__PURE__*/React.createElement("div", {
    className: ['ds-field', className].filter(Boolean).join(' ')
  }, label || showValue ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "ds-field__label"
  }, label) : /*#__PURE__*/React.createElement("span", null), showValue ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      color: 'var(--text-secondary)'
    }
  }, val) : null) : null, /*#__PURE__*/React.createElement("input", _extends({
    type: "range",
    className: "ds-slider",
    min: min,
    max: max,
    step: step,
    value: val,
    onChange: handle,
    style: {
      background: bg
    }
  }, rest)));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/atoms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/atoms/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Spinner — circular loading indicator. */
function Spinner({
  size = 'md',
  label = '로딩 중',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['ds-spinner', `ds-spinner--${size}`, className].filter(Boolean).join(' '),
    role: "status",
    "aria-label": label
  }, rest));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/atoms/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/atoms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Switch — toggle with cobalt active track. */
function Switch({
  label,
  className = '',
  disabled = false,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['ds-switch', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ds-switch__track",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-switch__thumb"
  })), label != null ? /*#__PURE__*/React.createElement("span", {
    className: "ds-switch__label"
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/atoms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/atoms/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tag — removable label/chip. Pass onRemove to show the × button. */
function Tag({
  onRemove,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['ds-tag', className].filter(Boolean).join(' ')
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("span", {
    className: "ds-tag__close",
    role: "button",
    "aria-label": "\uC81C\uAC70",
    tabIndex: 0,
    onClick: onRemove,
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onRemove(e);
      }
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  }))) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/atoms/Tag.jsx", error: String((e && e.message) || e) }); }

// components/atoms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _tid = 0;

/** Textarea — multi-line text field with label, hint & error. */
function Textarea({
  label,
  hint,
  error,
  required = false,
  rows = 4,
  id,
  className = '',
  ...rest
}) {
  const fieldId = id || React.useMemo(() => `ds-textarea-${++_tid}`, [id]);
  return /*#__PURE__*/React.createElement("div", {
    className: ['ds-field', error ? 'ds-field--error' : '', className].filter(Boolean).join(' ')
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "ds-field__label",
    htmlFor: fieldId
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "ds-req"
  }, "*") : null) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    className: "ds-textarea",
    rows: rows,
    "aria-invalid": !!error
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    className: "ds-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "ds-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/atoms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/molecules/Accordion.jsx
try { (() => {
const CHEV = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "m6 9 6 6 6-6"
}));

/** Accordion — collapsible sections. items: [{title, content}]. */
function Accordion({
  items = [],
  multiple = false,
  defaultOpen = [],
  className = ''
}) {
  const [open, setOpen] = React.useState(() => new Set(defaultOpen));
  const toggle = i => setOpen(prev => {
    const n = new Set(prev);
    if (n.has(i)) n.delete(i);else {
      if (!multiple) n.clear();
      n.add(i);
    }
    return n;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: ['ds-accordion', className].filter(Boolean).join(' ')
  }, items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: ['ds-accordion__item', isOpen ? 'ds-accordion__item--open' : ''].filter(Boolean).join(' ')
    }, /*#__PURE__*/React.createElement("button", {
      className: "ds-accordion__btn",
      "aria-expanded": isOpen,
      onClick: () => toggle(i)
    }, it.title, /*#__PURE__*/React.createElement("span", {
      className: "ds-accordion__chev",
      "aria-hidden": "true"
    }, CHEV)), isOpen ? /*#__PURE__*/React.createElement("div", {
      className: "ds-accordion__panel"
    }, it.content) : null);
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/molecules/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/molecules/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICONS = {
  info: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-4M12 8h.01"
  })),
  success: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21.8 10A10 10 0 1 1 17 3.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 11 3 3L22 4"
  })),
  warning: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m21.7 18-9-16a2 2 0 0 0-3.4 0l-9 16A2 2 0 0 0 3 21h18a2 2 0 0 0 1.7-3Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 17h.01"
  })),
  danger: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m15 9-6 6M9 9l6 6"
  }))
};

/** Alert — inline status banner with icon, title, description, optional dismiss. */
function Alert({
  variant = 'info',
  title,
  icon,
  onClose,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ds-alert', `ds-alert--${variant}`, className].filter(Boolean).join(' '),
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ds-alert__icon",
    "aria-hidden": "true"
  }, icon || ICONS[variant]), /*#__PURE__*/React.createElement("div", {
    className: "ds-alert__body"
  }, title ? /*#__PURE__*/React.createElement("p", {
    className: "ds-alert__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("p", {
    className: "ds-alert__desc"
  }, children) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    className: "ds-alert__close",
    "aria-label": "\uB2EB\uAE30",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  }))) : null);
}
const _alertIcons = ICONS;
Object.assign(__ds_scope, { Alert, _alertIcons });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/molecules/Alert.jsx", error: String((e && e.message) || e) }); }

// components/molecules/AppBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** AppBar — mobile top bar with leading/trailing slots and a title. */
function AppBar({
  title,
  left = null,
  right = null,
  align = 'center',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    className: ['ds-appbar', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ds-appbar__side"
  }, left), /*#__PURE__*/React.createElement("h1", {
    className: ['ds-appbar__title', align === 'left' ? 'ds-appbar__title--left' : ''].filter(Boolean).join(' ')
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "ds-appbar__side ds-appbar__side--right"
  }, right));
}
Object.assign(__ds_scope, { AppBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/molecules/AppBar.jsx", error: String((e && e.message) || e) }); }

// components/molecules/BottomNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** BottomNav — mobile tab bar. Controlled via value/onChange. */
function BottomNav({
  items = [],
  value,
  onChange,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ['ds-bottomnav', className].filter(Boolean).join(' ')
  }, rest), items.map(it => {
    const active = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      type: "button",
      className: ['ds-bottomnav__item', active ? 'ds-bottomnav__item--active' : ''].filter(Boolean).join(' '),
      "aria-current": active ? 'page' : undefined,
      onClick: () => onChange && onChange(it.value)
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, it.icon), /*#__PURE__*/React.createElement("span", null, it.label));
  }));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/molecules/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/molecules/Breadcrumb.jsx
try { (() => {
const CHEVRON = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "m9 18 6-6-6-6"
}));

/** Breadcrumb — hierarchical path. Last item is the current page. */
function Breadcrumb({
  items = [],
  className = ''
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: ['ds-crumb', className].filter(Boolean).join(' '),
    "aria-label": "breadcrumb"
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last ? /*#__PURE__*/React.createElement("span", {
      className: "ds-crumb__item ds-crumb__item--current",
      "aria-current": "page"
    }, it.label) : /*#__PURE__*/React.createElement("button", {
      className: "ds-crumb__item",
      onClick: it.onClick
    }, it.label), !last ? /*#__PURE__*/React.createElement("span", {
      className: "ds-crumb__sep",
      "aria-hidden": "true"
    }, CHEVRON) : null);
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/molecules/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/molecules/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Card — surface container. interactive adds hover lift; flat removes shadow. */
function Card({
  as: Tag = 'div',
  interactive = false,
  flat = false,
  padded = true,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ds-card', padded ? 'ds-card--pad' : '', interactive ? 'ds-card--interactive' : '', flat ? 'ds-card--flat' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/molecules/Card.jsx", error: String((e && e.message) || e) }); }

// components/molecules/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** EmptyState — placeholder for no-data/empty views. */
function EmptyState({
  icon,
  title,
  description,
  action,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ds-empty', className].filter(Boolean).join(' ')
  }, rest), icon ? /*#__PURE__*/React.createElement("div", {
    className: "ds-empty__icon",
    "aria-hidden": "true"
  }, icon) : null, title ? /*#__PURE__*/React.createElement("h3", {
    className: "ds-empty__title"
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    className: "ds-empty__desc"
  }, description) : null, action ? /*#__PURE__*/React.createElement("div", {
    className: "ds-empty__action"
  }, action) : null);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/molecules/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/molecules/ListRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** ListRow — mobile list item with leading/trailing slots, title & subtitle. */
function ListRow({
  leading = null,
  title,
  subtitle,
  trailing = null,
  onClick,
  as,
  className = '',
  ...rest
}) {
  const Tag = as || (onClick ? 'button' : 'div');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: ['ds-listrow', className].filter(Boolean).join(' '),
    onClick: onClick
  }, rest), leading ? /*#__PURE__*/React.createElement("span", {
    className: "ds-listrow__lead"
  }, leading) : null, /*#__PURE__*/React.createElement("div", {
    className: "ds-listrow__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-listrow__title"
  }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
    className: "ds-listrow__sub"
  }, subtitle) : null), trailing ? /*#__PURE__*/React.createElement("span", {
    className: "ds-listrow__trail"
  }, trailing) : null);
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/molecules/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/molecules/Menu.jsx
try { (() => {
/** Menu — dropdown menu. Click trigger to toggle; closes on outside click. */
function Menu({
  trigger,
  items = [],
  align = 'left',
  className = ''
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return undefined;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  return /*#__PURE__*/React.createElement("div", {
    className: ['ds-menu', className].filter(Boolean).join(' '),
    ref: ref
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(o => !o),
    style: {
      display: 'inline-flex'
    }
  }, trigger), open ? /*#__PURE__*/React.createElement("div", {
    className: `ds-menu__list ds-menu__list--${align}`,
    role: "menu"
  }, items.map((it, i) => it.separator ? /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "ds-menu__sep",
    role: "separator"
  }) : /*#__PURE__*/React.createElement("button", {
    key: i,
    role: "menuitem",
    className: ['ds-menu__item', it.danger ? 'ds-menu__item--danger' : ''].filter(Boolean).join(' '),
    onClick: () => {
      setOpen(false);
      if (it.onClick) it.onClick();
    }
  }, it.icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    },
    "aria-hidden": "true"
  }, it.icon) : null, it.label))) : null);
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/molecules/Menu.jsx", error: String((e && e.message) || e) }); }

// components/molecules/Pagination.jsx
try { (() => {
const Chev = d => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: d
}));
function buildRange(page, total) {
  const out = [];
  let last = 0;
  for (let p = 1; p <= total; p++) {
    if (p === 1 || p === total || p >= page - 1 && p <= page + 1) {
      if (last && p - last > 1) out.push('…');
      out.push(p);
      last = p;
    }
  }
  return out;
}

/** Pagination — page navigation with prev/next and ellipsis. Controlled. */
function Pagination({
  page = 1,
  total = 1,
  onChange,
  className = ''
}) {
  const go = p => {
    if (onChange && p >= 1 && p <= total && p !== page) onChange(p);
  };
  const items = buildRange(page, total);
  return /*#__PURE__*/React.createElement("nav", {
    className: ['ds-pager', className].filter(Boolean).join(' '),
    "aria-label": "pagination"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ds-pager__btn",
    onClick: () => go(page - 1),
    disabled: page <= 1,
    "aria-label": "\uC774\uC804"
  }, Chev('m15 18-6-6 6-6')), items.map((it, i) => it === '…' ? /*#__PURE__*/React.createElement("span", {
    key: `e${i}`,
    className: "ds-pager__ellipsis"
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: it,
    className: ['ds-pager__btn', it === page ? 'ds-pager__btn--active' : ''].filter(Boolean).join(' '),
    "aria-current": it === page ? 'page' : undefined,
    onClick: () => go(it)
  }, it)), /*#__PURE__*/React.createElement("button", {
    className: "ds-pager__btn",
    onClick: () => go(page + 1),
    disabled: page >= total,
    "aria-label": "\uB2E4\uC74C"
  }, Chev('m9 18 6-6-6-6')));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/molecules/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/molecules/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** SegmentedControl — pill-group single-select toggle. */
function SegmentedControl({
  options = [],
  value,
  onChange,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ds-segmented', className].filter(Boolean).join(' '),
    role: "tablist"
  }, rest), options.map(o => {
    const it = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    const active = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      type: "button",
      role: "tab",
      "aria-selected": active,
      className: ['ds-segmented__btn', active ? 'ds-segmented__btn--active' : ''].filter(Boolean).join(' '),
      onClick: () => onChange && onChange(it.value)
    }, it.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/molecules/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/molecules/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const UP = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "m6 15 6-6 6 6"
}));
const DOWN = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "m6 9 6 6 6-6"
}));

/** Stat — a single metric: label, value, optional trend delta. */
function Stat({
  label,
  value,
  delta,
  trend,
  className = '',
  ...rest
}) {
  const arrow = trend === 'up' ? UP : trend === 'down' ? DOWN : null;
  const deltaCls = trend === 'up' ? 'ds-stat__delta--up' : trend === 'down' ? 'ds-stat__delta--down' : '';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ds-stat', className].filter(Boolean).join(' ')
  }, rest), label ? /*#__PURE__*/React.createElement("span", {
    className: "ds-stat__label"
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    className: "ds-stat__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-stat__value"
  }, value), delta != null ? /*#__PURE__*/React.createElement("span", {
    className: ['ds-stat__delta', deltaCls].filter(Boolean).join(' ')
  }, arrow, delta) : null));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/molecules/Stat.jsx", error: String((e && e.message) || e) }); }

// components/molecules/Stepper.jsx
try { (() => {
const CHECK = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "3",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("polyline", {
  points: "20 6 9 17 4 12"
}));

/** Stepper — horizontal progress through ordered steps. */
function Stepper({
  steps = [],
  current = 0,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['ds-stepper', className].filter(Boolean).join(' ')
  }, steps.map((s, i) => {
    const label = typeof s === 'string' ? s : s.label;
    const done = i < current;
    const active = i === current;
    const cls = ['ds-step', done ? 'ds-step--done' : '', active ? 'ds-step--active' : ''].filter(Boolean).join(' ');
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, i > 0 ? /*#__PURE__*/React.createElement("span", {
      className: ['ds-step__line', i <= current ? 'ds-step__line--done' : ''].filter(Boolean).join(' ')
    }) : null, /*#__PURE__*/React.createElement("div", {
      className: cls
    }, /*#__PURE__*/React.createElement("span", {
      className: "ds-step__dot"
    }, done ? CHECK : i + 1), /*#__PURE__*/React.createElement("span", {
      className: "ds-step__label"
    }, label)));
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/molecules/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/molecules/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tabs — underline tab bar. Controlled via value/onChange. */
function Tabs({
  tabs = [],
  value,
  onChange,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ds-tabs', className].filter(Boolean).join(' '),
    role: "tablist"
  }, rest), tabs.map(t => {
    const item = typeof t === 'string' ? {
      value: t,
      label: t
    } : t;
    const active = item.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: item.value,
      type: "button",
      role: "tab",
      "aria-selected": active,
      className: ['ds-tab', active ? 'ds-tab--active' : ''].filter(Boolean).join(' '),
      onClick: () => onChange && onChange(item.value)
    }, item.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/molecules/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/molecules/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Toast — floating notification card (presentational). Manage show/dismiss timing yourself. */
function Toast({
  variant = 'info',
  title,
  icon,
  onClose,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ds-toast', `ds-toast--${variant}`, className].filter(Boolean).join(' '),
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ds-toast__icon",
    "aria-hidden": "true"
  }, icon || __ds_scope._alertIcons[variant]), /*#__PURE__*/React.createElement("div", {
    className: "ds-toast__body"
  }, title ? /*#__PURE__*/React.createElement("p", {
    className: "ds-toast__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("p", {
    className: "ds-toast__desc"
  }, children) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    className: "ds-alert__close",
    "aria-label": "\uB2EB\uAE30",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  }))) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/molecules/Toast.jsx", error: String((e && e.message) || e) }); }

// components/molecules/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tooltip — hover/focus label. Wrap a focusable trigger for keyboard support. */
function Tooltip({
  content,
  side = 'top',
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['ds-tip', className].filter(Boolean).join(' ')
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: `ds-tip__bubble ds-tip__bubble--${side}`,
    role: "tooltip"
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/molecules/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/organisms/BottomSheet.jsx
try { (() => {
/** BottomSheet — mobile bottom sheet modal. Controlled via open/onClose. */
function BottomSheet({
  open,
  onClose,
  title,
  children
}) {
  React.useEffect(() => {
    if (!open) return undefined;
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "ds-sheet-overlay",
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-sheet",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title || undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-sheet__grip",
    "aria-hidden": "true"
  }), title ? /*#__PURE__*/React.createElement("h2", {
    className: "ds-sheet__title"
  }, title) : null, children));
}
Object.assign(__ds_scope, { BottomSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/organisms/BottomSheet.jsx", error: String((e && e.message) || e) }); }

// components/organisms/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Dialog — modal overlay. Controlled via `open` / `onClose`. Closes on backdrop click & Esc. */
function Dialog({
  open,
  onClose,
  title,
  size = 'md',
  footer = null,
  children,
  ...rest
}) {
  React.useEffect(() => {
    if (!open) return undefined;
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "ds-dialog-overlay",
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-dialog ds-dialog--${size}`,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title || undefined
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ds-dialog__head"
  }, title ? /*#__PURE__*/React.createElement("h2", {
    className: "ds-dialog__title"
  }, title) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("button", {
    className: "ds-alert__close",
    "aria-label": "\uB2EB\uAE30",
    onClick: onClose,
    style: {
      width: '20px',
      height: '20px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "ds-dialog__body"
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: "ds-dialog__foot"
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/organisms/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/organisms/Drawer.jsx
try { (() => {
/** Drawer — side panel (sheet). Controlled via open/onClose. */
function Drawer({
  open,
  onClose,
  side = 'right',
  title,
  footer = null,
  children
}) {
  React.useEffect(() => {
    if (!open) return undefined;
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "ds-drawer-overlay",
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: `ds-drawer ds-drawer--${side}`,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title || undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-drawer__head"
  }, title ? /*#__PURE__*/React.createElement("h2", {
    className: "ds-drawer__title"
  }, title) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("button", {
    className: "ds-alert__close",
    style: {
      width: '20px',
      height: '20px'
    },
    "aria-label": "\uB2EB\uAE30",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "ds-drawer__body"
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: "ds-drawer__foot"
  }, footer) : null));
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/organisms/Drawer.jsx", error: String((e && e.message) || e) }); }

// components/organisms/Popover.jsx
try { (() => {
/** Popover — click-triggered floating panel for rich content. Closes on outside click / Esc. */
function Popover({
  trigger,
  children,
  align = 'left',
  className = ''
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return undefined;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  return /*#__PURE__*/React.createElement("div", {
    className: ['ds-popover', className].filter(Boolean).join(' '),
    ref: ref
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(o => !o),
    style: {
      display: 'inline-flex'
    }
  }, trigger), open ? /*#__PURE__*/React.createElement("div", {
    className: `ds-popover__panel ds-popover__panel--${align}`,
    role: "dialog"
  }, children) : null);
}
Object.assign(__ds_scope, { Popover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/organisms/Popover.jsx", error: String((e && e.message) || e) }); }

// components/organisms/Table.jsx
try { (() => {
/** Table — styled data table. Define columns; pass row objects. */
function Table({
  columns = [],
  rows = [],
  rowKey,
  className = ''
}) {
  const alignCls = a => a === 'right' ? 'is-right' : a === 'center' ? 'is-center' : '';
  return /*#__PURE__*/React.createElement("div", {
    className: ['ds-table-wrap', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("table", {
    className: "ds-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    className: alignCls(c.align),
    style: c.width ? {
      width: c.width
    } : undefined
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: rowKey ? r[rowKey] : ri
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    className: alignCls(c.align)
  }, c.render ? c.render(r[c.key], r) : r[c.key])))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/organisms/Table.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.AppBar = __ds_scope.AppBar;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.BottomSheet = __ds_scope.BottomSheet;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.Popover = __ds_scope.Popover;

__ds_ns.Table = __ds_scope.Table;

})();

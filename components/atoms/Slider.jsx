import React from 'react';

/** Slider — range input with cobalt fill. Controlled (value) or uncontrolled (defaultValue). */
export function Slider({ value, defaultValue, min = 0, max = 100, step = 1, onChange, label, showValue = false, className = '', ...rest }) {
  const [internal, setInternal] = React.useState(defaultValue != null ? defaultValue : min);
  const val = value != null ? value : internal;
  const pct = ((val - min) / (max - min)) * 100;
  const handle = (e) => { const v = Number(e.target.value); if (value == null) setInternal(v); if (onChange) onChange(v); };
  const bg = `linear-gradient(90deg, var(--accent) ${pct}%, var(--surface-sunken) ${pct}%)`;
  return (
    <div className={['ds-field', className].filter(Boolean).join(' ')}>
      {(label || showValue) ? (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          {label ? <label className="ds-field__label">{label}</label> : <span></span>}
          {showValue ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-secondary)' }}>{val}</span> : null}
        </div>
      ) : null}
      <input type="range" className="ds-slider" min={min} max={max} step={step} value={val} onChange={handle} style={{ background: bg }} {...rest} />
    </div>
  );
}

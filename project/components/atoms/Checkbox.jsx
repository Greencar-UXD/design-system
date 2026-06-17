import React from 'react';

/** Checkbox — labeled checkbox with cobalt checked state. */
export function Checkbox({ label, className = '', disabled = false, ...rest }) {
  return (
    <label className={['ds-check', className].filter(Boolean).join(' ')}>
      <input type="checkbox" disabled={disabled} {...rest} />
      <span className="ds-check__box" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </span>
      {label != null ? <span className="ds-check__label">{label}</span> : null}
    </label>
  );
}

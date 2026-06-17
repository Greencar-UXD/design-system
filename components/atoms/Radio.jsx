import React from 'react';

/** Radio — labeled radio button with cobalt selected state. */
export function Radio({ label, className = '', disabled = false, ...rest }) {
  return (
    <label className={['ds-check', 'ds-check--radio', className].filter(Boolean).join(' ')}>
      <input type="radio" disabled={disabled} {...rest} />
      <span className="ds-check__box" aria-hidden="true"><span className="ds-check__dot"></span></span>
      {label != null ? <span className="ds-check__label">{label}</span> : null}
    </label>
  );
}

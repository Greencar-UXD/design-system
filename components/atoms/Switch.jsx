import React from 'react';

/** Switch — toggle with cobalt active track. */
export function Switch({ label, className = '', disabled = false, ...rest }) {
  return (
    <label className={['ds-switch', className].filter(Boolean).join(' ')}>
      <input type="checkbox" role="switch" disabled={disabled} {...rest} />
      <span className="ds-switch__track" aria-hidden="true"><span className="ds-switch__thumb"></span></span>
      {label != null ? <span className="ds-switch__label">{label}</span> : null}
    </label>
  );
}

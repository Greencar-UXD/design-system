import React from 'react';

let _id = 0;

/**
 * Input — text field with optional label, leading icon, hint & error.
 */
export function Input({
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

  return (
    <div className={['ds-field', error ? 'ds-field--error' : '', className].filter(Boolean).join(' ')}>
      {label ? (
        <label className="ds-field__label" htmlFor={fieldId}>
          {label}{required ? <span className="ds-req">*</span> : null}
        </label>
      ) : null}
      <div className={['ds-inputwrap', hasIcon ? 'ds-inputwrap--hasicon' : ''].filter(Boolean).join(' ')}>
        {hasIcon ? <span className="ds-inputwrap__icon" aria-hidden="true">{icon}</span> : null}
        <input id={fieldId} className="ds-input" aria-invalid={!!error} {...rest} />
      </div>
      {error ? <span className="ds-field__error">{error}</span>
        : hint ? <span className="ds-field__hint">{hint}</span> : null}
    </div>
  );
}

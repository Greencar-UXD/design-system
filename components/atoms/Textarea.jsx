import React from 'react';

let _tid = 0;

/** Textarea — multi-line text field with label, hint & error. */
export function Textarea({
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
  return (
    <div className={['ds-field', error ? 'ds-field--error' : '', className].filter(Boolean).join(' ')}>
      {label ? (
        <label className="ds-field__label" htmlFor={fieldId}>
          {label}{required ? <span className="ds-req">*</span> : null}
        </label>
      ) : null}
      <textarea id={fieldId} className="ds-textarea" rows={rows} aria-invalid={!!error} {...rest} />
      {error ? <span className="ds-field__error">{error}</span>
        : hint ? <span className="ds-field__hint">{hint}</span> : null}
    </div>
  );
}

import React from 'react';

let _sid = 0;

/** Select — native dropdown with custom chevron, label, hint & error. */
export function Select({
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
  return (
    <div className={['ds-field', error ? 'ds-field--error' : '', className].filter(Boolean).join(' ')}>
      {label ? (
        <label className="ds-field__label" htmlFor={fieldId}>
          {label}{required ? <span className="ds-req">*</span> : null}
        </label>
      ) : null}
      <select id={fieldId} className="ds-select" aria-invalid={!!error} defaultValue={placeholder ? '' : undefined} {...rest}>
        {placeholder ? <option value="" disabled>{placeholder}</option> : null}
        {options
          ? options.map((o) => {
              const opt = typeof o === 'string' ? { value: o, label: o } : o;
              return <option key={opt.value} value={opt.value}>{opt.label}</option>;
            })
          : children}
      </select>
      {error ? <span className="ds-field__error">{error}</span>
        : hint ? <span className="ds-field__hint">{hint}</span> : null}
    </div>
  );
}

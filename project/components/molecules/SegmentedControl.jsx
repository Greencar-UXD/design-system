import React from 'react';

/** SegmentedControl — pill-group single-select toggle. */
export function SegmentedControl({ options = [], value, onChange, className = '', ...rest }) {
  return (
    <div className={['ds-segmented', className].filter(Boolean).join(' ')} role="tablist" {...rest}>
      {options.map((o) => {
        const it = typeof o === 'string' ? { value: o, label: o } : o;
        const active = it.value === value;
        return (
          <button key={it.value} type="button" role="tab" aria-selected={active}
            className={['ds-segmented__btn', active ? 'ds-segmented__btn--active' : ''].filter(Boolean).join(' ')}
            onClick={() => onChange && onChange(it.value)}>
            {it.label}
          </button>
        );
      })}
    </div>
  );
}

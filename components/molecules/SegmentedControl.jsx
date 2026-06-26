import React from 'react';

/** SegmentedControl — pill-group single-select toggle. Arrow keys move between options. */
export function SegmentedControl({ options = [], value, onChange, className = '', ...rest }) {
  const values = options.map((o) => (typeof o === 'string' ? o : o.value));
  const activeIdx = values.indexOf(value);
  const focusIdx = activeIdx >= 0 ? activeIdx : 0;
  const onKeyDown = (e) => {
    let next = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (focusIdx + 1) % values.length;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (focusIdx - 1 + values.length) % values.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = values.length - 1;
    if (next == null) return;
    e.preventDefault();
    const btns = e.currentTarget.querySelectorAll('[role="tab"]');
    if (btns[next]) btns[next].focus();
    if (onChange) onChange(values[next]);
  };
  return (
    <div className={['ds-segmented', className].filter(Boolean).join(' ')} role="tablist" onKeyDown={onKeyDown} {...rest}>
      {options.map((o, i) => {
        const it = typeof o === 'string' ? { value: o, label: o } : o;
        const active = it.value === value;
        return (
          <button key={it.value} type="button" role="tab" aria-selected={active} tabIndex={i === focusIdx ? 0 : -1}
            className={['ds-segmented__btn', active ? 'ds-segmented__btn--active' : ''].filter(Boolean).join(' ')}
            onClick={() => onChange && onChange(it.value)}>
            {it.label}
          </button>
        );
      })}
    </div>
  );
}

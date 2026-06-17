import React from 'react';

/** BottomNav — mobile tab bar. Controlled via value/onChange. */
export function BottomNav({ items = [], value, onChange, className = '', ...rest }) {
  return (
    <nav className={['ds-bottomnav', className].filter(Boolean).join(' ')} {...rest}>
      {items.map((it) => {
        const active = it.value === value;
        return (
          <button key={it.value} type="button"
            className={['ds-bottomnav__item', active ? 'ds-bottomnav__item--active' : ''].filter(Boolean).join(' ')}
            aria-current={active ? 'page' : undefined}
            onClick={() => onChange && onChange(it.value)}>
            <span aria-hidden="true">{it.icon}</span>
            <span>{it.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

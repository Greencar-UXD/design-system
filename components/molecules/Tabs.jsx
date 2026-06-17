import React from 'react';

/** Tabs — underline tab bar. Controlled via value/onChange. */
export function Tabs({ tabs = [], value, onChange, className = '', ...rest }) {
  return (
    <div className={['ds-tabs', className].filter(Boolean).join(' ')} role="tablist" {...rest}>
      {tabs.map((t) => {
        const item = typeof t === 'string' ? { value: t, label: t } : t;
        const active = item.value === value;
        return (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={active}
            className={['ds-tab', active ? 'ds-tab--active' : ''].filter(Boolean).join(' ')}
            onClick={() => onChange && onChange(item.value)}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

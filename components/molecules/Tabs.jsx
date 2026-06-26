import React from 'react';

/** Tabs — underline tab bar. Controlled via value/onChange. Arrow keys move between tabs. */
export function Tabs({ tabs = [], value, onChange, className = '', ...rest }) {
  const values = tabs.map((t) => (typeof t === 'string' ? t : t.value));
  const activeIdx = values.indexOf(value);
  const focusIdx = activeIdx >= 0 ? activeIdx : 0; // roving tabindex anchor
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
    <div className={['ds-tabs', className].filter(Boolean).join(' ')} role="tablist" onKeyDown={onKeyDown} {...rest}>
      {tabs.map((t, i) => {
        const item = typeof t === 'string' ? { value: t, label: t } : t;
        const active = item.value === value;
        return (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={active}
            tabIndex={i === focusIdx ? 0 : -1}
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

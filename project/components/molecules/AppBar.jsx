import React from 'react';

/** AppBar — mobile top bar with leading/trailing slots and a title. */
export function AppBar({ title, left = null, right = null, align = 'center', className = '', ...rest }) {
  return (
    <header className={['ds-appbar', className].filter(Boolean).join(' ')} {...rest}>
      <div className="ds-appbar__side">{left}</div>
      <h1 className={['ds-appbar__title', align === 'left' ? 'ds-appbar__title--left' : ''].filter(Boolean).join(' ')}>{title}</h1>
      <div className="ds-appbar__side ds-appbar__side--right">{right}</div>
    </header>
  );
}

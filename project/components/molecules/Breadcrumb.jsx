import React from 'react';

const CHEVRON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);

/** Breadcrumb — hierarchical path. Last item is the current page. */
export function Breadcrumb({ items = [], className = '' }) {
  return (
    <nav className={['ds-crumb', className].filter(Boolean).join(' ')} aria-label="breadcrumb">
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            {last ? (
              <span className="ds-crumb__item ds-crumb__item--current" aria-current="page">{it.label}</span>
            ) : (
              <button className="ds-crumb__item" onClick={it.onClick}>{it.label}</button>
            )}
            {!last ? <span className="ds-crumb__sep" aria-hidden="true">{CHEVRON}</span> : null}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

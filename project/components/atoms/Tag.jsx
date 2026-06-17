import React from 'react';

/** Tag — removable label/chip. Pass onRemove to show the × button. */
export function Tag({ onRemove, className = '', children, ...rest }) {
  return (
    <span className={['ds-tag', className].filter(Boolean).join(' ')} {...rest}>
      {children}
      {onRemove ? (
        <span className="ds-tag__close" role="button" aria-label="제거" tabIndex={0}
          onClick={onRemove}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onRemove(e); } }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </span>
      ) : null}
    </span>
  );
}

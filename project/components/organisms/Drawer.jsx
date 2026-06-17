import React from 'react';

/** Drawer — side panel (sheet). Controlled via open/onClose. */
export function Drawer({ open, onClose, side = 'right', title, footer = null, children }) {
  React.useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape' && onClose) onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="ds-drawer-overlay" onClick={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}>
      <div className={`ds-drawer ds-drawer--${side}`} role="dialog" aria-modal="true" aria-label={title || undefined}>
        <div className="ds-drawer__head">
          {title ? <h2 className="ds-drawer__title">{title}</h2> : <span></span>}
          <button className="ds-alert__close" style={{ width: '20px', height: '20px' }} aria-label="닫기" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        <div className="ds-drawer__body">{children}</div>
        {footer ? <div className="ds-drawer__foot">{footer}</div> : null}
      </div>
    </div>
  );
}

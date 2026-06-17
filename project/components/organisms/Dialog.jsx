import React from 'react';

/** Dialog — modal overlay. Controlled via `open` / `onClose`. Closes on backdrop click & Esc. */
export function Dialog({ open, onClose, title, size = 'md', footer = null, children, ...rest }) {
  React.useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape' && onClose) onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="ds-dialog-overlay" onClick={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}>
      <div className={`ds-dialog ds-dialog--${size}`} role="dialog" aria-modal="true" aria-label={title || undefined} {...rest}>
        <div className="ds-dialog__head">
          {title ? <h2 className="ds-dialog__title">{title}</h2> : <span></span>}
          <button className="ds-alert__close" aria-label="닫기" onClick={onClose} style={{ width: '20px', height: '20px' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        <div className="ds-dialog__body">{children}</div>
        {footer ? <div className="ds-dialog__foot">{footer}</div> : null}
      </div>
    </div>
  );
}

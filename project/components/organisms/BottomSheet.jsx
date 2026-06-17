import React from 'react';

/** BottomSheet — mobile bottom sheet modal. Controlled via open/onClose. */
export function BottomSheet({ open, onClose, title, children }) {
  React.useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape' && onClose) onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="ds-sheet-overlay" onClick={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}>
      <div className="ds-sheet" role="dialog" aria-modal="true" aria-label={title || undefined}>
        <div className="ds-sheet__grip" aria-hidden="true"></div>
        {title ? <h2 className="ds-sheet__title">{title}</h2> : null}
        {children}
      </div>
    </div>
  );
}

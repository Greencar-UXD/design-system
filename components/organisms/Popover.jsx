import React from 'react';

/** Popover — click-triggered floating panel for rich content. Closes on outside click / Esc. */
export function Popover({ trigger, children, align = 'left', className = '' }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return undefined;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey); };
  }, [open]);
  return (
    <div className={['ds-popover', className].filter(Boolean).join(' ')} ref={ref}>
      <span onClick={() => setOpen((o) => !o)} style={{ display: 'inline-flex' }}>{trigger}</span>
      {open ? <div className={`ds-popover__panel ds-popover__panel--${align}`} role="dialog">{children}</div> : null}
    </div>
  );
}

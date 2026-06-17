import React from 'react';

/** Menu — dropdown menu. Click trigger to toggle; closes on outside click. */
export function Menu({ trigger, items = [], align = 'left', className = '' }) {
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
    <div className={['ds-menu', className].filter(Boolean).join(' ')} ref={ref}>
      <span onClick={() => setOpen((o) => !o)} style={{ display: 'inline-flex' }}>{trigger}</span>
      {open ? (
        <div className={`ds-menu__list ds-menu__list--${align}`} role="menu">
          {items.map((it, i) => it.separator ? (
            <div key={i} className="ds-menu__sep" role="separator"></div>
          ) : (
            <button key={i} role="menuitem"
              className={['ds-menu__item', it.danger ? 'ds-menu__item--danger' : ''].filter(Boolean).join(' ')}
              onClick={() => { setOpen(false); if (it.onClick) it.onClick(); }}>
              {it.icon ? <span style={{ display: 'inline-flex' }} aria-hidden="true">{it.icon}</span> : null}
              {it.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

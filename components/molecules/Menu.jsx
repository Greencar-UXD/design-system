import React from 'react';

/** Menu — dropdown menu. Click trigger to toggle; closes on outside click.
 *  Keyboard: opens focus the first item, Up/Down/Home/End move, Esc or select returns focus to the trigger. */
export function Menu({ trigger, items = [], align = 'left', className = '' }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const triggerRef = React.useRef(null);
  const listRef = React.useRef(null);

  const restoreFocus = () => {
    const t = triggerRef.current && triggerRef.current.querySelector('button,a,[tabindex]');
    if (t && t.focus) t.focus();
  };
  const close = (restore) => { setOpen(false); if (restore) restoreFocus(); };

  React.useEffect(() => {
    if (!open) return undefined;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') close(true); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    const first = listRef.current && listRef.current.querySelector('[role="menuitem"]');
    if (first) first.focus();
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey); };
  }, [open]);

  const onListKeyDown = (e) => {
    const menuitems = Array.from(listRef.current.querySelectorAll('[role="menuitem"]'));
    if (menuitems.length === 0) return;
    const idx = menuitems.indexOf(document.activeElement);
    let next = null;
    if (e.key === 'ArrowDown') next = (idx + 1) % menuitems.length;
    else if (e.key === 'ArrowUp') next = (idx - 1 + menuitems.length) % menuitems.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = menuitems.length - 1;
    if (next == null) return;
    e.preventDefault();
    menuitems[next].focus();
  };

  return (
    <div className={['ds-menu', className].filter(Boolean).join(' ')} ref={ref}>
      <span ref={triggerRef} onClick={() => setOpen((o) => !o)} style={{ display: 'inline-flex' }}>{trigger}</span>
      {open ? (
        <div ref={listRef} className={`ds-menu__list ds-menu__list--${align}`} role="menu" onKeyDown={onListKeyDown}>
          {items.map((it, i) => it.separator ? (
            <div key={i} className="ds-menu__sep" role="separator"></div>
          ) : (
            <button key={i} role="menuitem" tabIndex={-1}
              className={['ds-menu__item', it.danger ? 'ds-menu__item--danger' : ''].filter(Boolean).join(' ')}
              onClick={() => { close(true); if (it.onClick) it.onClick(); }}>
              {it.icon ? <span style={{ display: 'inline-flex' }} aria-hidden="true">{it.icon}</span> : null}
              {it.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

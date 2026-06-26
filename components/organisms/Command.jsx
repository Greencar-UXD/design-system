import React from 'react';
import { useFocusTrap } from '../_useFocusTrap.js';

const SEARCH_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);

/**
 * Command — ⌘K command palette (modal). Controlled via `open` / `onClose`.
 * items: [{ id?, label, hint?, icon?, onSelect }]. Type to filter, Up/Down to
 * move, Enter to run, Esc / backdrop to close. Wire the ⌘K shortcut yourself.
 */
export function Command({ open, onClose, items = [], placeholder = '명령 검색…', emptyText = '결과 없음' }) {
  const uid = React.useId();
  const listId = `${uid}-list`;
  const panelRef = React.useRef(null);
  const [query, setQuery] = React.useState('');
  const [active, setActive] = React.useState(0);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? items.filter((it) => String(it.label).toLowerCase().includes(q)) : items;
  }, [items, query]);
  const activeIdx = Math.min(active, Math.max(filtered.length - 1, 0));

  React.useEffect(() => {
    if (!open) return undefined;
    setQuery('');
    setActive(0);
    const onKey = (e) => { if (e.key === 'Escape') { e.preventDefault(); if (onClose) onClose(); } };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useFocusTrap(open, panelRef);

  if (!open) return null;

  const run = (it) => { if (onClose) onClose(); if (it && it.onSelect) it.onSelect(); };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive((a) => Math.min(a + 1, filtered.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    else if (e.key === 'Home') { e.preventDefault(); setActive(0); }
    else if (e.key === 'End') { e.preventDefault(); setActive(filtered.length - 1); }
    else if (e.key === 'Enter') { if (filtered[activeIdx]) { e.preventDefault(); run(filtered[activeIdx]); } }
  };

  return (
    <div className="ds-cmdk-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}>
      <div className="ds-cmdk" ref={panelRef} tabIndex={-1} role="dialog" aria-modal="true" aria-label="명령 팔레트">
        <div className="ds-cmdk__search">
          <span className="ds-cmdk__searchicon">{SEARCH_ICON}</span>
          <input
            className="ds-cmdk__input"
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls={listId}
            aria-autocomplete="list"
            aria-activedescendant={filtered[activeIdx] ? `${listId}-opt-${activeIdx}` : undefined}
            placeholder={placeholder}
            value={query}
            onChange={(e) => { setQuery(e.target.value); setActive(0); }}
            onKeyDown={onKeyDown}
            autoComplete="off"
          />
        </div>
        <ul className="ds-cmdk__list" id={listId} role="listbox">
          {filtered.length === 0 ? (
            <li className="ds-cmdk__empty">{emptyText}</li>
          ) : filtered.map((it, i) => (
            <li
              key={it.id || i}
              id={`${listId}-opt-${i}`}
              role="option"
              aria-selected={i === activeIdx}
              className={['ds-cmdk__item', i === activeIdx ? 'is-active' : ''].filter(Boolean).join(' ')}
              onMouseEnter={() => setActive(i)}
              onMouseDown={(e) => { e.preventDefault(); run(it); }}
            >
              {it.icon ? <span className="ds-cmdk__icon" aria-hidden="true">{it.icon}</span> : null}
              <span className="ds-cmdk__label">{it.label}</span>
              {it.hint ? <span className="ds-cmdk__hint">{it.hint}</span> : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

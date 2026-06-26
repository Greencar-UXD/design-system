import React from 'react';

/**
 * Combobox — searchable single-select (WAI-ARIA editable combobox + listbox).
 * Controlled via `value` / `onChange(value)`. Type to filter; Arrow/Home/End to
 * move, Enter to select, Esc to close. Options: [{ value, label }].
 */
export function Combobox({
  options = [], value, onChange, placeholder = '검색…', label,
  emptyText = '결과 없음', className = '', id,
}) {
  const autoId = React.useId();
  const baseId = id || autoId;
  const listId = `${baseId}-list`;
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const [active, setActive] = React.useState(0);
  const rootRef = React.useRef(null);

  const selected = options.find((o) => o.value === value) || null;
  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? options.filter((o) => String(o.label).toLowerCase().includes(q)) : options;
  }, [options, query]);
  const activeIdx = Math.min(active, Math.max(filtered.length - 1, 0));

  React.useEffect(() => {
    if (!open) return undefined;
    const onDoc = (e) => { if (rootRef.current && !rootRef.current.contains(e.target)) close(); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  function close() { setOpen(false); setQuery(''); }
  function choose(opt) { if (onChange) onChange(opt.value); close(); }

  const onKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowDown': e.preventDefault(); if (!open) { setOpen(true); setActive(0); } else setActive((a) => Math.min(a + 1, filtered.length - 1)); break;
      case 'ArrowUp':   e.preventDefault(); if (!open) { setOpen(true); setActive(0); } else setActive((a) => Math.max(a - 1, 0)); break;
      case 'Home':      if (open) { e.preventDefault(); setActive(0); } break;
      case 'End':       if (open) { e.preventDefault(); setActive(filtered.length - 1); } break;
      case 'Enter':     if (open && filtered[activeIdx]) { e.preventDefault(); choose(filtered[activeIdx]); } break;
      case 'Escape':    if (open) { e.preventDefault(); close(); } break;
      default: break;
    }
  };

  return (
    <div className={['ds-field', className].filter(Boolean).join(' ')} ref={rootRef}>
      {label ? <label className="ds-field__label" htmlFor={baseId}>{label}</label> : null}
      <div className="ds-combobox">
        <input
          id={baseId}
          className="ds-input ds-combobox__input"
          type="text"
          role="combobox"
          aria-expanded={open}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={open && filtered[activeIdx] ? `${listId}-opt-${activeIdx}` : undefined}
          placeholder={selected && !open ? undefined : placeholder}
          value={open ? query : (selected ? selected.label : '')}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); setActive(0); }}
          onClick={() => setOpen(true)}
          onKeyDown={onKeyDown}
          autoComplete="off"
        />
        {open ? (
          <ul className="ds-combobox__list" id={listId} role="listbox">
            {filtered.length === 0 ? (
              <li className="ds-combobox__empty">{emptyText}</li>
            ) : filtered.map((o, i) => (
              <li
                key={o.value}
                id={`${listId}-opt-${i}`}
                role="option"
                aria-selected={value === o.value}
                className={['ds-combobox__opt', i === activeIdx ? 'is-active' : ''].filter(Boolean).join(' ')}
                onMouseEnter={() => setActive(i)}
                onMouseDown={(e) => { e.preventDefault(); choose(o); }}
              >
                <span className="ds-combobox__optlabel">{o.label}</span>
                {value === o.value ? (
                  <svg className="ds-combobox__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                ) : null}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

import React from 'react';

const CHECK = (
  <svg className="ds-combobox__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
);

/**
 * Combobox — searchable select (WAI-ARIA editable combobox + listbox). Controlled.
 * - Single (default): `value` is a string, `onChange(value)`.
 * - Multiple (`multiple`): `value` is string[], `onChange(string[])`, selections show as chips.
 * - `loading` shows a busy row (caller fetches `options`).
 */
export function Combobox({
  options = [], value, onChange, placeholder = '검색…', label,
  emptyText = '결과 없음', loading = false, loadingText = '불러오는 중…',
  multiple = false, className = '', id,
}) {
  const autoId = React.useId();
  const baseId = id || autoId;
  const listId = `${baseId}-list`;
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const [active, setActive] = React.useState(0);
  const rootRef = React.useRef(null);
  const inputRef = React.useRef(null);

  const selectedValues = multiple ? (Array.isArray(value) ? value : []) : (value != null ? [value] : []);
  const isSelected = (v) => selectedValues.includes(v);
  const single = !multiple ? options.find((o) => o.value === value) || null : null;

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

  function close() { setOpen(false); if (!multiple) setQuery(''); }
  function choose(opt) {
    if (multiple) {
      const next = isSelected(opt.value) ? selectedValues.filter((v) => v !== opt.value) : [...selectedValues, opt.value];
      if (onChange) onChange(next);
      setQuery(''); setActive(0);
      if (inputRef.current) inputRef.current.focus();
    } else {
      if (onChange) onChange(opt.value);
      setOpen(false); setQuery('');
    }
  }
  function removeChip(v) {
    if (onChange) onChange(selectedValues.filter((x) => x !== v));
    if (inputRef.current) inputRef.current.focus();
  }

  const onKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowDown': e.preventDefault(); if (!open) { setOpen(true); setActive(0); } else setActive((a) => Math.min(a + 1, filtered.length - 1)); break;
      case 'ArrowUp':   e.preventDefault(); if (!open) { setOpen(true); setActive(0); } else setActive((a) => Math.max(a - 1, 0)); break;
      case 'Home':      if (open) { e.preventDefault(); setActive(0); } break;
      case 'End':       if (open) { e.preventDefault(); setActive(filtered.length - 1); } break;
      case 'Enter':     if (open && filtered[activeIdx]) { e.preventDefault(); choose(filtered[activeIdx]); } break;
      case 'Escape':    if (open) { e.preventDefault(); close(); } break;
      case 'Backspace': if (multiple && !query && selectedValues.length) removeChip(selectedValues[selectedValues.length - 1]); break;
      default: break;
    }
  };

  const inputProps = {
    id: baseId, ref: inputRef, type: 'text', role: 'combobox',
    'aria-expanded': open, 'aria-controls': listId, 'aria-autocomplete': 'list',
    'aria-activedescendant': open && filtered[activeIdx] ? `${listId}-opt-${activeIdx}` : undefined,
    value: multiple ? query : (open ? query : (single ? single.label : '')),
    onChange: (e) => { setQuery(e.target.value); setOpen(true); setActive(0); },
    onClick: () => setOpen(true), onKeyDown, autoComplete: 'off',
  };

  return (
    <div className={['ds-field', className].filter(Boolean).join(' ')} ref={rootRef}>
      {label ? <label className="ds-field__label" htmlFor={baseId}>{label}</label> : null}
      <div className="ds-combobox">
        {multiple ? (
          <div className="ds-combobox__control" onMouseDown={(e) => { if (e.target === e.currentTarget && inputRef.current) inputRef.current.focus(); }}>
            {selectedValues.map((v) => {
              const o = options.find((x) => x.value === v);
              return (
                <span className="ds-combobox__chip" key={v}>
                  {o ? o.label : v}
                  <button type="button" className="ds-combobox__chipx" aria-label="제거" onMouseDown={(e) => { e.preventDefault(); removeChip(v); }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
                  </button>
                </span>
              );
            })}
            <input {...inputProps} className="ds-combobox__input ds-combobox__input--bare" placeholder={selectedValues.length ? '' : placeholder} />
          </div>
        ) : (
          <input {...inputProps} className="ds-input ds-combobox__input" placeholder={single && !open ? undefined : placeholder} />
        )}
        {open ? (
          <ul className="ds-combobox__list" id={listId} role="listbox" aria-multiselectable={multiple || undefined}>
            {loading ? (
              <li className="ds-combobox__empty"><span className="ds-dots" aria-hidden="true"><span></span><span></span><span></span></span>&nbsp; {loadingText}</li>
            ) : filtered.length === 0 ? (
              <li className="ds-combobox__empty">{emptyText}</li>
            ) : filtered.map((o, i) => (
              <li key={o.value} id={`${listId}-opt-${i}`} role="option" aria-selected={isSelected(o.value)}
                className={['ds-combobox__opt', i === activeIdx ? 'is-active' : ''].filter(Boolean).join(' ')}
                onMouseEnter={() => setActive(i)} onMouseDown={(e) => { e.preventDefault(); choose(o); }}>
                <span className="ds-combobox__optlabel">{o.label}</span>
                {isSelected(o.value) ? CHECK : null}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

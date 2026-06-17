import React from 'react';

const CHEV = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>;

/** Accordion — collapsible sections. items: [{title, content}]. */
export function Accordion({ items = [], multiple = false, defaultOpen = [], className = '' }) {
  const [open, setOpen] = React.useState(() => new Set(defaultOpen));
  const toggle = (i) => setOpen((prev) => {
    const n = new Set(prev);
    if (n.has(i)) n.delete(i);
    else { if (!multiple) n.clear(); n.add(i); }
    return n;
  });
  return (
    <div className={['ds-accordion', className].filter(Boolean).join(' ')}>
      {items.map((it, i) => {
        const isOpen = open.has(i);
        return (
          <div key={i} className={['ds-accordion__item', isOpen ? 'ds-accordion__item--open' : ''].filter(Boolean).join(' ')}>
            <button className="ds-accordion__btn" aria-expanded={isOpen} onClick={() => toggle(i)}>
              {it.title}
              <span className="ds-accordion__chev" aria-hidden="true">{CHEV}</span>
            </button>
            {isOpen ? <div className="ds-accordion__panel">{it.content}</div> : null}
          </div>
        );
      })}
    </div>
  );
}

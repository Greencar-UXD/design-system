import React from 'react';

const Chev = (d) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={d}/></svg>
);

function buildRange(page, total) {
  const out = [];
  let last = 0;
  for (let p = 1; p <= total; p++) {
    if (p === 1 || p === total || (p >= page - 1 && p <= page + 1)) {
      if (last && p - last > 1) out.push('…');
      out.push(p);
      last = p;
    }
  }
  return out;
}

/** Pagination — page navigation with prev/next and ellipsis. Controlled. */
export function Pagination({ page = 1, total = 1, onChange, className = '' }) {
  const go = (p) => { if (onChange && p >= 1 && p <= total && p !== page) onChange(p); };
  const items = buildRange(page, total);
  return (
    <nav className={['ds-pager', className].filter(Boolean).join(' ')} aria-label="pagination">
      <button className="ds-pager__btn" onClick={() => go(page - 1)} disabled={page <= 1} aria-label="이전">{Chev('m15 18-6-6 6-6')}</button>
      {items.map((it, i) => it === '…' ? (
        <span key={`e${i}`} className="ds-pager__ellipsis">…</span>
      ) : (
        <button key={it} className={['ds-pager__btn', it === page ? 'ds-pager__btn--active' : ''].filter(Boolean).join(' ')}
          aria-current={it === page ? 'page' : undefined} onClick={() => go(it)}>{it}</button>
      ))}
      <button className="ds-pager__btn" onClick={() => go(page + 1)} disabled={page >= total} aria-label="다음">{Chev('m9 18 6-6-6-6')}</button>
    </nav>
  );
}

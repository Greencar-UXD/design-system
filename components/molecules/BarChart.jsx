import React from 'react';

/**
 * BarChart — vertical bars with direct value labels (no color-only meaning).
 * Bars are neutral; set `highlightIndex` to mark one in the brand accent.
 * data: [{ label, value }].
 */
export function BarChart({ data = [], height = 160, highlightIndex, valueFormat, label, className = '', ...rest }) {
  const max = Math.max(0, ...data.map((d) => d.value)) || 1;
  const fmt = valueFormat || ((v) => v);
  const summary = data.map((d) => `${d.label} ${fmt(d.value)}`).join(', ');
  return (
    <div className={['ds-barchart', className].filter(Boolean).join(' ')} role="img" aria-label={label || `막대 차트 — ${summary}`} {...rest}>
      <div className="ds-barchart__plot">
        {data.map((d, i) => (
          <div className="ds-barchart__col" key={i}>
            <div className="ds-barchart__track" style={{ height: `${height}px` }}>
              <span className="ds-barchart__val">{fmt(d.value)}</span>
              <div className={['ds-barchart__bar', i === highlightIndex ? 'is-accent' : ''].filter(Boolean).join(' ')}
                style={{ height: `${Math.max((d.value / max) * 100, 1)}%` }}></div>
            </div>
            <span className="ds-barchart__lbl">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

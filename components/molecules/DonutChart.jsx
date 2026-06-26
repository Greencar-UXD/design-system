import React from 'react';

const PALETTE = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)', 'var(--chart-5)', 'var(--chart-6)'];

/**
 * DonutChart — proportion of a whole. Dependency-free SVG.
 * Legend pairs each color with a label + value, so meaning never relies on color alone.
 * data: [{ label, value, color? }].  `center` shows in the hole (e.g. the total).
 */
export function DonutChart({ data = [], size = 160, thickness = 18, center, valueFormat, label, className = '', ...rest }) {
  const fmt = valueFormat || ((v) => v);
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  const r = 50 - thickness / 2;
  const C = 2 * Math.PI * r;
  let offset = 0;
  const segs = data.map((d, i) => {
    const len = (d.value / total) * C;
    const seg = { color: d.color || PALETTE[i % PALETTE.length], dash: len, off: -offset, pct: Math.round((d.value / total) * 100) };
    offset += len;
    return seg;
  });
  const summary = data.map((d, i) => `${d.label} ${segs[i].pct}%`).join(', ');
  return (
    <div className={['ds-donut', className].filter(Boolean).join(' ')} {...rest}>
      <div className="ds-donut__chart" style={{ width: `${size}px`, height: `${size}px` }} role="img" aria-label={label || `도넛 차트 — ${summary}`}>
        <svg viewBox="0 0 100 100" width={size} height={size}>
          <circle cx="50" cy="50" r={r} fill="none" stroke="var(--surface-sunken)" strokeWidth={thickness} />
          {segs.map((s, i) => (
            <circle key={i} cx="50" cy="50" r={r} fill="none" stroke={s.color} strokeWidth={thickness}
              strokeDasharray={`${s.dash.toFixed(2)} ${(C - s.dash).toFixed(2)}`} strokeDashoffset={s.off.toFixed(2)}
              transform="rotate(-90 50 50)" strokeLinecap="butt" />
          ))}
        </svg>
        {center != null ? <div className="ds-donut__center">{center}</div> : null}
      </div>
      <ul className="ds-donut__legend">
        {data.map((d, i) => (
          <li className="ds-donut__item" key={i}>
            <span className="ds-donut__dot" style={{ background: segs[i].color }} aria-hidden="true"></span>
            <span className="ds-donut__lbl">{d.label}</span>
            <span className="ds-donut__val">{fmt(d.value)} · {segs[i].pct}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

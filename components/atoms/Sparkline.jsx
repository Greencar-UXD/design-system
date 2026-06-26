import React from 'react';

/**
 * Sparkline — compact inline trend line (no axes). Dependency-free SVG.
 * The last point is the signature cobalt dot. data: number[].
 */
export function Sparkline({ data = [], width = 120, height = 32, strokeWidth = 2, area = true, label, className = '', ...rest }) {
  const n = data.length;
  if (n < 2) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  const pad = strokeWidth / 2 + 1;
  const pts = data.map((v, i) => {
    const x = (i / (n - 1)) * (width - pad * 2) + pad;
    const y = height - pad - ((v - min) / span) * (height - pad * 2);
    return [x, y];
  });
  const line = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
  const areaPath = `${line} L ${pts[n - 1][0].toFixed(1)} ${height} L ${pts[0][0].toFixed(1)} ${height} Z`;
  const trend = data[n - 1] >= data[0] ? '상승' : '하락';
  return (
    <svg className={['ds-spark', className].filter(Boolean).join(' ')} width={width} height={height}
      viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" role="img"
      aria-label={label || `추세 ${trend}: ${data[0]} → ${data[n - 1]}`} {...rest}>
      {area ? <path className="ds-spark__area" d={areaPath} /> : null}
      <path className="ds-spark__line" d={line} fill="none" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <circle className="ds-spark__dot" cx={pts[n - 1][0].toFixed(1)} cy={pts[n - 1][1].toFixed(1)} r={strokeWidth + 1} />
    </svg>
  );
}

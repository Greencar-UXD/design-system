import React from 'react';

/** Progress — linear bar. Pass `value` (0–100) or `indeterminate`. */
export function Progress({ value = 0, indeterminate = false, className = '', ...rest }) {
  const cls = ['ds-progress', indeterminate ? 'ds-progress--indeterminate' : '', className].filter(Boolean).join(' ');
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className={cls} role="progressbar" aria-valuenow={indeterminate ? undefined : pct} aria-valuemin={0} aria-valuemax={100} {...rest}>
      <div className="ds-progress__bar" style={indeterminate ? undefined : { width: `${pct}%` }}></div>
    </div>
  );
}

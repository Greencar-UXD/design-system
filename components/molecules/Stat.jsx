import React from 'react';

const UP = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 15 6-6 6 6"/></svg>;
const DOWN = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>;

/** Stat — a single metric: label, value, optional trend delta. */
export function Stat({ label, value, delta, trend, className = '', ...rest }) {
  const arrow = trend === 'up' ? UP : trend === 'down' ? DOWN : null;
  const deltaCls = trend === 'up' ? 'ds-stat__delta--up' : trend === 'down' ? 'ds-stat__delta--down' : '';
  return (
    <div className={['ds-stat', className].filter(Boolean).join(' ')} {...rest}>
      {label ? <span className="ds-stat__label">{label}</span> : null}
      <div className="ds-stat__row">
        <span className="ds-stat__value">{value}</span>
        {delta != null ? (
          <span className={['ds-stat__delta', deltaCls].filter(Boolean).join(' ')}>{arrow}{delta}</span>
        ) : null}
      </div>
    </div>
  );
}

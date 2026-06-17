import React from 'react';

const CHECK = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;

/** Stepper — horizontal progress through ordered steps. */
export function Stepper({ steps = [], current = 0, className = '' }) {
  return (
    <div className={['ds-stepper', className].filter(Boolean).join(' ')}>
      {steps.map((s, i) => {
        const label = typeof s === 'string' ? s : s.label;
        const done = i < current;
        const active = i === current;
        const cls = ['ds-step', done ? 'ds-step--done' : '', active ? 'ds-step--active' : ''].filter(Boolean).join(' ');
        return (
          <React.Fragment key={i}>
            {i > 0 ? <span className={['ds-step__line', i <= current ? 'ds-step__line--done' : ''].filter(Boolean).join(' ')}></span> : null}
            <div className={cls}>
              <span className="ds-step__dot">{done ? CHECK : i + 1}</span>
              <span className="ds-step__label">{label}</span>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

import React from 'react';

/** Badge — small status/label pill. */
export function Badge({ variant = 'neutral', dot = false, className = '', children, ...rest }) {
  const cls = ['ds-badge', `ds-badge--${variant}`, className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {dot ? <span className="ds-badge__dot" aria-hidden="true"></span> : null}
      {children}
    </span>
  );
}

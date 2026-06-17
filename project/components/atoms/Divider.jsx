import React from 'react';

/** Divider — horizontal/vertical rule, optionally with a centered label. */
export function Divider({ orientation = 'horizontal', label, className = '', ...rest }) {
  if (label) {
    return <div className={['ds-divider--label', className].filter(Boolean).join(' ')} role="separator" {...rest}>{label}</div>;
  }
  const o = orientation === 'vertical' ? 'ds-divider--v' : 'ds-divider--h';
  return <hr className={['ds-divider', o, className].filter(Boolean).join(' ')} {...rest} />;
}

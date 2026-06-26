import React from 'react';

/** Dots — signature inline loading indicator: three marks, the cobalt point landing last. */
export function Dots({ label = '로딩 중', className = '', ...rest }) {
  return (
    <span className={['ds-dots', className].filter(Boolean).join(' ')} role="status" aria-label={label} {...rest}>
      <span></span><span></span><span></span>
    </span>
  );
}

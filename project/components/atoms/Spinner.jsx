import React from 'react';

/** Spinner — circular loading indicator. */
export function Spinner({ size = 'md', label = '로딩 중', className = '', ...rest }) {
  return (
    <span className={['ds-spinner', `ds-spinner--${size}`, className].filter(Boolean).join(' ')}
      role="status" aria-label={label} {...rest}></span>
  );
}

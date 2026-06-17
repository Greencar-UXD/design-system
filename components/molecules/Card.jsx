import React from 'react';

/** Card — surface container. interactive adds hover lift; flat removes shadow. */
export function Card({
  as: Tag = 'div',
  interactive = false,
  flat = false,
  padded = true,
  className = '',
  children,
  ...rest
}) {
  const cls = [
    'ds-card',
    padded ? 'ds-card--pad' : '',
    interactive ? 'ds-card--interactive' : '',
    flat ? 'ds-card--flat' : '',
    className,
  ].filter(Boolean).join(' ');
  return <Tag className={cls} {...rest}>{children}</Tag>;
}

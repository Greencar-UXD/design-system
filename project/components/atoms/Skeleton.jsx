import React from 'react';

/** Skeleton — loading placeholder with shimmer. */
export function Skeleton({ variant = 'block', width, height, className = '', style = {}, ...rest }) {
  const v = variant === 'text' ? 'ds-skeleton--text' : variant === 'circle' ? 'ds-skeleton--circle' : '';
  const s = { ...style };
  if (width != null) s.width = typeof width === 'number' ? `${width}px` : width;
  if (height != null) s.height = typeof height === 'number' ? `${height}px` : height;
  return <div className={['ds-skeleton', v, className].filter(Boolean).join(' ')} style={s} aria-hidden="true" {...rest}></div>;
}

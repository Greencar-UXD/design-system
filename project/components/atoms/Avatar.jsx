import React from 'react';

/** Avatar — user image with initials fallback and optional status dot. */
export function Avatar({
  src = null,
  name = '',
  size = 'md',
  square = false,
  status = false,
  className = '',
  ...rest
}) {
  const cls = [
    'ds-avatar',
    `ds-avatar--${size}`,
    square ? 'ds-avatar--square' : '',
    className,
  ].filter(Boolean).join(' ');

  const initials = (name || '').trim().replace(/\s+/g, ' ').split(' ')
    .map((w) => w[0]).slice(0, 2).join('').toUpperCase();

  return (
    <span className={cls} title={name || undefined} {...rest}>
      {src ? <img src={src} alt={name} /> : <span>{initials}</span>}
      {status ? <span className="ds-avatar__status" aria-hidden="true"></span> : null}
    </span>
  );
}

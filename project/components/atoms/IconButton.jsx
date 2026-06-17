import React from 'react';

/**
 * IconButton — square, icon-only control.
 * variant: ghost (default) · outline · solid
 */
export function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  type = 'button',
  disabled = false,
  className = '',
  ...rest
}) {
  const cls = [
    'ds-iconbtn',
    `ds-iconbtn--${variant}`,
    `ds-iconbtn--${size}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button type={type} className={cls} disabled={disabled} aria-label={label} title={label} {...rest}>
      {icon}
    </button>
  );
}

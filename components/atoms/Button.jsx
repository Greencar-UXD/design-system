import React from 'react';

/**
 * Button — primary action control.
 * variant: primary (ink) · accent (cobalt) · secondary (outline) · ghost · danger
 */
export function Button({
  variant = 'primary',
  size = 'md',
  icon = null,
  iconRight = null,
  fullWidth = false,
  type = 'button',
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const cls = [
    'ds-btn',
    `ds-btn--${variant}`,
    `ds-btn--${size}`,
    fullWidth ? 'ds-btn--block' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button type={type} className={cls} disabled={disabled} {...rest}>
      {icon ? <span className="ds-btn__icon" aria-hidden="true">{icon}</span> : null}
      {children != null ? <span>{children}</span> : null}
      {iconRight ? <span className="ds-btn__icon" aria-hidden="true">{iconRight}</span> : null}
    </button>
  );
}

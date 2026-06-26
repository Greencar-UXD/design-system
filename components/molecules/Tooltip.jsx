import React from 'react';

/** Tooltip — hover/focus label. Wrap a focusable trigger for keyboard support. */
export function Tooltip({ content, side = 'top', children, className = '', ...rest }) {
  const id = React.useId();
  const trigger = React.isValidElement(children)
    ? React.cloneElement(children, { 'aria-describedby': id })
    : children;
  return (
    <span className={['ds-tip', className].filter(Boolean).join(' ')} {...rest}>
      {trigger}
      <span id={id} className={`ds-tip__bubble ds-tip__bubble--${side}`} role="tooltip">{content}</span>
    </span>
  );
}

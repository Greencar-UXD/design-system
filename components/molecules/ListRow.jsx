import React from 'react';

/** ListRow — mobile list item with leading/trailing slots, title & subtitle. */
export function ListRow({ leading = null, title, subtitle, trailing = null, onClick, as, className = '', ...rest }) {
  const Tag = as || (onClick ? 'button' : 'div');
  return (
    <Tag className={['ds-listrow', className].filter(Boolean).join(' ')} onClick={onClick} {...rest}>
      {leading ? <span className="ds-listrow__lead">{leading}</span> : null}
      <div className="ds-listrow__body">
        <div className="ds-listrow__title">{title}</div>
        {subtitle ? <div className="ds-listrow__sub">{subtitle}</div> : null}
      </div>
      {trailing ? <span className="ds-listrow__trail">{trailing}</span> : null}
    </Tag>
  );
}

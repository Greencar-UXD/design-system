import React from 'react';

/** EmptyState — placeholder for no-data/empty views. */
export function EmptyState({ icon, title, description, action, className = '', ...rest }) {
  return (
    <div className={['ds-empty', className].filter(Boolean).join(' ')} {...rest}>
      {icon ? <div className="ds-empty__icon" aria-hidden="true">{icon}</div> : null}
      {title ? <h3 className="ds-empty__title">{title}</h3> : null}
      {description ? <p className="ds-empty__desc">{description}</p> : null}
      {action ? <div className="ds-empty__action">{action}</div> : null}
    </div>
  );
}

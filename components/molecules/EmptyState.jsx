import React from 'react';

/** EmptyState — placeholder for no-data/empty views.
 *  With no `icon`, shows the signature motif: a monochrome field with one cobalt point. */
export function EmptyState({ icon, title, description, action, className = '', ...rest }) {
  return (
    <div className={['ds-empty', className].filter(Boolean).join(' ')} {...rest}>
      {icon
        ? <div className="ds-empty__icon" aria-hidden="true">{icon}</div>
        : (
          <div className="ds-empty__sig" aria-hidden="true">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className={i === 4 ? 'is-point' : undefined}></span>
            ))}
          </div>
        )}
      {title ? <h3 className="ds-empty__title">{title}</h3> : null}
      {description ? <p className="ds-empty__desc">{description}</p> : null}
      {action ? <div className="ds-empty__action">{action}</div> : null}
    </div>
  );
}

import React from 'react';

const ICONS = {
  info:    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>,
  success: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.8 10A10 10 0 1 1 17 3.3"/><path d="m9 11 3 3L22 4"/></svg>,
  warning: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.7 18-9-16a2 2 0 0 0-3.4 0l-9 16A2 2 0 0 0 3 21h18a2 2 0 0 0 1.7-3Z"/><path d="M12 9v4M12 17h.01"/></svg>,
  danger:  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/></svg>,
};

/** Alert — inline status banner with icon, title, description, optional dismiss. */
export function Alert({ variant = 'info', title, icon, onClose, className = '', children, ...rest }) {
  return (
    <div className={['ds-alert', `ds-alert--${variant}`, className].filter(Boolean).join(' ')} role="status" {...rest}>
      <span className="ds-alert__icon" aria-hidden="true">{icon || ICONS[variant]}</span>
      <div className="ds-alert__body">
        {title ? <p className="ds-alert__title">{title}</p> : null}
        {children ? <p className="ds-alert__desc">{children}</p> : null}
      </div>
      {onClose ? (
        <button className="ds-alert__close" aria-label="닫기" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      ) : null}
    </div>
  );
}

export const _alertIcons = ICONS;

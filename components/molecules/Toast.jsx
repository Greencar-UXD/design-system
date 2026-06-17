import React from 'react';
import { _alertIcons } from './Alert.jsx';

/** Toast — floating notification card (presentational). Manage show/dismiss timing yourself. */
export function Toast({ variant = 'info', title, icon, onClose, className = '', children, ...rest }) {
  return (
    <div className={['ds-toast', `ds-toast--${variant}`, className].filter(Boolean).join(' ')} role="status" {...rest}>
      <span className="ds-toast__icon" aria-hidden="true">{icon || _alertIcons[variant]}</span>
      <div className="ds-toast__body">
        {title ? <p className="ds-toast__title">{title}</p> : null}
        {children ? <p className="ds-toast__desc">{children}</p> : null}
      </div>
      {onClose ? (
        <button className="ds-alert__close" aria-label="닫기" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      ) : null}
    </div>
  );
}

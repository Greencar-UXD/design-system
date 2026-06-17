import * as React from 'react';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "info" */
  variant?: 'info' | 'success' | 'warning' | 'danger';
  title?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
  children?: React.ReactNode;
}

/** Floating notification card (presentational) — you control mount/dismiss timing & positioning. */
export function Toast(props: ToastProps): JSX.Element;

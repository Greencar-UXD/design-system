import * as React from 'react';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "info" */
  variant?: 'info' | 'success' | 'warning' | 'danger';
  /** Bold title line. */
  title?: string;
  /** Override the default variant icon. */
  icon?: React.ReactNode;
  /** Show a dismiss button that calls this. */
  onClose?: () => void;
  /** Description body. */
  children?: React.ReactNode;
}

/** Inline status banner with a variant icon, title, and optional dismiss. */
export function Alert(props: AlertProps): JSX.Element;

import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost' | 'danger';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Leading icon node (e.g. a Lucide <svg>). */
  icon?: React.ReactNode;
  /** Trailing icon node. */
  iconRight?: React.ReactNode;
  /** Stretch to container width. @default false */
  fullWidth?: boolean;
  children?: React.ReactNode;
}

/**
 * Primary action control. Ink-forward `primary`, `cobalt` accent, plus outline/ghost/danger.
 */
export function Button(props: ButtonProps): JSX.Element;

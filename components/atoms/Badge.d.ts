import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "neutral" */
  variant?: 'neutral' | 'accent' | 'success' | 'warning' | 'danger' | 'outline' | 'solid';
  /** Show a leading status dot. @default false */
  dot?: boolean;
  children?: React.ReactNode;
}

/** Small pill for status and labels. */
export function Badge(props: BadgeProps): JSX.Element;

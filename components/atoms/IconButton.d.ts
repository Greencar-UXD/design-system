import * as React from 'react';

export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Icon node (required). */
  icon: React.ReactNode;
  /** Accessible label — sets aria-label + title. */
  label: string;
  /** @default "ghost" */
  variant?: 'ghost' | 'outline' | 'solid';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
}

/** Square, icon-only button. Always pass `label` for accessibility. */
export function IconButton(props: IconButtonProps): JSX.Element;

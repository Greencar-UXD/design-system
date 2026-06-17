import * as React from 'react';

export interface TooltipProps {
  /** Tooltip text/content. */
  content: React.ReactNode;
  /** @default "top" */
  side?: 'top' | 'bottom' | 'left' | 'right';
  /** The trigger element. */
  children: React.ReactNode;
  className?: string;
}

/** Hover/focus tooltip on a dark surface. Wrap a focusable element for keyboard access. */
export function Tooltip(props: TooltipProps): JSX.Element;

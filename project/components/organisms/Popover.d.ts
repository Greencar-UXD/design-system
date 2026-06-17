import * as React from 'react';

export interface PopoverProps {
  /** Clickable trigger element. */
  trigger: React.ReactNode;
  /** Panel content (forms, rich content, actions). */
  children: React.ReactNode;
  /** Align panel to trigger edge. @default "left" */
  align?: 'left' | 'right';
  className?: string;
}

/** Click-triggered floating panel. Use for rich content; for a simple action list use Menu. */
export function Popover(props: PopoverProps): JSX.Element;

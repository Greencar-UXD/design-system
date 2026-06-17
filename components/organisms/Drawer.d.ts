import * as React from 'react';

export interface DrawerProps {
  open: boolean;
  onClose?: () => void;
  /** Edge to slide from. @default "right" */
  side?: 'left' | 'right';
  title?: string;
  /** Footer node (actions). */
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

/** Side panel / sheet that slides in over a backdrop. Closes on backdrop click & Esc. */
export function Drawer(props: DrawerProps): JSX.Element | null;

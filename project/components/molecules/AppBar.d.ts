import * as React from 'react';

export interface AppBarProps extends React.HTMLAttributes<HTMLElement> {
  title?: React.ReactNode;
  /** Leading slot (back button, menu). */
  left?: React.ReactNode;
  /** Trailing slot (actions). */
  right?: React.ReactNode;
  /** Title alignment. @default "center" */
  align?: 'center' | 'left';
}

/** Mobile top app bar (56px) with leading/trailing slots. */
export function AppBar(props: AppBarProps): JSX.Element;

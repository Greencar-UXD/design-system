import * as React from 'react';

export interface DividerProps extends React.HTMLAttributes<HTMLElement> {
  /** @default "horizontal" */
  orientation?: 'horizontal' | 'vertical';
  /** Centered label (renders an "OR"-style divider). */
  label?: React.ReactNode;
}

/** Hairline separator; horizontal, vertical, or with a centered label. */
export function Divider(props: DividerProps): JSX.Element;

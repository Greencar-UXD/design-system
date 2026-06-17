import * as React from 'react';

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Accessible label. @default "로딩 중" */
  label?: string;
}

/** Circular loading spinner (cobalt arc). */
export function Spinner(props: SpinnerProps): JSX.Element;

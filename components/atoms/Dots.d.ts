import * as React from 'react';

export interface DotsProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Accessible label. @default "로딩 중" */
  label?: string;
}

/** Signature inline loading indicator — three marks, the cobalt point landing last. */
export function Dots(props: DotsProps): JSX.Element;

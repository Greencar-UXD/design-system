import * as React from 'react';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Fill percent 0–100. @default 0 */
  value?: number;
  /** Looping indeterminate animation. @default false */
  indeterminate?: boolean;
}

/** Linear progress bar (cobalt fill). Determinate via `value`, or `indeterminate`. */
export function Progress(props: ProgressProps): JSX.Element;

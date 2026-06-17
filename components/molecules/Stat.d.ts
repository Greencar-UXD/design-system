import * as React from 'react';

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Metric label (uppercase eyebrow). */
  label?: React.ReactNode;
  /** Big value (string/number). */
  value: React.ReactNode;
  /** Trend delta text, e.g. "+12%". */
  delta?: React.ReactNode;
  /** Colors + arrow for the delta. */
  trend?: 'up' | 'down';
}

/** KPI / metric display: label, large tabular value, optional trend delta. */
export function Stat(props: StatProps): JSX.Element;

import * as React from 'react';

export interface BarDatum {
  label: React.ReactNode;
  value: number;
}

export interface BarChartProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'data'> {
  data: BarDatum[];
  /** Plot height in px. @default 160 */
  height?: number;
  /** Index of the bar to paint in the brand accent. */
  highlightIndex?: number;
  valueFormat?: (value: number) => React.ReactNode;
  label?: string;
}

/** Vertical bar chart with direct value labels (meaning never relies on color alone). */
export function BarChart(props: BarChartProps): JSX.Element;

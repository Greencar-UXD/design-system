import * as React from 'react';

export interface DonutDatum {
  label: React.ReactNode;
  value: number;
  /** Override the segment color (CSS color). Defaults to the chart palette. */
  color?: string;
}

export interface DonutChartProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'data'> {
  data: DonutDatum[];
  size?: number;
  thickness?: number;
  /** Content for the hole (e.g. the total). */
  center?: React.ReactNode;
  valueFormat?: (value: number) => React.ReactNode;
  label?: string;
}

/** Donut chart with a label + value legend so meaning never relies on color alone. */
export function DonutChart(props: DonutChartProps): JSX.Element;

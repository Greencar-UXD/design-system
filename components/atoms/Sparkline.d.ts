import * as React from 'react';

export interface SparklineProps extends Omit<React.SVGAttributes<SVGSVGElement>, 'data'> {
  /** The series to plot (≥2 points). */
  data: number[];
  width?: number;
  height?: number;
  strokeWidth?: number;
  /** Fill the area under the line. @default true */
  area?: boolean;
  /** Accessible label; auto-summarized from the trend if omitted. */
  label?: string;
}

/** Compact inline trend line; the last point is the signature accent dot. */
export function Sparkline(props: SparklineProps): JSX.Element | null;

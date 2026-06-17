import * as React from 'react';

export interface TableColumn {
  /** Object key on each row. */
  key: string;
  /** Header label. */
  label: React.ReactNode;
  /** Text alignment. @default "left" */
  align?: 'left' | 'center' | 'right';
  /** Optional CSS width (e.g. "120px", "30%"). */
  width?: string;
  /** Custom cell renderer: (value, row) => node. */
  render?: (value: any, row: any) => React.ReactNode;
}

export interface TableProps {
  columns: TableColumn[];
  rows: any[];
  /** Row object key to use as React key. */
  rowKey?: string;
  className?: string;
}

/** Styled data table with sticky-feel header, hover rows, and rounded frame. */
export function Table(props: TableProps): JSX.Element;

import * as React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** When provided, renders a × button that calls this on click/Enter. */
  onRemove?: (e: React.SyntheticEvent) => void;
  children?: React.ReactNode;
}

/** Removable label/chip — for filters, selected items, keywords. */
export function Tag(props: TagProps): JSX.Element;

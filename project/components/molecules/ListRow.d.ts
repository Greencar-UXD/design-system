import * as React from 'react';

export interface ListRowProps extends React.HTMLAttributes<HTMLElement> {
  /** Leading slot — avatar, icon, thumbnail. */
  leading?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Trailing slot — chevron, value, switch. */
  trailing?: React.ReactNode;
  onClick?: () => void;
  /** Override the element tag (defaults to button when onClick is set, else div). */
  as?: any;
}

/** Mobile list item: leading slot, title + subtitle, trailing slot. Tappable when onClick is set. */
export function ListRow(props: ListRowProps): JSX.Element;

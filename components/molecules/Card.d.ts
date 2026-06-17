import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Element/tag to render. @default "div" */
  as?: any;
  /** Hover lift + pointer cursor. @default false */
  interactive?: boolean;
  /** Remove the shadow. @default false */
  flat?: boolean;
  /** Apply default internal padding. @default true */
  padded?: boolean;
  children?: React.ReactNode;
}

/**
 * Surface container with the standard border, radius, and soft shadow.
 */
export function Card(props: CardProps): JSX.Element;

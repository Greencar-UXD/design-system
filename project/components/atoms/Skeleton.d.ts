import * as React from 'react';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "block" */
  variant?: 'block' | 'text' | 'circle';
  /** CSS width (number = px). */
  width?: number | string;
  /** CSS height (number = px). */
  height?: number | string;
}

/** Shimmering loading placeholder. Compose several to mock a card/list while data loads. */
export function Skeleton(props: SkeletonProps): JSX.Element;

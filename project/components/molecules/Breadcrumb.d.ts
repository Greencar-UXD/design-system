import * as React from 'react';

export interface CrumbItem {
  label: React.ReactNode;
  onClick?: () => void;
}

export interface BreadcrumbProps {
  /** Path items in order; the last is rendered as the current page. */
  items: CrumbItem[];
  className?: string;
}

/** Breadcrumb trail with chevron separators. */
export function Breadcrumb(props: BreadcrumbProps): JSX.Element;

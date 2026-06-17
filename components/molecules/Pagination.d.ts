import * as React from 'react';

export interface PaginationProps {
  /** Current page (1-based). @default 1 */
  page?: number;
  /** Total page count. @default 1 */
  total?: number;
  /** Called with the requested page. */
  onChange?: (page: number) => void;
  className?: string;
}

/** Page navigation with prev/next and ellipsis collapsing. Controlled via page/onChange. */
export function Pagination(props: PaginationProps): JSX.Element;

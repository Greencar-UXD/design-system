import * as React from 'react';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Leading icon node (shown in a soft tile). */
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Action node — typically a Button. */
  action?: React.ReactNode;
}

/** Centered empty/no-data state with icon, copy, and an optional action. */
export function EmptyState(props: EmptyStateProps): JSX.Element;

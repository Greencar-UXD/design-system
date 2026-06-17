import * as React from 'react';

export interface StepItem {
  label: React.ReactNode;
}

export interface StepperProps {
  /** Steps as strings or {label}. */
  steps: Array<string | StepItem>;
  /** Index of the current (active) step; earlier steps render as done. @default 0 */
  current?: number;
  className?: string;
}

/** Horizontal step progress indicator — completed steps show a check, current is cobalt. */
export function Stepper(props: StepperProps): JSX.Element;

import * as React from 'react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Text label beside the box. */
  label?: React.ReactNode;
}

/** Labeled checkbox with a cobalt checked state. */
export function Checkbox(props: CheckboxProps): JSX.Element;

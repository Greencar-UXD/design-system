import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label rendered above the input. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — also applies the error style. */
  error?: string;
  /** Leading icon node. */
  icon?: React.ReactNode;
  /** Show a required asterisk. */
  required?: boolean;
}

/** Text field with optional label, leading icon, hint, and error state. */
export function Input(props: InputProps): JSX.Element;

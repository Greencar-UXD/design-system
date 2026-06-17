import * as React from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  /** Options as strings or {value,label}. Omit to pass <option> children. */
  options?: Array<string | SelectOption>;
  /** Disabled first option shown until a value is chosen. */
  placeholder?: string;
}

/** Native select styled with a custom chevron and the field label/hint/error contract. */
export function Select(props: SelectProps): JSX.Element;

import * as React from 'react';

export interface ComboboxOption {
  value: string;
  label: React.ReactNode;
}

export interface ComboboxProps {
  /** The selectable options. */
  options: ComboboxOption[];
  /** Selected value (controlled). */
  value?: string;
  /** Called with the chosen option's value. */
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: React.ReactNode;
  /** Shown when no option matches the query. @default "결과 없음" */
  emptyText?: React.ReactNode;
  className?: string;
  /** Id for the input (label association); auto-generated if omitted. */
  id?: string;
}

/** Searchable single-select (WAI-ARIA editable combobox + listbox). Controlled. */
export function Combobox(props: ComboboxProps): JSX.Element;

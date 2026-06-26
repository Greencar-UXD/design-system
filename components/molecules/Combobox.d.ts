import * as React from 'react';

export interface ComboboxOption {
  value: string;
  label: React.ReactNode;
}

export interface ComboboxProps {
  /** The selectable options. */
  options: ComboboxOption[];
  /** Selected value(s), controlled. `string` for single, `string[]` for `multiple`. */
  value?: string | string[];
  /** Called with the new value (string for single, string[] for multiple). */
  onChange?: (value: string | string[]) => void;
  placeholder?: string;
  label?: React.ReactNode;
  /** Shown when no option matches the query. @default "결과 없음" */
  emptyText?: React.ReactNode;
  /** Multi-select mode: selections render as removable chips and the list stays open. */
  multiple?: boolean;
  /** Show a busy row instead of options (the caller fetches `options`). */
  loading?: boolean;
  /** Text beside the busy indicator. @default "불러오는 중…" */
  loadingText?: React.ReactNode;
  className?: string;
  /** Id for the input (label association); auto-generated if omitted. */
  id?: string;
}

/** Searchable single-select (WAI-ARIA editable combobox + listbox). Controlled. */
export function Combobox(props: ComboboxProps): JSX.Element;

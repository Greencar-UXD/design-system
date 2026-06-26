import * as React from 'react';

export interface CommandItem {
  id?: string;
  label: React.ReactNode;
  /** Trailing hint, e.g. a shortcut like "⌘N". */
  hint?: React.ReactNode;
  icon?: React.ReactNode;
  onSelect?: () => void;
}

export interface CommandProps {
  /** Whether the palette is open (controlled). */
  open: boolean;
  onClose?: () => void;
  items: CommandItem[];
  placeholder?: string;
  /** Shown when no item matches. @default "결과 없음" */
  emptyText?: React.ReactNode;
}

/** ⌘K command palette (modal): search + keyboard nav + focus trap. Renders null when closed. */
export function Command(props: CommandProps): JSX.Element | null;

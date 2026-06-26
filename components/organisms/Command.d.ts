import * as React from 'react';

export interface CommandItem {
  id?: string;
  label: React.ReactNode;
  /** Trailing hint, e.g. a shortcut like "⌘N". */
  hint?: React.ReactNode;
  icon?: React.ReactNode;
  /** Items sharing a `group` render under a heading. */
  group?: string;
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
  /** Show a busy row instead of items (the caller fetches `items`). */
  loading?: boolean;
  /** Text beside the busy indicator. @default "불러오는 중…" */
  loadingText?: React.ReactNode;
}

/** ⌘K command palette (modal): search + keyboard nav + focus trap. Renders null when closed. */
export function Command(props: CommandProps): JSX.Element | null;

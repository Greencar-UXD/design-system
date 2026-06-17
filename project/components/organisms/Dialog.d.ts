import * as React from 'react';

export interface DialogProps {
  /** Whether the dialog is shown. */
  open: boolean;
  /** Called on backdrop click, Esc, or close button. */
  onClose?: () => void;
  /** Heading text. */
  title?: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Footer node — typically action Buttons. */
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

/** Modal dialog with backdrop, centered panel, Esc + backdrop-click to close. */
export function Dialog(props: DialogProps): JSX.Element | null;

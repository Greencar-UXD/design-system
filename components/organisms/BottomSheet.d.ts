import * as React from 'react';

export interface BottomSheetProps {
  open: boolean;
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
}

/** Mobile bottom sheet modal with a drag grip. Slides up over a backdrop; Esc/backdrop closes. */
export function BottomSheet(props: BottomSheetProps): JSX.Element | null;

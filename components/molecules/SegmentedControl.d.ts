import * as React from 'react';

export interface SegmentOption {
  value: string;
  label: React.ReactNode;
}

export interface SegmentedControlProps {
  /** Options as strings or {value,label}. */
  options: Array<string | SegmentOption>;
  value: string;
  onChange?: (value: string) => void;
  className?: string;
}

/** Compact single-select toggle (2–4 short options) in a sunken pill group. */
export function SegmentedControl(props: SegmentedControlProps): JSX.Element;

import * as React from 'react';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}

/** Labeled radio button. Group by sharing a `name`. */
export function Radio(props: RadioProps): JSX.Element;

import * as React from 'react';

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'onChange'> {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  /** Called with the numeric value. */
  onChange?: (value: number) => void;
  label?: string;
  /** Show the current value on the right. @default false */
  showValue?: boolean;
}

/** Range slider with a cobalt fill track. */
export function Slider(props: SliderProps): JSX.Element;

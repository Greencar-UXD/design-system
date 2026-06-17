import * as React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
}

/** Multi-line text field with label, hint, and error state. */
export function Textarea(props: TextareaProps): JSX.Element;

import * as React from 'react';

export interface AccordionItem {
  title: React.ReactNode;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  /** Allow multiple panels open at once. @default false */
  multiple?: boolean;
  /** Indices open initially. */
  defaultOpen?: number[];
  className?: string;
}

/** Collapsible sections with chevron indicators. */
export function Accordion(props: AccordionProps): JSX.Element;

import * as React from 'react';

export interface MenuItem {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  danger?: boolean;
  separator?: boolean;
}

export interface MenuProps {
  /** The clickable trigger (e.g. a Button or IconButton). */
  trigger: React.ReactNode;
  /** Menu items; use `{ separator: true }` for a divider. */
  items: MenuItem[];
  /** Which edge to align the list to. @default "left" */
  align?: 'left' | 'right';
  className?: string;
}

/** Dropdown menu — toggles on trigger click, closes on outside click / Esc. */
export function Menu(props: MenuProps): JSX.Element;

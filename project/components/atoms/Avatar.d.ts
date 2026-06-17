import * as React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. Falls back to initials when omitted. */
  src?: string | null;
  /** Display name — used for initials and tooltip. */
  name?: string;
  /** @default "md" */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Rounded-square instead of circle. @default false */
  square?: boolean;
  /** Show an online status dot. @default false */
  status?: boolean;
}

/** User avatar with image, initials fallback, and optional status dot. */
export function Avatar(props: AvatarProps): JSX.Element;

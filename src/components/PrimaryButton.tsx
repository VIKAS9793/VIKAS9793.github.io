import type { ReactNode } from 'react';
import { ArrowDownRight, ArrowUpRight } from './Icons';

interface Props {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'light';
  icon?: 'down' | 'up';
  external?: boolean;
}

/** The one primary action in a view: a single verb, the accent colour and a small directional icon. */
export default function PrimaryButton({ href, children, variant = 'primary', icon = 'down', external = false }: Props) {
  const Icon = icon === 'down' ? ArrowDownRight : ArrowUpRight;
  return (
    <a
      className={`button${variant === 'light' ? ' button--light' : ''}`}
      href={href}
      {...(external ? { rel: 'noopener noreferrer' } : {})}
    >
      <span>{children}</span>
      <Icon />
    </a>
  );
}

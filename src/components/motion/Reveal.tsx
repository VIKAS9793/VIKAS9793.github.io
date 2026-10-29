import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from 'react';
import { useEditorial } from './editorial';

type Direction = 'up' | 'left' | 'right';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  as?: ElementType;
}

/**
 * One-time entrance for a block of content.
 *
 * The prerendered HTML, a page without JavaScript and a crawler all see the content fully visible.
 * Only after the page is running is a block that is still below the fold held back, then released
 * when it arrives. Blocks already on screen are never hidden, so nothing flashes. The movement is CSS
 * (transform and opacity), so it costs no animation library.
 */
export default function Reveal({ children, className = '', delay = 0, direction = 'up', as: Tag = 'div' }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<'idle' | 'armed' | 'in'>('idle');
  const { calm } = useEditorial();

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (calm) {
      setState('in');
      return;
    }
    let armed = false;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState('in');
            observer.disconnect();
          } else if (!armed) {
            armed = true;
            setState('armed');
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [calm]);

  const style = delay ? ({ '--reveal-delay': `${delay}s` } as CSSProperties) : undefined;

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      data-dir={direction === 'up' ? undefined : direction}
      data-reveal={state === 'idle' ? undefined : state}
      style={style}
    >
      {children}
    </Tag>
  );
}

import { useMemo, useRef, type ReactNode } from 'react';
import { m, useScroll, useTransform } from 'motion/react';
import { useEditorial } from './editorial';

interface Props {
  index: number;
  children: ReactNode;
  className?: string;
}

/**
 * A list item with its own scroll depth. Neighbouring cards drift in opposite directions so the grid
 * reads as composed, not synchronised. Only transform is animated; the card's size never changes.
 * Travel is shortened on small screens and removed in calm mode.
 */
export default function ParallaxCard({ index, children, className }: Props) {
  const ref = useRef<HTMLLIElement>(null);
  const { calm, compact } = useEditorial();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  // Side by side, neighbours drift in opposite directions. In a single column they drift together
  // (and only a little), so a card can never ride up over the one above it.
  const alternate = index % 2 === 1;
  const opposite = compact ? false : alternate;
  const travel = compact ? 8 : 28;
  const tilt = compact ? 0.5 : 1;
  const yRange = useMemo(() => (calm ? [0, 0] : opposite ? [-travel, travel] : [travel + 4, -travel - 4]), [calm, opposite, travel]);
  const rotateRange = useMemo(() => (calm ? [0, 0] : alternate ? [tilt, -tilt] : [-tilt, tilt]), [calm, alternate, tilt]);

  const y = useTransform(scrollYProgress, [0, 1], yRange);
  const rotate = useTransform(scrollYProgress, [0, 1], rotateRange);

  return (
    <m.li ref={ref} className={className} style={{ y, rotate }}>
      {children}
    </m.li>
  );
}

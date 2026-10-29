import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { LazyMotion, MotionConfig, useScroll, useSpring } from 'motion/react';
import { EditorialContext, QUIET_KEY, type Editorial } from './editorial';

const loadFeatures = () => import('./features').then((module) => module.default);

/** Reads a media query after mount, so the first client render matches the prerendered HTML. */
function useMedia(query: string): boolean {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    if (typeof matchMedia === 'undefined') return;
    const list = matchMedia(query);
    const update = () => setMatches(list.matches);
    update();
    list.addEventListener('change', update);
    return () => list.removeEventListener('change', update);
  }, [query]);
  return matches;
}

export default function MotionProvider({ children }: { children: ReactNode }) {
  const [quiet, setQuietState] = useState(false);
  const reduced = useMedia('(prefers-reduced-motion: reduce)');
  const compact = useMedia('(max-width: 719px)');
  const calm = quiet || reduced;

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.3 });

  useEffect(() => {
    try {
      if (localStorage.getItem(QUIET_KEY) === '1') setQuietState(true);
    } catch {
      /* storage can be blocked; the toggle still works for this visit */
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.calm = String(calm);
  }, [calm]);

  const value = useMemo<Editorial>(
    () => ({
      calm,
      quiet,
      compact,
      scrollY,
      progress,
      setQuiet: (next: boolean) => {
        setQuietState(next);
        try {
          localStorage.setItem(QUIET_KEY, next ? '1' : '0');
        } catch {
          /* see above */
        }
      },
    }),
    [calm, quiet, compact, scrollY, progress],
  );

  return (
    <EditorialContext.Provider value={value}>
      <MotionConfig reducedMotion={calm ? 'always' : 'user'}>
        <LazyMotion features={loadFeatures} strict>
          {children}
        </LazyMotion>
      </MotionConfig>
    </EditorialContext.Provider>
  );
}

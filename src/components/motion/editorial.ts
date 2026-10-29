import { createContext, useContext } from 'react';
import type { MotionValue } from 'motion/react';

export interface Editorial {
  /** True when movement should be minimal: the visitor chose Quiet, or the system asks for reduced motion. */
  calm: boolean;
  quiet: boolean;
  setQuiet: (value: boolean) => void;
  /** True on narrow screens, where parallax travel is shortened. */
  compact: boolean;
  /** Pixels scrolled. */
  scrollY: MotionValue<number>;
  /** 0 to 1 over the whole page, smoothed with a spring. One shared signal for the progress bar and the hero. */
  progress: MotionValue<number>;
}

export const EditorialContext = createContext<Editorial | null>(null);

export function useEditorial(): Editorial {
  const value = useContext(EditorialContext);
  if (!value) throw new Error('useEditorial must be used inside MotionProvider');
  return value;
}


export const QUIET_KEY = 'ns-quiet-motion';

/** Reads the visitor's motion preference right now, before React state has caught up. */
export function isCalmNow(): boolean {
  if (typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches) return true;
  try {
    return localStorage.getItem(QUIET_KEY) === '1';
  } catch {
    return false;
  }
}

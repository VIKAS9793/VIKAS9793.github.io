import { useMemo, useSyncExternalStore } from 'react';

const subscribe = () => () => {};
const visitDay = () => new Date().toISOString().slice(0, 10);
const buildDay = () => __BUILD_DATE__;

/**
 * Today's date for things that change with time. The prerendered page is written on the build day, and the
 * browser first renders with that same day so hydration matches; right after, it switches to the real date,
 * so a visitor a year after the last deploy still reads the right number.
 */
export function useToday(): Date {
  const day = useSyncExternalStore(subscribe, visitDay, buildDay);
  return useMemo(() => new Date(`${day}T00:00:00Z`), [day]);
}

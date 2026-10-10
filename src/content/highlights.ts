import { projects } from './projects';
import type { Highlight } from './site';

/** Counts are derived from the project list so they cannot drift from it. */
const openSource = projects.filter((p) => p.kind === 'Open source').length;
const androidApps = projects.filter((p) => p.kind === 'Android app').length;
const studios = projects.filter((p) => p.kind === 'Studio').length;

export const highlights: readonly Highlight[] = [
  { value: '4.5+', label: 'years in customer-facing finance' },
  { value: String(openSource), label: 'open-source tools on npm' },
  { value: String(androidApps), label: 'Android apps in testing' },
  { value: String(studios), label: 'game studio, first game in development' },
];

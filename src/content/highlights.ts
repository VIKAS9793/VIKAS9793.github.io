import { projects } from './projects';
import type { Highlight } from './site';
import { tenureCopy, type Tenure } from './tenure';

/** Counts are derived from the project list so they cannot drift from it. */
const openSource = projects.filter((p) => p.kind === 'Open source').length;
const androidApps = projects.filter((p) => p.kind === 'Android app').length;
const studios = projects.filter((p) => p.kind === 'Studio').length;

/** The first figure is worked out from the role dates, so it keeps itself current. */
export const highlightsFor = (tenure: Tenure): readonly Highlight[] => [
  { value: tenureCopy.glanceValue(tenure), label: tenureCopy.glanceLabel },
  { value: String(openSource), label: 'open-source tools on npm' },
  { value: String(androidApps), label: 'Android apps in testing' },
  { value: String(studios), label: 'game studio, first game in development' },
];

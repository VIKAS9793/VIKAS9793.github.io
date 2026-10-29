import { experience } from './site';

/**
 * How long the owner has worked in customer-facing finance, worked out from the role dates in the experience
 * list, so the number on the page can never be older than the list it comes from. Dates are read the way a
 * résumé reads them: "Mar 2021 to Jun 2021" is three months, from the first of March to the first of June, so
 * the month someone leaves is not counted as worked. Gaps between roles do not count, and a role marked
 * "present" runs to today.
 */

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const DAY = 86_400_000;
const YEAR = 365.2425 * DAY;

interface Span {
  start: number;
  end: number;
}

const startOfMonth = (month: string, year: string): number => {
  const index = MONTHS.indexOf(month.slice(0, 3).toLowerCase());
  if (index < 0) throw new Error(`Unknown month "${month}" in a role period`);
  return Date.UTC(Number(year), index, 1);
};

/** Reads a period such as "Sep 2021 to Nov 2023" or "Nov 2024 to present". */
export function parsePeriod(period: string, today: Date): Span {
  const match = /^(\w{3,9}) (\d{4}) to (?:(\w{3,9}) (\d{4})|present)$/i.exec(period.trim());
  if (!match) throw new Error(`Cannot read the role period "${period}"`);
  const start = startOfMonth(match[1], match[2]);
  if (!match[3]) return { start, end: today.getTime() };
  const [, , , endMonth, endYear] = match;
  const endIndex = MONTHS.indexOf(endMonth.slice(0, 3).toLowerCase());
  if (endIndex < 0) throw new Error(`Unknown month "${endMonth}" in a role period`);
  return { start, end: Date.UTC(Number(endYear), endIndex, 1) };
}

/** Years worked across all the listed roles, with overlaps counted once. */
export function financeYears(today: Date, periods: readonly string[] = experience.map((role) => role.period)): number {
  const spans = periods.map((period) => parsePeriod(period, today)).sort((a, b) => a.start - b.start);
  let total = 0;
  let cursor = -Infinity;
  for (const span of spans) {
    const from = Math.max(span.start, cursor);
    if (span.end > from) total += span.end - from;
    cursor = Math.max(cursor, span.end);
  }
  return total / YEAR;
}

const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
const inWords = (n: number) => WORDS[n] ?? String(n);

export interface Tenure {
  /** Years worked, rounded down to a tenth: 4.91 becomes 4.9. The page never claims more than the dates support. */
  tenth: number;
  /** For figures: "4.9+". */
  plus: string;
  /** "Nearly" inside the last quarter before a whole year, otherwise "Over". */
  lead: 'Nearly' | 'Over';
  /** The whole number the lead points at, in words: "Nearly five", "Over five". */
  words: string;
}

export function tenureAt(today: Date): Tenure {
  const years = financeYears(today);
  const whole = Math.floor(years);
  const nearly = years - whole >= 0.75;
  const tenth = Math.floor(years * 10) / 10;
  return {
    tenth,
    plus: `${tenth.toFixed(1)}+`,
    lead: nearly ? 'Nearly' : 'Over',
    words: inWords(Math.max(1, nearly ? whole + 1 : whole)),
  };
}

/** The sentences that carry the number. Each one reads correctly for any value of the tenure. */
export const tenureCopy = {
  heroLine: (t: Tenure) => `${t.lead} ${t.words} years in customer-facing finance.`,
  aboutLead: (t: Tenure) =>
    `I work in finance during the day. For ${t.lead.toLowerCase()} ${t.words} years that has meant customer-facing wealth and banking roles, today as a Virtual Relationship Manager at Aditya Birla Capital.`,
  glanceValue: (t: Tenure) => t.plus,
  glanceLabel: 'years in customer-facing finance',
} as const;

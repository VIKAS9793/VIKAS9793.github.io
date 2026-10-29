import { experience } from '../content/site';
import { financeYears, parsePeriod, tenureAt, tenureCopy } from '../content/tenure';

const day = (iso: string) => new Date(`${iso}T00:00:00Z`);

describe('years in customer-facing finance', () => {
  it('reads every role period the site lists', () => {
    for (const role of experience) expect(() => parsePeriod(role.period, day('2026-10-29'))).not.toThrow();
  });

  it('reads dates the way a résumé does and runs a present role to today', () => {
    const span = parsePeriod('Sep 2021 to Nov 2023', day('2026-10-29'));
    expect(new Date(span.start).toISOString().slice(0, 10)).toBe('2021-09-01');
    expect(new Date(span.end).toISOString().slice(0, 10)).toBe('2023-11-01'); // the month of leaving is not counted
    expect(parsePeriod('Nov 2024 to present', day('2026-10-29')).end).toBe(day('2026-10-29').getTime());
  });

  it('adds the roles up, leaves out the gaps and counts overlaps once', () => {
    expect(financeYears(day('2026-10-29'))).toBeCloseTo(4.91, 1);
    expect(financeYears(day('2021-01-01'), ['Jan 2020 to Jan 2021'])).toBeCloseTo(1, 1);
    expect(financeYears(day('2026-01-01'), ['Jan 2020 to Jan 2021', 'Jun 2020 to Jan 2021'])).toBeCloseTo(1, 1);
    expect(financeYears(day('2026-01-01'), ['Jan 2020 to Jan 2021', 'Jan 2022 to Jan 2023'])).toBeCloseTo(2, 1);
  });

  it('matches the figures a reader can check against the résumé', () => {
    // The résumé says "nearly 5 years" and the roles add up to 58 months now: not yet five.
    expect(financeYears(day('2026-10-29'))).toBeLessThan(5);
    expect(financeYears(day('2026-10-29'))).toBeGreaterThan(4.75);
    expect(financeYears(day('2026-06-20'))).toBeCloseTo(4.5, 1); // when the old hand-typed "4.5" was true
  });

  it('says "nearly" before a whole year and "over" after it, and keeps growing with the date', () => {
    const at = (iso: string) => tenureAt(day(iso));
    expect([at('2026-10-29').lead, at('2026-10-29').words, at('2026-10-29').plus]).toEqual(['Nearly', 'five', '4.9+']);
    expect(at('2026-06-20')).toMatchObject({ lead: 'Over', words: 'four' });
    expect(at('2027-02-01')).toMatchObject({ lead: 'Over', words: 'five' });
    expect(at('2027-10-01')).toMatchObject({ lead: 'Nearly', words: 'six' });
    expect(at('2030-01-01').words).toMatch(/^(eight|nine)$/);
  });

  it('words the number for sentences and figures', () => {
    const t = tenureAt(day('2026-10-29'));
    expect(tenureCopy.heroLine(t)).toBe('Nearly five years in customer-facing finance.');
    expect(tenureCopy.aboutLead(t)).toContain('For nearly five years');
    expect(tenureCopy.glanceValue(t)).toBe('4.9+');
    expect(tenureAt(day('2040-01-01')).words).toMatch(/^(thirteen|\d+)$/);
  });

  it('rejects a period it cannot read instead of guessing', () => {
    expect(() => parsePeriod('sometime in 2022', day('2026-10-29'))).toThrow();
  });
});

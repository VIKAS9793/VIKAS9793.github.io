import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const css = readFileSync(resolve(__dirname, '../styles/tokens.css'), 'utf8');

function token(name: string): string {
  const match = css.match(new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{6})`));
  if (!match) throw new Error(`token ${name} not found`);
  return match[1];
}

function luminance(hex: string): number {
  const channels = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const [r, g, b] = channels.map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function ratio(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

const surfaces = ['p-warm-cream', 'p-cream-surface', 'p-white', 'p-sand'];

describe('TONAL 2D colour pairs meet WCAG AA (4.5:1) for text', () => {
  it.each(surfaces)('primary text on %s', (s) => {
    expect(ratio(token('p-charcoal'), token(s))).toBeGreaterThanOrEqual(4.5);
  });

  it.each(surfaces)('secondary text on %s', (s) => {
    expect(ratio(token('p-secondary-charcoal'), token(s))).toBeGreaterThanOrEqual(4.5);
  });

  it.each(surfaces)('muted text on %s', (s) => {
    expect(ratio(token('p-muted-charcoal'), token(s))).toBeGreaterThanOrEqual(4.5);
  });

  it.each(['p-warm-cream', 'p-cream-surface', 'p-white'])('accent ink on %s', (s) => {
    expect(ratio(token('p-terracotta-ink'), token(s))).toBeGreaterThanOrEqual(4.5);
  });

  it('white on forest green (primary button, inverse badge)', () => {
    expect(ratio(token('p-white'), token('p-forest-green'))).toBeGreaterThanOrEqual(4.5);
    expect(ratio(token('p-white'), token('p-deep-forest'))).toBeGreaterThanOrEqual(4.5);
  });

  it('charcoal on terracotta (accent badge)', () => {
    expect(ratio(token('p-charcoal'), token('p-terracotta'))).toBeGreaterThanOrEqual(4.5);
  });

  it('focus ring (forest green) is a 3:1 non-text contrast against the page', () => {
    expect(ratio(token('p-forest-green'), token('p-warm-cream'))).toBeGreaterThanOrEqual(3);
  });

  it('secondary text stays AA when it sits directly on a grid dot (worst case)', () => {
    const opacity = Number(css.match(/--grid-opacity:\s*([0-9.]+)/)![1]);
    const mix = (fg: string, bg: string) => {
      const c = (hex: string, i: number) => parseInt(hex.slice(i, i + 2), 16);
      const ch = (i: number) => Math.round(c(fg, i) * opacity + c(bg, i) * (1 - opacity));
      return `#${[1, 3, 5].map((i) => ch(i).toString(16).padStart(2, '0')).join('')}`;
    };
    for (const surface of ['p-warm-cream', 'p-cream-surface']) {
      const dot = mix(token('p-sage-gray'), token(surface));
      expect(ratio(token('p-secondary-charcoal'), dot)).toBeGreaterThanOrEqual(4.5);
    }
  });

  it('control boundaries meet the 3:1 non-text contrast', () => {
    expect(ratio(token('p-strong-border'), token('p-warm-cream'))).toBeGreaterThanOrEqual(3);
    expect(ratio(token('p-secondary-charcoal'), token('p-white'))).toBeGreaterThanOrEqual(3);
  });
});

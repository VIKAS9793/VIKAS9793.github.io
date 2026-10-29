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

const lightGrounds = ['cream', 'paper', 'sand'];

describe('Motion Editorial colour pairs meet WCAG AA', () => {
  it.each(lightGrounds)('ink text on %s (4.5:1)', (ground) => {
    expect(ratio(token('ink'), token(ground))).toBeGreaterThanOrEqual(4.5);
  });

  it.each(lightGrounds)('secondary text (muted-ink) on %s (4.5:1)', (ground) => {
    expect(ratio(token('muted-ink'), token(ground))).toBeGreaterThanOrEqual(4.5);
  });

  it.each(lightGrounds)('small accent text (accent-ink) on %s (4.5:1)', (ground) => {
    expect(ratio(token('accent-ink'), token(ground))).toBeGreaterThanOrEqual(4.5);
  });

  it('brown tag text on the tag ground (sand over paper) (4.5:1)', () => {
    expect(ratio(token('brown'), token('sand'))).toBeGreaterThanOrEqual(4.5);
  });

  it('paper text on the accent button and the closing chapter (4.5:1)', () => {
    expect(ratio(token('paper'), token('accent-deep'))).toBeGreaterThanOrEqual(4.5);
  });

  it('accent-deep text on the paper button face (light button, 4.5:1)', () => {
    expect(ratio(token('accent-deep'), token('paper'))).toBeGreaterThanOrEqual(4.5);
  });

  it('paper and sand text on the espresso chapter (4.5:1)', () => {
    expect(ratio(token('paper'), token('espresso'))).toBeGreaterThanOrEqual(4.5);
    expect(ratio(token('sand'), token('espresso'))).toBeGreaterThanOrEqual(4.5);
  });

  it('muted-dark and accent-warm text on the espresso chapter (4.5:1)', () => {
    expect(ratio(token('muted-dark'), token('espresso'))).toBeGreaterThanOrEqual(4.5);
    expect(ratio(token('accent-warm'), token('espresso'))).toBeGreaterThanOrEqual(4.5);
  });

  it('the bright accent is for large display type only (3:1) on the grounds it sits on', () => {
    for (const ground of ['cream', 'paper', 'sand']) {
      expect(ratio(token('accent'), token(ground))).toBeGreaterThanOrEqual(3);
    }
    expect(ratio(token('accent'), token('espresso'))).toBeGreaterThanOrEqual(3);
  });

  it('records why the published muted colour is not used for text', () => {
    for (const ground of lightGrounds) {
      expect(ratio(token('muted'), token(ground))).toBeLessThan(4.5);
    }
  });

  it('focus ring (accent-deep) is a 3:1 non-text contrast against the page', () => {
    for (const ground of lightGrounds) {
      expect(ratio(token('accent-deep'), token(ground))).toBeGreaterThanOrEqual(3);
    }
  });
});

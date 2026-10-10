// Measures real rendered contrast, element by element, in a browser.
// Usage: npm run build && npm run preview &  then  CHROME_PATH=/path/to/chrome npm run audit:contrast
// Checks text (4.5:1, or 3:1 for large text), text over the decorative dot grid at its worst case,
// and the boundaries of interactive controls and frames (3:1).
import { chromium } from 'playwright-core';

const url = process.env.AUDIT_URL ?? 'http://localhost:4173/';
const executablePath = process.env.CHROME_PATH;
const viewports = [
  [1440, 900],
  [375, 812],
];

const browser = await chromium.launch({ executablePath, args: ['--no-sandbox'] });
let failures = 0;

for (const [width, height] of viewports) {
  const page = await (await browser.newContext({ viewport: { width, height }, reducedMotion: 'reduce' })).newPage();
  await page.goto(url, { waitUntil: 'networkidle' });
  // Open every expandable card so its hidden text is measured too.
  for (const toggle of await page.locator('.project__toggle').all()) await toggle.click();
  await page.waitForTimeout(500);

  const report = await page.evaluate(() => {
    const parse = (c) => {
      const m = c.match(/rgba?\(([^)]+)\)/);
      if (!m) return null;
      const [r, g, b, a = 1] = m[1].split(/[ ,/]+/).filter(Boolean).map(Number);
      return { r, g, b, a };
    };
    const over = (top, bottom) => ({
      r: top.r * top.a + bottom.r * (1 - top.a),
      g: top.g * top.a + bottom.g * (1 - top.a),
      b: top.b * top.a + bottom.b * (1 - top.a),
      a: 1,
    });
    const lum = ({ r, g, b }) => {
      const f = (v) => ((v /= 255) <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
      return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
    };
    const ratio = (a, b) => {
      const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
      return (hi + 0.05) / (lo + 0.05);
    };
    // True when the dot grid can sit directly behind this element: no opaque layer of its own in between.
    const dotsShowThrough = (el) => {
      for (let n = el; n; n = n.parentElement) {
        if (n.classList.contains('grid-bg')) return true;
        const bg = parse(getComputedStyle(n).backgroundColor);
        if (bg && bg.a > 0.99) return false;
      }
      return false;
    };
    const backdrop = (el) => {
      const layers = [];
      for (let n = el; n; n = n.parentElement) {
        const cs = getComputedStyle(n);
        if (cs.backgroundImage !== 'none' && !cs.backgroundImage.startsWith('radial')) layers.push('image');
        const bg = parse(cs.backgroundColor);
        if (bg && bg.a > 0) {
          layers.push(bg);
          if (bg.a === 1) break;
        }
      }
      let base = { r: 255, g: 255, b: 255, a: 1 };
      for (const layer of layers.reverse()) if (layer !== 'image') base = over(layer, base);
      return { base, hasImage: layers.includes('image') };
    };
    const dot = parse(getComputedStyle(document.documentElement).getPropertyValue('--color-grid').trim() ? 'rgba(183,185,170,1)' : 'rgba(183,185,170,1)');
    const gridOpacity = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--grid-opacity')) || 0.55;

    const out = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const seen = new Set();
    for (let t = walker.nextNode(); t; t = walker.nextNode()) {
      const el = t.parentElement;
      if (!el || seen.has(el) || !t.textContent.trim() || el.closest('.sr-only, noscript, script, style')) continue;
      const cs = getComputedStyle(el);
      const box = el.getBoundingClientRect();
      if (cs.visibility === 'hidden' || cs.display === 'none' || box.width === 0 || box.height === 0) continue;
      seen.add(el);
      const px = parseFloat(cs.fontSize);
      const bold = parseInt(cs.fontWeight, 10) >= 700;
      const large = px >= 24 || (px >= 18.66 && bold);
      const need = large ? 3 : 4.5;
      const fg = parse(cs.color);
      const { base, hasImage } = backdrop(el);
      const solid = over(fg, base);
      let worst = ratio(solid, base);
      if (dotsShowThrough(el)) {
        const dotOnBase = over({ ...dot, a: gridOpacity }, base);
        worst = Math.min(worst, ratio(solid, dotOnBase));
      }
      out.push({ text: t.textContent.trim().slice(0, 40), ratio: +worst.toFixed(2), need, px, hasImage, tag: el.tagName.toLowerCase() + (el.className ? '.' + String(el.className).split(' ')[0] : '') });
    }

    // Non-text boundaries that identify a control or frame: 3:1 against the surface behind.
    const edges = [];
    const check = (sel, prop, label) => {
      for (const el of document.querySelectorAll(sel)) {
        const cs = getComputedStyle(el);
        const c = parse(cs[prop]);
        if (!c || parseFloat(cs.borderTopWidth) === 0) continue;
        const parentBg = backdrop(el.parentElement).base;
        edges.push({ label, ratio: +ratio(over(c, parentBg), parentBg).toFixed(2), need: 3 });
        break;
      }
    };
    check('.button--secondary', 'borderTopColor', 'secondary button border');
    check('.frame', 'borderTopColor', 'double frame line');
    const ring = parse('rgb(24, 61, 48)');
    edges.push({ label: 'focus ring on page', ratio: +ratio(ring, parse('rgb(246, 244, 237)')).toFixed(2), need: 3 });
    edges.push({ label: 'focus ring on subtle surface', ratio: +ratio(ring, parse('rgb(239, 235, 224)')).toFixed(2), need: 3 });
    return { out, edges };
  });

  const bad = [...report.out.filter((r) => r.ratio < r.need), ...report.edges.filter((r) => r.ratio < r.need)];
  const min = Math.min(...report.out.map((r) => r.ratio));
  console.log(`${width}px: ${report.out.length} text elements, lowest ratio ${min}, ${report.edges.length} boundary checks`);
  for (const e of report.edges) console.log(`   boundary ${e.label}: ${e.ratio}`);
  for (const b of bad) console.log('   FAIL', JSON.stringify(b));
  const imageText = report.out.filter((r) => r.hasImage);
  if (imageText.length) console.log('   text over images needs manual check:', imageText.map((r) => r.text).join(' | '));
  failures += bad.length;
  await page.context().close();
}
await browser.close();
if (failures) {
  console.error(`${failures} contrast failure(s)`);
  process.exit(1);
}
console.log('contrast audit passed');

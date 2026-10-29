/**
 * Draws the two worlds that sit behind the portrait, once each, onto two canvases: a finance world
 * (portfolio, SIP, goals, funds, protection) on a ruled ledger, and a product world (discovery, scope, specs,
 * build, AI, tests, review, ship) on a dot grid. Every symbol carries a label. Symbols are placed in a loose grid and skipped wherever the person is, so
 * they sit around the portrait and never over it. Both are still pictures: the page only moves a clip over them.
 */
export interface WorldColors {
  financeGround: string;
  financeInk: string;
  financeAccent: string;
  productGround: string;
  productInk: string;
  productAccent: string;
}

/**
 * Each symbol is drawn with a small label, so it says what it stands for. The words come from the
 * portfolio's own skills list and approach, so nothing here claims more than the page already says.
 * Icons are plain strokes on a 24 by 24 grid.
 */
interface Mark {
  label: string;
  path: string;
}

const FINANCE_MARKS: readonly Mark[] = [
  { label: 'PORTFOLIO', path: 'M12 3a9 9 0 1 0 9 9h-9zM14.5 2.6A9 9 0 0 1 21.4 9.5H14.5z' },
  { label: 'SIP', path: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4M9 15l2 2 4-4' },
  { label: 'GOALS', path: 'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 11.2a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6z' },
  { label: 'FUNDS', path: 'M5 20v-8M12 20V5M19 20v-11M3 20h18' },
  { label: 'PROTECTION', path: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4' },
  { label: 'DEPOSITS', path: 'M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 7v5c0 1.7 3.6 3 8 3s8-1.3 8-3V7M4 12v5c0 1.7 3.6 3 8 3s8-1.3 8-3v-5' },
  { label: 'KYC', path: 'M3 6h18v12H3zM9 11.5a2 2 0 1 0 0 .01M6 16c.5-1.8 1.8-2.5 3-2.5s2.5.7 3 2.5M14 10h4M14 14h3' },
  { label: 'GROWTH', path: 'M3 17l6-6 4 4 8-8M15 7h6v6' },
];

const PRODUCT_MARKS: readonly Mark[] = [
  { label: 'DISCOVERY', path: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-5-5' },
  { label: 'SCOPE', path: 'M4 7l2 2 3-3M12 7h8M4 15l2 2 3-3M12 15h8' },
  { label: 'SPECS', path: 'M6 3h9l4 4v14H6zM14 3v5h5M9 12h7M9 16h7' },
  { label: 'BUILD', path: 'M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16' },
  { label: 'AI', path: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z' },
  { label: 'TESTS', path: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM8 12.5l3 3 5-6' },
  { label: 'REVIEW', path: 'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z' },
  { label: 'SHIP', path: 'M5 21V4M5 4h11l-2 4 2 4H5' },
];

/** A stable pseudo-random number for a cell, so the pictures are identical on every visit. */
function noise(a: number, b: number, salt: number): number {
  const n = Math.sin(a * 127.1 + b * 311.7 + salt * 74.7) * 43758.5453;
  return n - Math.floor(n);
}

interface Spot {
  x: number;
  y: number;
  size: number;
  turn: number;
  /** Which symbol: counted in reading order, so each one appears once and neighbours always differ. */
  pick: number;
}

/** Returns false when the pictures could not be drawn (no 2D canvas, or the cutout is not ready). */
export function drawWorlds(
  finance: HTMLCanvasElement,
  product: HTMLCanvasElement,
  cutout: HTMLImageElement,
  colors: WorldColors,
  fontFamily: string,
): boolean {
  const width = finance.clientWidth;
  const height = finance.clientHeight;
  if (!width || !height || !cutout.naturalWidth) return false;

  const financeCtx = finance.getContext('2d');
  const productCtx = product.getContext('2d');
  const probe = document.createElement('canvas');
  const probeCtx = probe.getContext('2d', { willReadFrequently: true });
  if (!financeCtx || !productCtx || !probeCtx) return false;

  // Where the person is: the cutout's own transparency, sampled on a coarse grid.
  const scale = 3;
  const gridW = Math.ceil(width / scale);
  const gridH = Math.ceil(height / scale);
  probe.width = gridW;
  probe.height = gridH;
  probeCtx.drawImage(cutout, 0, 0, gridW, gridH);
  const alpha = probeCtx.getImageData(0, 0, gridW, gridH).data;
  const solid = (x: number, y: number) => {
    const gx = Math.floor(x / scale);
    const gy = Math.floor(y / scale);
    return gx >= 0 && gy >= 0 && gx < gridW && gy < gridH && alpha[(gy * gridW + gx) * 4 + 3] > 70;
  };
  const touchesPerson = (x: number, y: number, radius: number) => {
    if (solid(x, y)) return true;
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      if (solid(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius)) return true;
    }
    return false;
  };

  // A loose grid of spots, a little jittered, skipping anywhere the person is. The spots are few and large
  // enough for a label to be read; each symbol appears once, in reading order, so none repeats.
  const cell = Math.min(84, Math.max(58, width / 4.4));
  const found: Spot[] = [];
  for (let row = 0; row <= Math.ceil(height / cell); row++) {
    for (let col = 0; col <= Math.ceil(width / cell); col++) {
      const size = Math.min(32, Math.max(24, cell * 0.4));
      const x = (col + 0.5 + (noise(col, row, 1) - 0.5) * 0.3) * cell;
      const y = (row + 0.45 + (noise(col, row, 2) - 0.5) * 0.3) * cell;
      if (x < size * 1.2 || x > width - size * 1.2 || y < size * 0.7 || y > height - size * 1.6) continue;
      // Not across the middle line, so nothing is cut in half while the line rests there.
      if (Math.abs(x - width / 2) < size * 1.5) continue;
      if (touchesPerson(x, y, size * 0.65) || touchesPerson(x, y + size * 0.85, size * 0.65)) continue;
      found.push({ x, y, size, turn: (noise(col, row, 4) - 0.5) * 0.18, pick: 0 });
    }
  }
  const spots = found.map((spot, index) => ({ ...spot, pick: index }));

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const paint = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    ground: string,
    ink: string,
    accent: string,
    marks: readonly Mark[],
    texture: 'ledger' | 'dots',
  ) => {
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.scale(dpr, dpr);
    ctx.fillStyle = ground;
    ctx.fillRect(0, 0, width, height);

    // The ground's own texture: ruled lines for the ledger, a dot grid for the product.
    ctx.strokeStyle = ink;
    ctx.fillStyle = ink;
    ctx.globalAlpha = texture === 'ledger' ? 0.12 : 0.18;
    ctx.lineWidth = 1;
    if (texture === 'ledger') {
      for (let y = 22; y < height; y += 22) {
        ctx.beginPath();
        ctx.moveTo(0, Math.round(y) + 0.5);
        ctx.lineTo(width, Math.round(y) + 0.5);
        ctx.stroke();
      }
    } else {
      for (let y = 10; y < height; y += 14) for (let x = 10; x < width; x += 14) ctx.fillRect(x, y, 1.6, 1.6);
    }

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (const spot of spots) {
      const mark = marks[spot.pick % marks.length];
      const color = spot.pick % 3 === 0 ? accent : ink;
      ctx.save();
      ctx.translate(spot.x, spot.y);
      ctx.rotate(spot.turn);
      ctx.scale(spot.size / 24, spot.size / 24);
      ctx.translate(-12, -12);
      ctx.lineWidth = 1.7;
      ctx.globalAlpha = 0.92;
      ctx.strokeStyle = color;
      ctx.stroke(new Path2D(mark.path));
      ctx.restore();

      // The label sits under the symbol, level, so it reads normally.
      ctx.globalAlpha = 0.95;
      ctx.fillStyle = color;
      ctx.font = `500 ${Math.round(Math.max(10, spot.size * 0.36))}px ${fontFamily}`;
      ctx.fillText(mark.label, spot.x, spot.y + spot.size * 0.62);
    }
    ctx.globalAlpha = 1;
  };

  paint(finance, financeCtx, colors.financeGround, colors.financeInk, colors.financeAccent, FINANCE_MARKS, 'ledger');
  paint(product, productCtx, colors.productGround, colors.productInk, colors.productAccent, PRODUCT_MARKS, 'dots');
  return true;
}

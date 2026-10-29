/**
 * Draws the two worlds that sit behind the portrait, once each, onto two canvases: a finance world
 * (rupee, percent, charts, coins) on a sand ledger, and a product world (code, cursor, wireframe, roadmap)
 * on terracotta with a dot grid. Symbols are placed in a loose grid and skipped wherever the person is, so
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

/** Icons on a 24 by 24 grid, drawn as plain strokes. */
const FINANCE_ICONS = [
  'M6 4h12M6 9h12M9 4c4.5 0 6.5 1.8 6.5 5S13.5 14 9 14H8l7.5 6.5', // rupee
  'M18 6 6 18M8.5 7a1.8 1.8 0 1 0 0 .01M15.5 17a1.8 1.8 0 1 0 0 .01', // percent
  'M3 17l6-6 4 4 8-8M15 7h6v6', // trend line
  'M5 20v-8M12 20V5M19 20v-11', // bars
  'M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 7v5c0 1.7 3.6 3 8 3s8-1.3 8-3V7M4 12v5c0 1.7 3.6 3 8 3s8-1.3 8-3v-5', // coin stack
  'M8 4v16M6 8h4v7H6zM16 2v20M14 6h4v9h-4z', // candlesticks
  'M12 3a9 9 0 1 0 9 9h-9zM14.5 2.6A9 9 0 0 1 21.4 9.5H14.5z', // pie
  'M4 8h16v11H4zM4 8l12-4M15 13.5h2', // wallet
] as const;

const PRODUCT_ICONS = [
  'M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16', // code
  'M5 3l14 8-6 2-3 6z', // cursor
  'M4 4h16v16H4zM4 10h16M10 10v10', // wireframe
  'M4 7l2 2 3-3M12 7h8M4 15l2 2 3-3M12 15h8', // checklist
  'M4 4h5v16H4zM10 4h5v10h-5zM16 4h4v13h-4z', // board
  'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z', // sparkle
  'M5 21V4M5 4h11l-2 4 2 4H5', // milestone flag
  'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 11.2a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6z', // target
] as const;

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
  /** Which icon: stepped across the grid so neighbours always differ. */
  pick: number;
}

/** Returns false when the pictures could not be drawn (no 2D canvas, or the cutout is not ready). */
export function drawWorlds(finance: HTMLCanvasElement, product: HTMLCanvasElement, cutout: HTMLImageElement, colors: WorldColors): boolean {
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
    return gx >= 0 && gy >= 0 && gx < gridW && gy < gridH && alpha[(gy * gridW + gx) * 4 + 3] > 24;
  };
  const touchesPerson = (x: number, y: number, radius: number) => {
    if (solid(x, y)) return true;
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      if (solid(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius)) return true;
    }
    return false;
  };

  // A loose grid of spots, a little jittered, skipping anywhere the person is.
  const cell = Math.min(58, Math.max(36, width / 5.4));
  const spots: Spot[] = [];
  for (let row = -1; row <= Math.ceil(height / cell); row++) {
    for (let col = -1; col <= Math.ceil(width / cell); col++) {
      const x = (col + 0.5 + (noise(col, row, 1) - 0.5) * 0.55) * cell;
      const y = (row + 0.5 + (noise(col, row, 2) - 0.5) * 0.55) * cell;
      const size = cell * (0.62 + noise(col, row, 3) * 0.22);
      if (touchesPerson(x, y, size * 0.7)) continue;
      spots.push({ x, y, size, turn: (noise(col, row, 4) - 0.5) * 0.5, pick: col * 2 + row * 3 + (noise(col, row, 5) > 0.5 ? 1 : 0) + 64 });
    }
  }

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const paint = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    ground: string,
    ink: string,
    accent: string,
    icons: readonly string[],
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
    ctx.globalAlpha = texture === 'ledger' ? 0.13 : 0.2;
    ctx.lineWidth = 1;
    if (texture === 'ledger') {
      for (let y = cell * 0.5; y < height; y += cell * 0.5) {
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
    for (const spot of spots) {
      const path = new Path2D(icons[spot.pick % icons.length]);
      ctx.save();
      ctx.translate(spot.x, spot.y);
      ctx.rotate(spot.turn);
      ctx.scale(spot.size / 24, spot.size / 24);
      ctx.translate(-12, -12);
      ctx.lineWidth = 1.7;
      ctx.globalAlpha = 0.78;
      ctx.strokeStyle = spot.pick % 4 === 0 ? accent : ink;
      ctx.stroke(path);
      ctx.restore();
    }
    ctx.globalAlpha = 1;
  };

  paint(finance, financeCtx, colors.financeGround, colors.financeInk, colors.financeAccent, FINANCE_ICONS, 'ledger');
  paint(product, productCtx, colors.productGround, colors.productInk, colors.productAccent, PRODUCT_ICONS, 'dots');
  return true;
}

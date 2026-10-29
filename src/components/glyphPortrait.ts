/**
 * Draws a photo as a grid of code characters, once, onto a canvas. Brighter parts of the picture get
 * denser, brighter characters; the edges fall away into the dark ground. The result is a still image,
 * so there is no per-frame drawing cost: the reveal on the page only moves a clip over it.
 */
export interface GlyphColors {
  /** Ground the characters sit on. */
  ground: string;
  /** Everyday characters. */
  ink: string;
  /** The brightest few characters. */
  hot: string;
}

const BINARY = ['0', '1'];
const CODE = ['<', '>', '/', '{', '}', '=', '+'];

/** A stable pseudo-random number for a cell, so the picture is identical on every visit. */
function noise(col: number, row: number): number {
  const n = Math.sin(col * 127.1 + row * 311.7) * 43758.5453;
  return n - Math.floor(n);
}

const smoothstep = (edge0: number, edge1: number, x: number): number => {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
};

/** Returns false when the picture could not be drawn (no 2D canvas, or the image is not ready). */
export function drawGlyphPortrait(canvas: HTMLCanvasElement, image: HTMLImageElement, colors: GlyphColors, fontFamily: string): boolean {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  if (!width || !height || !image.naturalWidth) return false;

  const ctx = canvas.getContext('2d');
  const sampler = document.createElement('canvas');
  const sampleCtx = sampler.getContext('2d', { willReadFrequently: true });
  if (!ctx || !sampleCtx) return false;

  // Roughly 72 characters across: fine enough for the face to read, coarse enough to still look like code.
  // Characters are about 0.6 as wide as they are tall; the cell grid follows that.
  const cellWidth = Math.max(3.4, width / 72);
  const cellHeight = cellWidth * 1.7;
  const cols = Math.max(1, Math.floor(width / cellWidth));
  const rows = Math.max(1, Math.floor(height / cellHeight));

  sampler.width = cols;
  sampler.height = rows;
  sampleCtx.drawImage(image, 0, 0, cols, rows);
  const pixels = sampleCtx.getImageData(0, 0, cols, rows).data;

  // Brightness per cell, then sharpened (the picture minus a blurred copy of itself, added back) so the
  // eyes, brows, nose and mouth stand out at this coarse size instead of melting into the skin.
  const luminance = new Float32Array(cols * rows);
  for (let i = 0; i < luminance.length; i++) {
    luminance[i] = (0.2126 * pixels[i * 4] + 0.7152 * pixels[i * 4 + 1] + 0.0722 * pixels[i * 4 + 2]) / 255;
  }
  const detail = new Float32Array(cols * rows);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let sum = 0;
      let count = 0;
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++) {
          const x = col + dx;
          const y = row + dy;
          if (x < 0 || y < 0 || x >= cols || y >= rows) continue;
          sum += luminance[y * cols + x];
          count++;
        }
      }
      const here = luminance[row * cols + col];
      detail[row * cols + col] = here + 1.4 * (here - sum / count);
    }
  }

  // Stretch the contrast to this photo: the darkest and brightest few percent of the picture's middle
  // set the range, so the same code works for any portrait.
  const centre: number[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (Math.hypot((col / cols - 0.5) / 0.5, (row / rows - 0.46) / 0.62) < 0.8) centre.push(detail[row * cols + col]);
    }
  }
  centre.sort((a, b) => a - b);
  const low = centre[Math.floor(centre.length * 0.04)] ?? 0;
  const high = centre[Math.floor(centre.length * 0.96)] ?? 1;
  const range = Math.max(0.15, high - low);

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  ctx.scale(dpr, dpr);
  ctx.fillStyle = colors.ground;
  ctx.fillRect(0, 0, width, height);
  ctx.font = `500 ${(cellWidth * 1.75).toFixed(1)}px ${fontFamily}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const stepX = width / cols;
  const stepY = height / rows;

  // Group the characters by how bright they are, then draw each group with one canvas state. Changing
  // the alpha and colour for every single character is what makes this slow on a phone.
  const BUCKETS = 10;
  const groups: { x: number; y: number; glyph: string }[][] = Array.from({ length: BUCKETS * 2 }, () => []);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // The face and shoulders sit in the middle of the frame; everything outside fades to the ground.
      const dx = (col / cols - 0.5) / 0.5;
      const dy = (row / rows - 0.5) / 0.72;
      const focus = 1 - smoothstep(0.7, 1.08, Math.hypot(dx, dy));

      // Light parts of the face get dense, bright characters. Dark parts (eyes, brows, hair) keep a faint
      // floor of dim characters, so the shape holds together and the features read as shadows.
      const tone = Math.min(1, Math.max(0, (detail[row * cols + col] - low) / range)) ** 1.15;
      const value = focus * (0.1 + 0.9 * tone);
      if (value < 0.07) continue;

      const roll = noise(col, row);
      const glyph = value > 0.62 && roll > 0.55 ? CODE[Math.floor(roll * 97) % CODE.length] : BINARY[roll > 0.5 ? 1 : 0];
      const hot = value > 0.82 && roll > 0.7 ? 1 : 0;
      const bucket = Math.min(BUCKETS - 1, Math.floor(value * BUCKETS));
      groups[hot * BUCKETS + bucket].push({ x: col * stepX + stepX / 2, y: row * stepY + stepY / 2, glyph });
    }
  }
  groups.forEach((group, index) => {
    if (!group.length) return;
    const bucket = index % BUCKETS;
    const value = (bucket + 0.5) / BUCKETS;
    ctx.globalAlpha = Math.min(1, 0.06 + value ** 1.3 * 0.94);
    ctx.fillStyle = index >= BUCKETS ? colors.hot : colors.ink;
    for (const { x, y, glyph } of group) ctx.fillText(glyph, x, y);
  });
  ctx.globalAlpha = 1;
  return true;
}

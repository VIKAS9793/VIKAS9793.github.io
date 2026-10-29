import { useEffect, useRef, type AnimationEvent, type KeyboardEvent, type PointerEvent } from 'react';
import { duo, site } from '../content/site';
import { drawGlyphPortrait } from './glyphPortrait';

/** How far the line moves for each arrow key press, in percent of the portrait's width. */
const KEY_STEP = 5;
/** Where the line rests once the reveal has finished: half the face in each world. */
const REST = 50;

const clamp = (value: number) => Math.min(100, Math.max(0, value));
const sliderText = (value: number) => `${duo.left.word} ${Math.round(value)} percent, ${duo.right.word} ${100 - Math.round(value)} percent`;

/**
 * The hero: the word Finance, the portrait and the word Product. The photo is the page's real picture
 * and is there from the first paint. Once the page is running, the same photo is redrawn as code
 * characters and a clipped layer of it sweeps in from the right, so the face is half photograph and half
 * code. The line between them can be dragged (or moved with the arrow keys) to see more of either side.
 *
 * The position is one number, --p, the percentage of the face still shown as a photograph. It lives on
 * the root element as a CSS variable, so dragging never re-renders React.
 */
export default function SplitPortrait({ calm }: { calm: boolean }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const calmRef = useRef(calm);
  calmRef.current = calm;

  /** Moves the line. The CSS variable drives the clip, the handle and the underlines; the slider value follows. */
  const setPosition = (value: number) => {
    const next = clamp(value);
    rootRef.current?.style.setProperty('--p', String(next));
    const handle = handleRef.current;
    if (!handle) return;
    handle.setAttribute('aria-valuenow', String(Math.round(next)));
    handle.setAttribute('aria-valuetext', sliderText(next));
  };

  /** Stops the opening reveal where it is, so a touch is never fought by an animation. */
  const settle = () => {
    const root = rootRef.current;
    if (!root || !root.classList.contains('is-sweeping')) return;
    const now = Number.parseFloat(getComputedStyle(root).getPropertyValue('--p'));
    root.classList.remove('is-sweeping');
    setPosition(Number.isNaN(now) ? REST : now);
  };

  useEffect(() => {
    const root = rootRef.current;
    const frame = frameRef.current;
    const image = imageRef.current;
    const canvas = canvasRef.current;
    if (!root || !frame || !image || !canvas) return;

    let cancelled = false;
    let resizeTimer: number | undefined;

    const colorsFromTokens = () => {
      const styles = getComputedStyle(root);
      const token = (name: string, fallback: string) => styles.getPropertyValue(name).trim() || fallback;
      return { ground: token('--espresso', '#271b15'), ink: token('--cream', '#f8f1e6'), hot: token('--accent-warm', '#df8a34') };
    };
    const fontFamily = () => `${getComputedStyle(root).getPropertyValue('--font-meta').trim() || 'monospace'}`;

    const draw = () => drawGlyphPortrait(canvas, image, colorsFromTokens(), fontFamily());

    const start = async () => {
      try {
        await image.decode();
      } catch {
        /* a failed decode still leaves the photo; the code half is simply not offered */
      }
      try {
        await document.fonts.load('500 12px "DM Mono"');
      } catch {
        /* the fallback monospace face is fine */
      }
      if (cancelled || !draw()) return;

      root.dataset.ready = 'true';
      if (calmRef.current) {
        setPosition(REST);
      } else {
        // A short pause so the photograph is seen first, then the code half sweeps in to the middle.
        root.classList.add('is-sweeping');
      }
    };

    // The photograph comes first. The code half is drawn in idle time after the page has loaded, so it never
    // competes with the first paint or the headline.
    const whenIdle = () => {
      const run = () => void start();
      if (typeof window.requestIdleCallback === 'function') window.requestIdleCallback(run, { timeout: 2500 });
      else window.setTimeout(run, 300);
    };
    const afterLoad = () => {
      if (document.readyState === 'complete') whenIdle();
      else window.addEventListener('load', whenIdle, { once: true });
    };
    if (image.complete && image.naturalWidth) afterLoad();
    else image.addEventListener('load', afterLoad, { once: true });

    // Redraw when the frame changes size (rotating a phone, resizing a window), after the resizing stops.
    const observer =
      typeof ResizeObserver === 'undefined'
        ? null
        : new ResizeObserver(() => {
            window.clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(() => {
              if (root.dataset.ready === 'true') draw();
            }, 200);
          });
    observer?.observe(frame);

    return () => {
      cancelled = true;
      observer?.disconnect();
      window.clearTimeout(resizeTimer);
    };
  }, []);

  const moveTo = (event: PointerEvent<HTMLDivElement>) => {
    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    if (rect.width) setPosition(((event.clientX - rect.left) / rect.width) * 100);
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (rootRef.current?.dataset.ready !== 'true') return;
    settle();
    dragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    moveTo(event);
  };
  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragging.current) moveTo(event);
  };
  const stopDragging = () => {
    dragging.current = false;
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const current = Number(event.currentTarget.getAttribute('aria-valuenow'));
    const keys: Record<string, number> = {
      ArrowLeft: current - KEY_STEP,
      ArrowDown: current - KEY_STEP,
      ArrowRight: current + KEY_STEP,
      ArrowUp: current + KEY_STEP,
      Home: 0,
      End: 100,
    };
    if (!(event.key in keys)) return;
    event.preventDefault();
    settle();
    setPosition(keys[event.key]);
  };

  // Sweeping ends at the resting split; hand the value over to the variable so dragging continues from there.
  const onAnimationEnd = (event: AnimationEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.animationName !== 'duo-sweep') return;
    rootRef.current?.classList.remove('is-sweeping');
    setPosition(REST);
  };

  return (
    <div className="duo" ref={rootRef} onAnimationEnd={onAnimationEnd}>
      <p className="duo__word duo__word--left">{duo.left.word}</p>
      <p className="duo__line duo__line--left">{duo.left.line}</p>

      <div
        className="portrait"
        ref={frameRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
      >
        <img
          ref={imageRef}
          className="portrait__photo"
          src="/images/vikas-portrait-480.webp"
          srcSet="/images/vikas-portrait-480.webp 480w, /images/vikas-portrait-720.webp 720w, /images/vikas-portrait-960.webp 960w"
          sizes="(min-width: 900px) 368px, min(78vw, 320px)"
          width={960}
          height={1280}
          alt={site.heroPhotoAlt}
          fetchPriority="high"
          decoding="async"
          draggable={false}
        />
        <div className="portrait__glyphs" aria-hidden="true">
          <canvas ref={canvasRef} />
        </div>
        <div
          ref={handleRef}
          className="portrait__handle"
          role="slider"
          tabIndex={0}
          aria-label={duo.sliderLabel}
          aria-orientation="horizontal"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={100}
          aria-valuetext={sliderText(100)}
          onKeyDown={onKeyDown}
        >
          <span className="portrait__grip" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
            </svg>
          </span>
        </div>
      </div>
      <p className="duo__hint meta">{duo.hint}</p>

      <p className="duo__word duo__word--right">{duo.right.word}</p>
      <p className="duo__line duo__line--right">{duo.right.line}</p>
    </div>
  );
}

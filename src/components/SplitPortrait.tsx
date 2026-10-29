import { useEffect, useRef, useState, type AnimationEvent, type KeyboardEvent, type PointerEvent } from 'react';
import { duo, site } from '../content/site';
import { tenureAt, tenureCopy } from '../content/tenure';
import { drawWorlds } from './themedWorlds';
import { useToday } from './useToday';

/** How far the line moves for each arrow key press, in percent of the portrait's width. */
const KEY_STEP = 5;
/** The portrait is cut in half at the middle until the visitor moves the line. */
const REST = 50;

const CUTOUT_SRC = '/images/vikas-cutout-720.webp';

const clamp = (value: number) => Math.min(100, Math.max(0, value));
const sliderText = (value: number) => `${duo.left.word} ${Math.round(value)} percent, ${duo.right.word} ${100 - Math.round(value)} percent`;

/**
 * The hero: the word Finance, the portrait and the word Product. The photo is the page's real picture and
 * is there from the first paint. Once the page has loaded, a second copy of the person, cut out from the
 * background, is laid exactly over it, and two worlds open out from the middle behind them: finance
 * symbols on the left and product symbols on the right, drawn around the person and never over them. The
 * line between the worlds can be dragged (or moved with the arrow keys) to give either one more room.
 *
 * The position is one number, --p, the share of the frame given to the finance world. It lives on the root
 * element as a CSS variable, so dragging never re-renders React.
 */
export default function SplitPortrait({ calm }: { calm: boolean }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const financeRef = useRef<HTMLCanvasElement>(null);
  const productRef = useRef<HTMLCanvasElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const leftLine = tenureCopy.heroLine(tenureAt(useToday()));
  const dragging = useRef(false);
  const [cutout, setCutout] = useState(false);
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

  /** Ends the opening reveal where it is, so a touch is never fought by an animation. */
  const settle = () => {
    rootRef.current?.classList.remove('is-sweeping');
  };

  useEffect(() => {
    const root = rootRef.current;
    const frame = frameRef.current;
    const finance = financeRef.current;
    const product = productRef.current;
    if (!root || !frame || !finance || !product) return;

    let cancelled = false;
    let resizeTimer: number | undefined;
    let cutoutImage: HTMLImageElement | null = null;

    const colors = () => {
      const styles = getComputedStyle(root);
      const token = (name: string, fallback: string) => styles.getPropertyValue(name).trim() || fallback;
      return {
        financeGround: token('--world-finance', '#f3dfc0'),
        financeInk: token('--brown', '#5a3828'),
        financeAccent: token('--accent-ink', '#9a4122'),
        productGround: token('--world-product', '#cb4f15'),
        productInk: token('--cream', '#f8f1e6'),
        productAccent: token('--sand', '#ead9c2'),
      };
    };
    const draw = () => (cutoutImage ? drawWorlds(finance, product, cutoutImage, colors()) : false);

    const start = async () => {
      // The cut-out person is fetched only now, after the page has loaded, so it never competes with the photo.
      const loaded = new Image();
      loaded.src = CUTOUT_SRC;
      try {
        await loaded.decode();
      } catch {
        return; // without the cut-out the page simply stays the plain photograph
      }
      if (cancelled) return;
      cutoutImage = loaded;
      if (!draw()) return;

      setCutout(true);
      root.dataset.ready = 'true';
      // A short pause so the photograph is seen first, then the two worlds open out from the middle.
      if (!calmRef.current) root.classList.add('is-sweeping');
    };

    // The photograph comes first. The worlds are drawn in idle time after the page has loaded, so they never
    // compete with the first paint or the headline.
    const whenIdle = () => {
      const run = () => void start();
      if (typeof window.requestIdleCallback === 'function') window.requestIdleCallback(run, { timeout: 2500 });
      else window.setTimeout(run, 300);
    };
    const image = imageRef.current;
    const afterLoad = () => {
      if (document.readyState === 'complete') whenIdle();
      else window.addEventListener('load', whenIdle, { once: true });
    };
    if (!image || (image.complete && image.naturalWidth)) afterLoad();
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

  // The opening reveal is over: drop its class so the worlds simply stay open.
  const onAnimationEnd = (event: AnimationEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.animationName !== 'duo-open') return;
    rootRef.current?.classList.remove('is-sweeping');
  };

  return (
    <div className="duo" ref={rootRef} onAnimationEnd={onAnimationEnd}>
      <p className="duo__word duo__word--left">{duo.left.word}</p>
      <p className="duo__line duo__line--left">{leftLine}</p>

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
        <div className="portrait__worlds" aria-hidden="true">
          <div className="world world--finance">
            <canvas ref={financeRef} />
          </div>
          <div className="world world--product">
            <canvas ref={productRef} />
          </div>
        </div>
        {cutout && <img className="portrait__cutout" src={CUTOUT_SRC} width={720} height={960} alt="" aria-hidden="true" draggable={false} />}
        <div
          ref={handleRef}
          className="portrait__handle"
          role="slider"
          tabIndex={0}
          aria-label={duo.sliderLabel}
          aria-orientation="horizontal"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={REST}
          aria-valuetext={sliderText(REST)}
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

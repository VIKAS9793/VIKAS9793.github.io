import {
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactElement,
  type ReactNode,
} from 'react';
import { isCalmNow } from './motion/editorial';

/**
 * Words that solve like a Rubik's cube.
 *
 * Every letter is a small prism. When the words arrive, each one turns through scrambled faces, one
 * quarter turn at a time, and clicks into the right letter, left to right. The real letters stay in the
 * page as ordinary text; the scrambled faces are drawn from attributes by CSS, so they are never in
 * the document text, never read aloud, never copied and never seen by a search engine. The animation
 * code loads in its own chunk and is skipped entirely in Quiet mode or with reduced motion.
 */

type Kind = 'upper' | 'lower' | 'digit';

const POOLS: Record<Kind, string> = {
  upper: 'ABCDEFGHJKLMNPQRSTUVWXYZ',
  lower: 'abcdefghjkmnpqrstuvwxyz',
  digit: '0123456789',
};

const kindOf = (ch: string): Kind => (/[0-9]/.test(ch) ? 'digit' : ch === ch.toUpperCase() ? 'upper' : 'lower');

function Cube({ char, index }: { char: string; index: number }) {
  return (
    <span className="cube" data-kind={kindOf(char)} style={{ '--i': index } as CSSProperties}>
      <span className="cube__rotor">
        <span className="cube__face cube__face--front">{char}</span>
        <i className="cube__face cube__face--a" aria-hidden="true" />
        <i className="cube__face cube__face--b" aria-hidden="true" />
        <i className="cube__face cube__face--c" aria-hidden="true" />
      </span>
    </span>
  );
}

/** Splits text into word groups of cubes, keeping spaces as plain text so lines still wrap between words. */
function cubes(node: ReactNode, counter: { i: number }, path: string): ReactNode {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node)
      .split(/(\s+)/)
      .map((token, t) => {
        if (token === '') return null;
        if (/^\s+$/.test(token)) return token;
        return (
          <span className="cube-word" key={`${path}-${t}`}>
            {[...token].map((ch, c) => (
              <Cube key={c} char={ch} index={counter.i++} />
            ))}
          </span>
        );
      });
  }
  if (Array.isArray(node)) return node.map((child, i) => cubes(child, counter, `${path}-${i}`));
  if (isValidElement(node)) {
    const element = node as ReactElement<{ children?: ReactNode }>;
    return cloneElement(element, { key: element.key ?? path }, cubes(element.props.children, counter, path));
  }
  return node;
}

function plainText(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(plainText).join('');
  if (isValidElement(node)) return plainText((node as ReactElement<{ children?: ReactNode }>).props.children);
  return '';
}

interface Props {
  as?: ElementType;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children: ReactNode;
  /** 'load' starts shortly after the page is ready; 'view' starts when the words scroll into view. */
  trigger?: 'load' | 'view';
  /** Seconds to wait before the first letter turns. */
  delay?: number;
}

export default function CubeText({ as: Tag = 'span', className, id, style, children, trigger = 'view', delay = 0.15 }: Props) {
  const ref = useRef<HTMLElement>(null);
  const counter = { i: 0 };
  const content = cubes(children, counter, 'c');

  useEffect(() => {
    const root = ref.current;
    if (!root || typeof IntersectionObserver === 'undefined' || isCalmNow()) return;

    let cancelled = false;
    let observer: IntersectionObserver | undefined;
    let stop: (() => void) | undefined;

    const solve = async () => {
      const { animate, stagger } = await import('motion');
      if (cancelled) return;
      const cubeEls = [...root.querySelectorAll<HTMLElement>('.cube')];
      // Deal each cube three scrambled faces of the same kind as its real letter.
      for (const cube of cubeEls) {
        const pool = POOLS[cube.dataset.kind as Kind];
        for (const face of cube.querySelectorAll<HTMLElement>('.cube__face:not(.cube__face--front)')) {
          face.dataset.c = pool[Math.floor(Math.random() * pool.length)];
        }
      }
      const rotors = cubeEls.map((cube) => cube.querySelector<HTMLElement>('.cube__rotor')!);
      root.dataset.cubes = 'run';
      const turn = animate(
        rotors,
        { transformPerspective: 900, rotateX: [0, -90, -180, -270, -360] },
        { duration: 0.85, ease: 'easeInOut', times: [0, 0.25, 0.5, 0.75, 1], delay: stagger(0.032, { startDelay: delay }) },
      );
      stop = () => turn.stop();
      await turn;
      if (cancelled) return;
      // A full turn is the identity, so drop the leftover transform and let the text rest flat and sharp.
      for (const rotor of rotors) rotor.style.removeProperty('transform');
      root.dataset.cubes = 'done';
    };

    if (trigger === 'load') {
      void solve();
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            observer?.disconnect();
            void solve();
          }
        },
        { threshold: 0.4 },
      );
      observer.observe(root);
    }

    return () => {
      cancelled = true;
      observer?.disconnect();
      stop?.();
    };
  }, [trigger, delay]);

  return (
    <Tag ref={ref} id={id} className={`cubetext ${className ?? ''}`.trim()} style={style} aria-label={plainText(children)}>
      {content}
    </Tag>
  );
}

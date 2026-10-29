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
 * The emphasised phrase (the <em> in a headline) is made of small prisms. When it arrives, each letter
 * turns through scrambled faces, one quarter turn at a time, and clicks into the right letter, left to
 * right. The rest of the headline is ordinary text. The real letters stay in the
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

/**
 * A scrambled letter for one face of one cube. It is a fixed function of the letter, its position and
 * the face, so the prerendered HTML and the browser agree and nothing has to be written to the page
 * when the animation starts. It never equals the real letter.
 */
function deal(char: string, index: number, face: number): string {
  const pool = POOLS[kindOf(char)];
  let at = (index * 7 + face * 11 + char.charCodeAt(0) * 3) % pool.length;
  if (pool[at] === char) at = (at + 1) % pool.length;
  return pool[at];
}

function Cube({ char, index }: { char: string; index: number }) {
  return (
    <span className="cube" style={{ '--i': index } as CSSProperties}>
      <span className="cube__rotor">
        <span className="cube__face cube__face--front">{char}</span>
        <i className="cube__face cube__face--a" data-c={deal(char, index, 1)} aria-hidden="true" />
        <i className="cube__face cube__face--b" data-c={deal(char, index, 2)} aria-hidden="true" />
        <i className="cube__face cube__face--c" data-c={deal(char, index, 3)} aria-hidden="true" />
      </span>
    </span>
  );
}

/**
 * Turns the emphasised phrase (the text inside <em>) into word groups of cubes and leaves every other
 * word as plain text. Spaces stay plain text so lines still wrap between words. Keeping the effect to
 * the accent phrase is what keeps the page fast: the cost grows with the number of letters.
 */
function cubes(node: ReactNode, counter: { i: number }, path: string, inside: boolean): ReactNode {
  if (typeof node === 'string' || typeof node === 'number') {
    if (!inside) return node;
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
  if (Array.isArray(node)) return node.map((child, i) => cubes(child, counter, `${path}-${i}`, inside));
  if (isValidElement(node)) {
    const element = node as ReactElement<{ children?: ReactNode }>;
    const within = inside || element.type === 'em';
    return cloneElement(element, { key: element.key ?? path }, cubes(element.props.children, counter, path, within));
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
  const content = cubes(children, counter, 'c', false);

  useEffect(() => {
    const root = ref.current;
    if (!root || typeof IntersectionObserver === 'undefined' || isCalmNow()) return;

    let cancelled = false;
    let observer: IntersectionObserver | undefined;
    let stop: (() => void) | undefined;
    const timers: number[] = [];

    const solve = async () => {
      // Motion's mini animator hands each turn to the browser as a Web Animation, so the letters
      // turn on the compositor. Each turn is started just before its letter's moment, in its own tiny
      // task, so no single task is long enough to block the page.
      const { animate } = await import('motion/mini');
      if (cancelled) return;
      const rotors = [...root.querySelectorAll<HTMLElement>('.cube__rotor')];
      const turns = [0, -90, -180, -270, -360].map((deg) => `perspective(900px) rotateX(${deg}deg)`);
      const running: Array<ReturnType<typeof animate> | undefined> = [];
      const finished = new Promise<void>((resolve) => {
        let remaining = rotors.length;
        rotors.forEach((rotor, i) => {
          const at = Math.max(0, delay * 1000 + i * 32 - 50);
          timers.push(
            window.setTimeout(() => {
              if (i === 0) root.dataset.cubes = 'run';
              const turn = animate(rotor, { transform: turns }, { duration: 0.85, ease: 'easeInOut', times: [0, 0.25, 0.5, 0.75, 1] });
              running[i] = turn;
              void turn.finished.then(() => {
                // A full turn is the identity, so drop the leftover transform and let the text rest flat and sharp.
                rotor.style.removeProperty('transform');
                if (--remaining === 0) resolve();
              });
            }, at),
          );
        });
      });
      stop = () => running.forEach((turn) => turn?.stop());
      await finished;
      if (!cancelled) root.dataset.cubes = 'done';
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
      timers.forEach((t) => window.clearTimeout(t));
      stop?.();
    };
  }, [trigger, delay]);

  return (
    <Tag ref={ref} id={id} className={`cubetext ${className ?? ''}`.trim()} style={style} aria-label={plainText(children)}>
      {content}
    </Tag>
  );
}

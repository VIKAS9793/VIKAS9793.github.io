import { m } from 'motion/react';
import { projects } from '../content/projects';
import AmbientFloat from './motion/AmbientFloat';

const plates = projects.filter((p) => p.group === 'products').slice(0, 3);

/**
 * The hero object, built from DOM and CSS: a plinth, three work plates and a cursor that lands last.
 * It arrives in order (foundation, companions, hero object) and then settles, with one small ripple
 * as the cursor touches down. Everything here is decoration, so it is hidden from assistive technology.
 */
export default function HeroStillLife() {
  const [back, left, right] = plates;
  return (
    <div className="stage" aria-hidden="true">
      <svg className="stage__rings" viewBox="0 0 400 400" preserveAspectRatio="none">
        <ellipse cx="200" cy="215" rx="190" ry="120" transform="rotate(-14 200 215)" />
        <ellipse cx="205" cy="205" rx="150" ry="178" transform="rotate(24 205 205)" />
      </svg>

      <m.div
        className="stage__plinth"
        initial={{ x: -420, rotate: -18, opacity: 0 }}
        animate={{ x: 0, rotate: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 55, damping: 13, delay: 0.25 }}
      />

      <m.div
        className="plate plate--back"
        initial={{ y: -240, rotate: 14, opacity: 0 }}
        animate={{ y: 0, rotate: 2.5, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 12, delay: 0.7 }}
      >
        <span className="plate__index">{back.index}</span>
        <span className="plate__name">{back.name}</span>
        <span className="plate__kind">{back.kind}</span>
      </m.div>

      <m.div
        className="plate plate--left"
        initial={{ x: -320, rotate: -26, opacity: 0 }}
        animate={{ x: 0, rotate: -8, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 70, damping: 12, delay: 1 }}
      >
        <span className="plate__index">{left.index}</span>
        <span className="plate__name">{left.name}</span>
        <span className="plate__kind">{left.kind}</span>
      </m.div>

      <m.div
        className="plate plate--right"
        initial={{ x: 300, y: -100, rotate: 40, opacity: 0 }}
        animate={{ x: 0, y: 0, rotate: 4, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 115, damping: 10, delay: 1.3 }}
      >
        <span className="plate__index">{right.index}</span>
        <span className="plate__name">{right.name}</span>
        <span className="plate__kind">{right.kind}</span>
      </m.div>

      <m.div
        className="stage__cursor"
        initial={{ y: -420, rotate: 16, opacity: 0 }}
        animate={{ y: 0, rotate: -4, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 105, damping: 9, delay: 1.7 }}
      >
        <svg viewBox="0 0 24 30">
          <path d="M3 2 21 14l-8 2-4 9z" />
        </svg>
      </m.div>
      <span className="stage__ripple" />
      <AmbientFloat />
    </div>
  );
}

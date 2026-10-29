import { highlights } from '../content/highlights';
import Reveal from './motion/Reveal';

export default function Highlights() {
  return (
    <Reveal as="div" className="glance-wrap">
      <dl className="glance" aria-label="At a glance">
        {highlights.map((h) => (
          <div key={h.label}>
            <dt className="glance__value">{h.value}</dt>
            <dd className="glance__label">{h.label}</dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}

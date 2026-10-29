import { highlightsFor } from '../content/highlights';
import { tenureAt } from '../content/tenure';
import { useToday } from './useToday';
import Reveal from './motion/Reveal';

export default function Highlights() {
  const highlights = highlightsFor(tenureAt(useToday()));
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

import { highlights } from '../content/highlights';

export default function Highlights() {
  return (
    <section className="highlights" aria-label="At a glance">
      <div className="container">
        <dl className="highlights__list">
          {highlights.map((h) => (
            <div key={h.label} className="highlights__item reveal">
              <dt className="highlights__value">{h.value}</dt>
              <dd className="highlights__label">{h.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

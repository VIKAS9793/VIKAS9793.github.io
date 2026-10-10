import { approach } from '../content/site';
import SectionHeading from './SectionHeading';

export default function Approach() {
  return (
    <section className="section section--subtle" id="approach" aria-labelledby="approach-title">
      <div className="container">
        <SectionHeading
          id="approach-title"
          label="02 / Approach"
          title="How I build with AI"
          lead="AI does a lot of the typing. These are the parts that stay with me."
        />
        <ul className="approach-grid">
          {approach.map((row) => (
            <li key={row.label} className="card approach">
              <p className="badge badge--brand">{row.label}</p>
              <h3 className="approach__title">{row.title}</h3>
              <p>{row.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

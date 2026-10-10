import { about, credentials } from '../content/site';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container about">
        <div>
          <SectionHeading id="about-title" label="03 / About" title="Finance first, then product" />
          <div className="prose">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <div>
          <h3 className="label about__creds-title">Certifications</h3>
          <ul className="creds">
            {credentials.map((c) => (
              <li key={c.name} className="card cred">
                <p className="cred__name">{c.name}</p>
                <p className="cred__issuer">{c.issuer}</p>
                <ul className="tag-list" aria-label={`${c.name} topics`}>
                  {c.topics.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

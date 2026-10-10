import { about, credentials, education, experience, skills } from '../content/site';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container about">
        <div className="about__main">
          <SectionHeading id="about-title" label="03 / About" title="Finance first, then product" />
          <div className="prose">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <h3 className="label about__subhead">Experience</h3>
          <ol className="timeline">
            {experience.map((role) => (
              <li key={`${role.org}-${role.period}`} className="timeline__item">
                <p className="timeline__period">{role.period}</p>
                <h4 className="timeline__role">{role.title}</h4>
                <p className="timeline__org">{role.org}</p>
                <ul className="timeline__points">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <div className="about__side">
          <h3 className="label about__subhead">Skills</h3>
          <ul className="tag-list" aria-label="Skills">
            {skills.map((skill) => (
              <li key={skill} className="tag">
                {skill}
              </li>
            ))}
          </ul>

          <h3 className="label about__subhead">Certifications</h3>
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

          <h3 className="label about__subhead">Education</h3>
          <p className="cred__name">{education.degree}</p>
          <p className="cred__issuer">{education.period}</p>
        </div>
      </div>
    </section>
  );
}

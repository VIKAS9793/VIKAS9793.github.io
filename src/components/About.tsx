import { about, credentials, education, experience, site, skills } from '../content/site';
import CubeText from './CubeText';
import SectionLabel from './SectionLabel';
import Reveal from './motion/Reveal';

export default function About() {
  return (
    <section className="chapter chapter--paper" id="about" aria-labelledby="about-title">
      <div className="container about">
        <div className="about__main">
          <Reveal className="chapter__head">
            <SectionLabel number="04">About</SectionLabel>
            <CubeText as="h2" id="about-title" className="chapter__title">
              Finance first, <em>then product.</em>
            </CubeText>
          </Reveal>
          <div className="bio">
            <Reveal as="figure" className="bio__photo" direction="left">
              <img
                src="/images/vikas-480.webp"
                srcSet="/images/vikas-480.webp 480w, /images/vikas-960.webp 960w"
                sizes="(min-width: 720px) 260px, 64vw"
                width="480"
                height="600"
                alt={site.photoAlt}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="meta">
                {site.name} · {site.location}
              </figcaption>
            </Reveal>
            <Reveal className="prose">
              {about.paragraphs.slice(0, 1).map((p) => (
                <p key={p}>{p}</p>
              ))}
              <blockquote className="pullquote">
                <p>{about.pullQuote}</p>
              </blockquote>
              {about.paragraphs.slice(1).map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>
          </div>

          <h3 className="subhead meta">Experience</h3>
          <ol className="timeline">
            {experience.map((role, index) => (
              <Reveal as="li" key={`${role.org}-${role.period}`} className="timeline__item" delay={index * 0.06}>
                <p className="timeline__period meta">{role.period}</p>
                <h4 className="timeline__role">{role.title}</h4>
                <p className="timeline__org">{role.org}</p>
                <ul className="timeline__points">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="about__side">
          <h3 className="subhead subhead--first meta">Skills</h3>
          <ul className="tag-list" aria-label="Skills">
            {skills.map((skill) => (
              <li key={skill} className="tag">
                {skill}
              </li>
            ))}
          </ul>

          <h3 className="subhead meta">Certifications</h3>
          <ul className="creds">
            {credentials.map((c, index) => (
              <Reveal as="li" key={c.name} className="cred" delay={index * 0.06}>
                <p className="cred__name">{c.name}</p>
                <p className="cred__issuer">{c.issuer}</p>
                <ul className="tag-list" aria-label={`${c.name} topics`}>
                  {c.topics.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>

          <h3 className="subhead meta">Education</h3>
          <p className="cred__name">{education.degree}</p>
          <p className="cred__issuer">{education.period}</p>
        </div>
      </div>
    </section>
  );
}

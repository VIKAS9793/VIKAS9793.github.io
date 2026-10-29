import { contacts, site } from '../content/site';
import CopyButton from './CopyButton';
import { Mail } from './Icons';
import PrimaryButton from './PrimaryButton';
import CubeText from './CubeText';
import SectionLabel from './SectionLabel';
import Reveal from './motion/Reveal';

export default function Contact() {
  return (
    <section className="chapter chapter--accent" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="invite">
          <span className="invite__icon" aria-hidden="true">
            <Mail />
          </span>
          <SectionLabel number="05" center>
            Contact
          </SectionLabel>
          <CubeText as="h2" id="contact-title" className="invite__title">
            Bring me the <em>interesting problem.</em>
          </CubeText>
          <p className="invite__lead">
            If you have a business problem that could be a small, well-made product, email me. I read everything.
          </p>
          <div className="invite__actions">
            <PrimaryButton href={`mailto:${site.email}`} variant="light" icon="up">
              Email me
            </PrimaryButton>
          </div>
          <ul className="contact__list">
            {contacts.map((c) => (
              <li key={c.id} className="contact__row">
                <span className="meta">{c.label}</span>
                <a className="mono-link" href={c.href} {...(c.external ? { rel: 'noopener noreferrer' } : {})}>
                  {c.value}
                </a>
                {c.id === 'email' ? <CopyButton text={c.value} label="Copy email" /> : null}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

import { contacts } from '../content/site';
import SectionHeading from './SectionHeading';

export default function Contact() {
  return (
    <section className="section section--subtle grid-bg" id="contact" aria-labelledby="contact-title">
      <div className="container contact">
        <SectionHeading
          id="contact-title"
          label="04 / Contact"
          title="Let’s talk"
          lead="If you have a business problem that could be a small, well-made product, email me. I read everything."
        />
        <ul className="contact__list">
          {contacts.map((c) => (
            <li key={c.id} className="contact__row">
              <span className="label">{c.label}</span>
              <a className="mono-link" href={c.href} {...(c.external ? { rel: 'noopener noreferrer' } : {})}>
                {c.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { contacts, site } from '../content/site';

const github = contacts.find((c) => c.id === 'github')!;
const email = contacts.find((c) => c.id === 'email')!;

export default function IdentityCard() {
  return (
    <aside className="id-card" aria-label="Identity card">
      <div className="id-card__frame">
        <span className="reg reg--tl" aria-hidden="true" />
        <span className="reg reg--br" aria-hidden="true" />
        <img
          className="id-card__photo"
          src="/images/portrait-640.webp"
          srcSet="/images/portrait-640.webp 640w, /images/portrait-1200.webp 1200w"
          sizes="(min-width: 60rem) 440px, calc(100vw - 4rem)"
          width="640"
          height="640"
          alt={site.portraitAlt}
          fetchPriority="high"
        />
        <div className="id-card__body">
          <div className="id-card__top">
            <p className="id-card__name">{site.name}</p>
            <span className="badge badge--accent">{site.location}</span>
          </div>
          <p className="badge badge--brand">{site.role}</p>
          <dl className="id-card__rows">
            <div className="id-card__row">
              <dt className="label">GitHub</dt>
              <dd>
                <a className="mono-link" href={github.href} rel="noopener noreferrer">
                  {site.githubHandle}
                </a>
              </dd>
            </div>
            <div className="id-card__row">
              <dt className="label">Email</dt>
              <dd>
                <a className="mono-link" href={email.href}>
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </aside>
  );
}

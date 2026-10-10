import { site } from '../content/site';
import HeroPortrait from './HeroPortrait';

export default function Hero() {
  return (
    <section className="hero grid-bg" id="top" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="label">
            {site.name} / {site.role} / {site.location}
          </p>
          <h1 id="hero-title" className="hero__title">
            {site.headline}
          </h1>
          <p className="hero__intro">{site.intro}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#work">
              See the work
            </a>
            <a className="button button--secondary" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
        <HeroPortrait />
      </div>
    </section>
  );
}

import { site } from '../content/site';

/** The portrait in a double-line frame. A picture only: no card, no repeated contact details. */
export default function HeroPortrait() {
  return (
    <figure className="portrait frame">
      <img
        className="portrait__image"
        src="/images/portrait-640.webp"
        srcSet="/images/portrait-640.webp 640w, /images/portrait-1200.webp 1200w"
        sizes="(min-width: 60rem) 440px, calc(100vw - 4rem)"
        width="640"
        height="640"
        alt={site.portraitAlt}
        fetchPriority="high"
      />
    </figure>
  );
}

import type { CSSProperties } from 'react';
import { m, useTransform } from 'motion/react';
import { site } from '../content/site';
import CubeText from './CubeText';
import { ArrowDown, Asterisk } from './Icons';
import HeroStillLife from './HeroStillLife';
import PrimaryButton from './PrimaryButton';
import { useEditorial } from './motion/editorial';

const step = (i: number) => ({ '--i': i }) as CSSProperties;

export default function Hero() {
  const { progress, calm } = useEditorial();
  // The copy drifts up and softens a little as the page scrolls away. Calm mode keeps it still.
  const y = useTransform(progress, [0, 0.18], calm ? [0, 0] : [0, -110]);
  const opacity = useTransform(progress, [0, 0.14], calm ? [1, 1] : [1, 0.55]);

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero__inner">
          <m.div className="hero__copy" style={{ y, opacity }}>
            <p className="eyebrow meta" style={step(0)}>
              <Asterisk />
              <span>
                {site.role} · {site.location}
              </span>
            </p>
            <CubeText as="h1" id="hero-title" className="hero__title" style={step(1)} trigger="load" delay={0.5}>
              {site.headlineLead} <em>{site.headlineEmphasis}</em>
            </CubeText>
            <p className="hero__intro" style={step(2)}>
              {site.intro}
            </p>
            <div className="hero__actions" style={step(3)}>
              <PrimaryButton href="#work">See the work</PrimaryButton>
              <a className="text-link" href="#contact">
                Get in touch
              </a>
            </div>
            <p className="hero__note" style={step(4)}>
              <span className="meta">Built with</span>
              <strong>{site.buildNote}</strong>
            </p>
          </m.div>
          <HeroStillLife />
        </div>
        <div className="hero__foot meta" aria-hidden="true">
          <span className="scroll-cue">
            Scroll to see the work <ArrowDown />
          </span>
          <span>{site.location}</span>
        </div>
      </div>
    </section>
  );
}

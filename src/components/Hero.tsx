import type { CSSProperties } from 'react';
import { m, useTransform } from 'motion/react';
import { site } from '../content/site';
import CubeText from './CubeText';
import { ArrowDown, Asterisk } from './Icons';
import PrimaryButton from './PrimaryButton';
import SplitPortrait from './SplitPortrait';
import { useEditorial } from './motion/editorial';

const step = (i: number) => ({ '--i': i }) as CSSProperties;

export default function Hero() {
  const { progress, calm } = useEditorial();
  // The headline block drifts up and softens a little as the page scrolls away. Calm mode keeps it still.
  const y = useTransform(progress, [0, 0.18], calm ? [0, 0] : [0, -70]);
  const opacity = useTransform(progress, [0, 0.14], calm ? [1, 1] : [1, 0.55]);

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <p className="eyebrow meta">
          <Asterisk />
          <span>
            {site.role} · {site.location}
          </span>
        </p>
        <SplitPortrait calm={calm} />
        <m.div className="hero__copy" style={{ y, opacity }}>
          <CubeText as="h1" id="hero-title" className="hero__title" style={step(1)} trigger="load" delay={0.5}>
            {site.headlineLead} <em>{site.headlineEmphasis}</em>
          </CubeText>
          <div className="hero__actions" style={step(2)}>
            <PrimaryButton href="#work">See the work</PrimaryButton>
            <a className="text-link" href="#contact">
              Get in touch
            </a>
          </div>
        </m.div>
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

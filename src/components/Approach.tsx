import type { ComponentType, SVGProps } from 'react';
import { approach } from '../content/site';
import { Check, Compass, Shield, Spark } from './Icons';
import CubeText from './CubeText';
import SectionLabel from './SectionLabel';
import Reveal from './motion/Reveal';

const icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  Mine: Compass,
  'AI-assisted': Spark,
  Guardrails: Shield,
  Checked: Check,
};

/** The dark chapter: the working method as four steps on a thread. */
export default function Approach() {
  return (
    <section className="chapter chapter--dark" id="approach" aria-labelledby="approach-title">
      <div className="container ritual-layout">
        <Reveal className="chapter__head">
          <SectionLabel number="03" tone="dark">
            How I build with AI
          </SectionLabel>
          <CubeText as="h2" id="approach-title" className="chapter__title">
            AI does the typing. <em>These parts stay with me.</em>
          </CubeText>
          <p className="chapter__lead">
            It does a lot of the typing. These are the four things that stay with me, and what each one means in practice.
          </p>
        </Reveal>
        <ol className="ritual">
          {approach.map((row, index) => {
            const Icon = icons[row.label] ?? Check;
            return (
              <Reveal as="li" key={row.label} className="ritual__step" delay={index * 0.08}>
                <span className="ritual__icon">
                  <Icon aria-hidden="true" />
                </span>
                <p className="ritual__tag meta">{row.label}</p>
                <h3 className="ritual__title">{row.title}</h3>
                <p className="ritual__body">{row.body}</p>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

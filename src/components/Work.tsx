import { projects } from '../content/projects';
import Highlights from './Highlights';
import ProjectCard from './ProjectCard';
import CubeText from './CubeText';
import SectionLabel from './SectionLabel';
import ParallaxCard from './motion/ParallaxCard';
import Reveal from './motion/Reveal';

const products = projects.filter((p) => p.group === 'products');

export default function Work() {
  return (
    <section className="chapter chapter--sand" id="work" aria-labelledby="work-title">
      <div className="container">
        <Reveal className="chapter__head">
          <SectionLabel number="01">Work</SectionLabel>
          <CubeText as="h2" id="work-title" className="chapter__title">
            Five products, <em>each from a real problem.</em>
          </CubeText>
          <p className="chapter__lead">
            Ordered by reach. Each one starts with a real problem and says plainly what exists today. Start with the first.
          </p>
        </Reveal>
        <Highlights />
        <ul className="moments">
          {products.map((project, index) => (
            <ParallaxCard key={project.id} index={index} className="moment">
              <ProjectCard project={project} />
            </ParallaxCard>
          ))}
        </ul>
      </div>
    </section>
  );
}

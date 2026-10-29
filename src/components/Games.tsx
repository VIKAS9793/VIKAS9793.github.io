import { projects } from '../content/projects';
import { games } from '../content/site';
import ProjectCard from './ProjectCard';
import CubeText from './CubeText';
import SectionLabel from './SectionLabel';
import Reveal from './motion/Reveal';

const studio = projects.find((p) => p.group === 'games')!;

export default function Games() {
  return (
    <section className="chapter chapter--sand chapter--follow" id="games" aria-labelledby="games-title">
      <div className="container games">
        <Reveal className="games__head">
          <SectionLabel number={games.number}>{games.label}</SectionLabel>
          <CubeText as="h2" id="games-title" className="games__title">
            {games.titleLead} <em>{games.titleEmphasis}</em>
          </CubeText>
          <p className="chapter__lead">{games.lead}</p>
        </Reveal>
        <Reveal className="games__card">
          <ProjectCard project={studio} />
        </Reveal>
      </div>
    </section>
  );
}

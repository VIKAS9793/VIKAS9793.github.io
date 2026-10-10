import { projects } from '../content/projects';
import { games } from '../content/site';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

const studio = projects.find((p) => p.group === 'games')!;

export default function Games() {
  return (
    <section className="section section--subtle grid-bg" id="games" aria-labelledby="games-title">
      <div className="container games">
        <SectionHeading id="games-title" label={games.label} title={games.title} lead={games.lead} />
        <div className="reveal">
          <ProjectCard project={studio} />
        </div>
      </div>
    </section>
  );
}

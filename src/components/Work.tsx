import { projects } from '../content/projects';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

export default function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading
          id="work-title"
          label="01 / Work"
          title="Selected projects"
          lead="Five projects, ordered by reach. Each one starts with a real problem and says plainly what exists today."
        />
        <ul className="project-grid">
          {projects.map((project) => (
            <li key={project.id} className="project-grid__item">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

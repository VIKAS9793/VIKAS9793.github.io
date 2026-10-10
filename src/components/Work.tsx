import { projects } from '../content/projects';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

const products = projects.filter((p) => p.group === 'products');

export default function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading
          id="work-title"
          label="01 / Work"
          title="Products I have built"
          lead="Four projects, ordered by reach. Each one starts with a real problem and says plainly what exists today. The double-lined card is the one to start with."
        />
        <ul className="project-grid">
          {products.map((project) => (
            <li key={project.id} className="project-grid__item reveal">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import type { Project } from '@types';
import { projects as staticProjects } from '@data/portfolio';

/**
 * Project Card - GDG Style
 */
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-gray-50 border-card-em border-black rounded-card p-6 hover:shadow-card-hover transition-all flex flex-col h-full">
      {/* Title */}
      <h3 className="text-display-lg text-text-primary mb-3">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-body-md text-text-secondary mb-4 flex-grow">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-white border border-black/20 text-text-secondary text-xs rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-4 border-t border-black/20">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-google-blue hover:bg-google-blue/10 rounded-pill border border-google-blue/20 transition-colors"
            >
              {link.label}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Projects Section - GDG Grid Layout
 */
export default function ProjectsSection() {
  const projects = staticProjects.filter(p => p.featured);

  return (
    <section
      id="projects"
      className="bg-section-blue py-section"
      aria-labelledby="projects-heading"
    >
      <div className="container-google">
        {/* Header */}
        <div className="mb-12">
          <h2 id="projects-heading" className="text-display-xl text-text-primary mb-4">
            Featured Work
          </h2>
          <p className="text-body-xl text-text-secondary max-w-2xl">
            Selected projects showcasing product management, AI systems, and domain expertise
          </p>
        </div>

        {/* 3-Column Grid - GDG Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/VIKAS9793"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-primary"
          >
            View All on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

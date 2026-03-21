import { projects as staticProjects } from '@data/portfolio';
import { BentoGrid, BentoGridItem } from '@components/ui/BentoGrid';
import { cn } from '@utils';

/**
 * Get semantic M3 container color by project category
 */
function getProjectColor(title: string): 'primary' | 'secondary' | 'tertiary' | 'surface' {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('ai') || lowerTitle.includes('ml') || lowerTitle.includes('scholar')) return 'primary';
  if (lowerTitle.includes('product') || lowerTitle.includes('saral') || lowerTitle.includes('policy')) return 'secondary';
  if (lowerTitle.includes('enterprise') || lowerTitle.includes('ucp')) return 'tertiary';
  return 'surface'; // Education/other
}


/**
 * Projects Section - Vibrant Design
 */
export default function ProjectsSection() {
  const projects = staticProjects.filter(p => p.featured);

  return (
    <section
      id="projects"
      className="bg-surface-container-low py-section relative section-reveal"
      aria-labelledby="projects-heading"
    >
      <div className="container-google">
        {/* Header with decorative elements */}
        <div className="mb-12 relative">
          <div className="mb-4">
            <h2 id="projects-heading" className="text-display-xl text-primary font-medium">
              Products I Have Built and Measured
            </h2>
          </div>
          <p className="text-body-lg text-on-surface-variant max-w-2xl font-medium">
            AI-driven solutions built with product analytics and early adoption tracking.
          </p>
        </div>

        {/* Bento Grid - Vibrant Style */}
        <BentoGrid className="max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const color = getProjectColor(project.title);
            return (
              <BentoGridItem
                key={project.id}
                title={project.title}
                description={project.description}
                tagline={project.tagline}
                isFlagship={project.isFlagship}
                pmSections={project.pmSections}
                header={
                  <div className="space-y-3">
                    {/* Project Image */}
                    {project.image && (
                      <div className={cn(
                        "w-full rounded-lg overflow-hidden border border-outline-variant/20 relative group-hover:shadow-md transition-all",
                        project.isFlagship ? "h-56" : "h-40"
                      )}>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-2">
                       {project.technologies.slice(0, project.isFlagship ? 5 : 3).map((tech, idx) => (
                         <span
                           key={tech}
                           className={`
                             px-3 py-1.5 
                             ${idx % 3 === 0 ? 'bg-primary-container text-on-primary-container border border-outline-variant' : ''}
                             ${idx % 3 === 1 ? 'bg-secondary-container text-on-secondary-container border border-outline-variant' : ''}
                             ${idx % 3 === 2 ? 'bg-tertiary-container text-on-tertiary-container border border-outline-variant' : ''}
                             text-[11px] font-medium rounded-full
                           `}
                         >
                           {tech}
                         </span>
                       ))}
                     </div>
                  </div>
                }
                icon={
                  <div className="mb-2">
                    <span className={`text-title-sm font-medium uppercase text-${color === 'surface' ? 'on-surface' : color}`}>
                      {project.category === 'ai' ? 'AI Product' : project.category}
                    </span>
                  </div>
                }
                className={project.isFlagship || index === 3 ? "md:col-span-2" : ""}
                onClick={() => window.open(project.links?.[0]?.url, "_blank")}
              />
            );
          })}
        </BentoGrid>

        {/* GitHub CTA - Vibrant styling reduced to semantics */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/VIKAS9793"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-pill font-medium transition-all duration-200 bg-primary text-on-primary px-8 py-4 text-lg hover:shadow-elevation-3"
          >
            View All on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

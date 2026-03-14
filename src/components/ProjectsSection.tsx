import { projects as staticProjects } from '@data/portfolio';
import SpeechBubble from '@components/ui/SpeechBubble';
import { StarIcon } from '@components/ui/SocialIcons';
import { BentoGrid, BentoGridItem } from '@components/ui/BentoGrid';
import { cn } from '@utils';

/**
 * Get vibrant color by project category
 */
function getProjectColor(title: string): 'cyan' | 'pink' | 'orange' | 'green' {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('ai') || lowerTitle.includes('ml') || lowerTitle.includes('scholar')) return 'cyan';
  if (lowerTitle.includes('product') || lowerTitle.includes('saral') || lowerTitle.includes('policy')) return 'pink';
  if (lowerTitle.includes('enterprise') || lowerTitle.includes('ucp')) return 'orange';
  return 'green'; // Education/other
}


/**
 * Projects Section - Vibrant Design
 */
export default function ProjectsSection() {
  const projects = staticProjects.filter(p => p.featured);

  return (
    <section
      id="projects"
      className="bg-vibrant-light-beige py-section relative"
      aria-labelledby="projects-heading"
    >
      <div className="container-google">
        {/* Header with decorative elements */}
        <div className="mb-12 relative">
          <div className="flex items-center gap-4 mb-4">
            <h2 id="projects-heading" className="text-display-xl text-text-primary font-black">
              Products I Have Built and Measured
            </h2>
            <div className="hidden md:block">
              <StarIcon color="#FF69B4" size={40} />
            </div>
          </div>
          <p className="text-body-lg text-text-secondary max-w-2xl font-semibold">
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
                            px-2 py-1 
                            ${idx % 3 === 0 ? 'bg-vibrant-cyan/10 text-vibrant-cyan border border-vibrant-cyan/20' : ''}
                            ${idx % 3 === 1 ? 'bg-vibrant-pink/10 text-vibrant-pink border border-vibrant-pink/20' : ''}
                            ${idx % 3 === 2 ? 'bg-vibrant-yellow/10 text-vibrant-yellow border border-vibrant-yellow/20' : ''}
                            text-[10px] font-bold rounded-full
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
                    <SpeechBubble color={color} size="sm" tailDirection="none">
                      <span className="text-title-sm font-bold uppercase">
                        {project.category === 'ai' ? 'AI Product' : project.category}
                      </span>
                    </SpeechBubble>
                  </div>
                }
                className={project.isFlagship || index === 3 ? "md:col-span-2" : ""}
                onClick={() => window.open(project.links?.[0]?.url, "_blank")}
              />
            );
          })}
        </BentoGrid>

        {/* GitHub CTA - Vibrant styling */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/VIKAS9793"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-pill font-bold transition-all duration-200 bg-vibrant-pink text-black border-2 border-black px-8 py-4 text-lg hover:scale-105 hover:bg-vibrant-orange hover:shadow-elevation-3"
          >
            View All on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

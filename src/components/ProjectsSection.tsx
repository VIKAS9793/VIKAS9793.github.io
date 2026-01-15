import type { Project } from '@types';
import { projects as staticProjects } from '@data/portfolio';
import SpeechBubble from '@components/ui/SpeechBubble';
import { StarIcon, PlusSignIcon } from '@components/ui/SocialIcons';

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
 * Project Card - Vibrant Design
 */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const color = getProjectColor(project.title);

  return (
    <div className="bg-white border-punchy-lg border-black rounded-card p-6 hover:shadow-xl hover:scale-105 transition-all flex flex-col h-full relative overflow-visible">
      {/* Decorative icon */}
      <div className="absolute -top-3 -right-3 z-10">
        {index % 2 === 0 ? (
          <StarIcon color="#FFD700" size={28} />
        ) : (
          <PlusSignIcon color="#00D4FF" size={24} />
        )}
      </div>

      {/* Title in Speech Bubble */}
      <div className="mb-4 -mx-2">
        <SpeechBubble color={color} size="md" tailDirection="none">
          <span className="text-punchy-sm">{project.title}</span>
        </SpeechBubble>
      </div>

      {/* Description */}
      <p className="text-base text-text-secondary mb-4 flex-grow font-medium leading-relaxed">
        {project.description}
      </p>

      {/* Tech tags - Vibrant colors */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 4).map((tech, idx) => (
          <span
            key={tech}
            className={`
              px-3 py-1.5 
              ${idx % 4 === 0 ? 'bg-vibrant-cyan/20 border-vibrant-cyan' : ''}
              ${idx % 4 === 1 ? 'bg-vibrant-pink/20 border-vibrant-pink' : ''}
              ${idx % 4 === 2 ? 'bg-vibrant-yellow/20 border-vibrant-yellow' : ''}
              ${idx % 4 === 3 ? 'bg-vibrant-green/20 border-vibrant-green' : ''}
              border-2 text-black text-xs font-bold rounded-pill
            `}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links - Vibrant styling */}
      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-black">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-4 py-2 text-sm font-bold text-black bg-vibrant-yellow hover:bg-vibrant-orange rounded-pill border-punchy-md border-black transition-all hover:scale-105"
            >
              {link.label}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      )}
    </div>
  );
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
              Featured Work
            </h2>
            <div className="hidden md:block">
              <StarIcon color="#FF69B4" size={40} />
            </div>
          </div>
          <p className="text-lg text-text-secondary max-w-2xl font-semibold">
            Selected projects showcasing product management, AI systems, and domain expertise
          </p>
        </div>

        {/* 3-Column Grid - Vibrant Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub CTA - Vibrant styling */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/VIKAS9793"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-pill font-bold transition-all duration-200 bg-vibrant-pink text-black border-punchy-lg border-black px-8 py-4 text-lg hover:scale-105 hover:bg-vibrant-orange"
          >
            View All on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

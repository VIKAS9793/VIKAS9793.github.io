import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ProjectsSectionProps, Project } from '@types';
import SafeLink from './SafeLink';
import SectionHeader from '@components/ui/SectionHeader';
import Card from '@components/ui/Card';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ project }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  // image onError fallback
  const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/images/fallback.svg';
  };

  return (
    <article ref={cardRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
      <div className="order-2 lg:order-1">
        <Card className="relative aspect-[16/10] overflow-hidden group">
          <img
            src={project.image}
            alt={`Screenshot of ${project.title} - ${project.description.slice(0, 100)}...`}
            onError={onImgError}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-xl" />
          
          {/* Project category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-semibold bg-primary-500/90 text-black rounded-full backdrop-blur-sm">
              {project.category.toUpperCase()}
            </span>
          </div>
        </Card>
      </div>

      <div className="order-1 lg:order-2 space-y-6">
        <header>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
            {project.title}
          </h3>
          <p className="text-body text-gray-300 leading-relaxed">
            {project.description}
          </p>
          {project.longDescription && (
            <p className="text-caption text-gray-400 mt-2">
              {project.longDescription}
            </p>
          )}
        </header>

        {/* Key metrics */}
        {project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-3 p-4 bg-gradient-to-r from-primary-500/10 to-secondary-500/5 border border-primary-500/20 rounded-lg backdrop-blur-sm">
            {project.metrics.slice(0, 2).map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-lg font-bold text-primary-500">{m.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Technology tags */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-white/10 text-gray-300 rounded-full border border-white/20 hover:border-primary-500/50 hover:text-primary-500 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 6 && (
            <span className="px-3 py-1 text-sm text-gray-500 rounded-full border border-gray-600">
              +{project.technologies.length - 6} more
            </span>
          )}
        </div>

        {/* Project links */}
        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <SafeLink
                key={link.url}
                href={link.url}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 hover:bg-primary-500/20 border border-primary-500/30 hover:border-primary-500/50 text-primary-500 font-medium rounded-lg transition-all duration-200 focus-ring"
                aria-label={`View ${project.title} ${link.type}`}
              >
                <span>{link.label}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </SafeLink>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function ProjectsSection({ projects, title = 'Featured Projects', subtitle = 'Production-ready AI solutions delivering measurable business impact' }: ProjectsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Parallax background hint (decorative)
      const deco = el.querySelector('.deco');
      if (deco) {
        gsap.to(deco, {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="section-spacing relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Background Image - Code & Innovation */}
      <div className="absolute inset-0 -z-10" role="img" aria-hidden="true">
        <img 
          src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=3270&auto=format&fit=crop" 
          alt=""
          className="w-full h-full object-cover opacity-8"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      </div>
      <div className="deco absolute -z-10 inset-0 bg-gradient-to-b from-primary-500/5 to-transparent" />

      <div className="container-center">
        <SectionHeader 
          eyebrow="[ Portfolio ]" 
          title={title} 
          subtitle={subtitle} 
          accent="primary"
          id="projects-heading" 
        />

        <div className="flex flex-col gap-16 lg:gap-20 mt-12 lg:mt-16">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

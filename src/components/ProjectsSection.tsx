import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ProjectsSectionProps, Project } from '@types';
import SafeLink from './SafeLink';
import SectionHeader from '@components/ui/SectionHeader';
import Metric from '@components/ui/Metric';
import Tag from '@components/ui/Tag';
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
    <div ref={cardRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <Card className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          onError={onImgError}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300 rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
      </Card>

      <div>
        <h3 className="text-section-title mb-3">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>

        <div className="grid grid-cols-2 gap-3 mb-4 p-4 bg-primary-500/5 border-l-2 border-primary-500 rounded-md">
          {project.metrics.slice(0, 2).map((m) => (
            <Metric key={m.label} label={m.label} value={m.value} />
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 6).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        {project.links[0] && (
          <SafeLink href={project.links[0].url} className="btn-ghost">
            {project.links[0].label}
          </SafeLink>
        )}
      </div>
    </div>
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
    <section ref={sectionRef} id="projects" className="section-padding relative overflow-hidden">
      {/* Background Image - Code & Innovation */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=3270&auto=format&fit=crop" 
          alt="Innovation Background"
          className="w-full h-full object-cover opacity-8"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      </div>
      <div className="deco absolute -z-10 inset-0 bg-gradient-to-b from-primary-500/5 to-transparent" />

      <SectionHeader eyebrow="[ Portfolio ]" title={title} subtitle={subtitle} accent="primary" />

      <div className="container-center flex flex-col gap-20">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

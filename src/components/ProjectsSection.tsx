import { useRef, useState, useEffect } from 'react';
import type { Project } from '@types';
import PillButton from './ui/PillButton';
import { fetchPortfolioRepos, repoToProject, type PortfolioProject } from '../api/github';
import { projects as staticProjects } from '@data/portfolio';

/**
 * Carousel Card for Projects - horizontal scroll with hover lift
 */
function ProjectCarouselCard({ project }: { project: Project | PortfolioProject }) {
  // Category SVG icons
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai':
        return (
          <svg className="w-6 h-6 text-google-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'product':
        return (
          <svg className="w-6 h-6 text-google-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'web':
        return (
          <svg className="w-6 h-6 text-google-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6 text-google-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };

  return (
    <div className="carousel-card flex flex-col h-full min-h-[320px]">
      {/* Category icon */}
      <div className="w-12 h-12 rounded-full bg-section-lightgray flex items-center justify-center mb-4">
        {getCategoryIcon(project.category)}
      </div>

      {/* Title */}
      <h3 className="font-bold text-xl text-text-primary mb-2">{project.title}</h3>

      {/* Description */}
      <p className="text-text-secondary text-sm mb-4 flex-grow line-clamp-3">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 bg-section-lightgray text-text-secondary text-xs rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-4 border-t border-ui-border">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-google-blue hover:bg-google-blue/10 rounded-pill transition-colors"
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
 * Loading skeleton for carousel cards
 */
function ProjectCardSkeleton() {
  return (
    <div className="carousel-card flex flex-col h-full min-h-[320px] animate-pulse">
      <div className="w-12 h-12 rounded-full bg-gray-200 mb-4" />
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-full mb-2" />
      <div className="h-4 bg-gray-200 rounded w-2/3 mb-4" />
      <div className="flex gap-2">
        <div className="h-6 bg-gray-200 rounded-full w-16" />
        <div className="h-6 bg-gray-200 rounded-full w-20" />
      </div>
    </div>
  );
}

/**
 * Projects Section with GitHub API + Static Fallback
 */
export default function ProjectsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [projects, setProjects] = useState<(Project | PortfolioProject)[]>([]);
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState<'github' | 'static'>('static');

  // Fetch from GitHub API on mount
  useEffect(() => {
    let mounted = true;

    async function fetchProjects() {
      try {
        setLoading(true);
        const repos = await fetchPortfolioRepos();

        if (mounted && repos.length > 0) {
          const apiProjects = repos.map(repoToProject);
          setProjects(apiProjects);
          setDataSource('github');
        } else if (mounted) {
          // Fallback to static data
          setProjects(staticProjects);
          setDataSource('static');
        }
      } catch {
        // Fallback to static data on error
        if (mounted) {
          setProjects(staticProjects);
          setDataSource('static');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchProjects();

    return () => {
      mounted = false;
    };
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="projects"
      className="section-cream"
      aria-labelledby="projects-heading"
    >
      <div className="container-google">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 id="projects-heading" className="title-section mb-4">
            Featured Projects
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            {dataSource === 'github' ? (
              <>Live from GitHub • Tagged with <code className="text-xs bg-section-lightgray px-1.5 py-0.5 rounded">portfolio</code></>
            ) : (
              'Scroll horizontally to explore • Hover for details'
            )}
          </p>
        </div>

        {/* Carousel with Navigation */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-card flex items-center justify-center hover:bg-section-lightgray transition-colors -ml-4"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel */}
          <div ref={carouselRef} className="carousel-container px-8">
            {loading ? (
              // Loading skeletons
              <>
                <ProjectCardSkeleton />
                <ProjectCardSkeleton />
                <ProjectCardSkeleton />
              </>
            ) : (
              projects.map((project) => (
                <ProjectCarouselCard key={project.id} project={project} />
              ))
            )}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-card flex items-center justify-center hover:bg-section-lightgray transition-colors -mr-4"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-6 gap-2">
          <div className="w-24 h-2 bg-google-blue rounded-full" />
          <div className="w-24 h-2 bg-google-green rounded-full" />
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-8">
          <PillButton
            variant="primary"
            href="https://github.com/VIKAS9793"
            external
          >
            View All on GitHub
          </PillButton>
        </div>
      </div>
    </section>
  );
}

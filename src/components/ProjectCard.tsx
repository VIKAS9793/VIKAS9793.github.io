import { useLayoutEffect, useState } from 'react';
import type { Project } from '../content/projects';

/** Wide screens read the case open; phones collapse it so the page stays scannable. */
const WIDE = '(min-width: 48rem)';

export default function ProjectCard({ project }: { project: Project }) {
  const titleId = `project-${project.id}`;
  // Starts open so prerendered HTML and no-JS visitors get the full text.
  const [open, setOpen] = useState(true);

  useLayoutEffect(() => {
    if (typeof window.matchMedia === 'function' && !window.matchMedia(WIDE).matches) setOpen(false);
  }, []);
  return (
    <article
      className={`card project${project.featured ? ' frame project--featured' : ''}`}
      aria-labelledby={titleId}
    >
      <div className="project__head">
        <p className="project__id">
          {project.index} / {project.kind.toUpperCase()}
        </p>
        <h3 id={titleId} className="project__name">
          {project.name}
        </h3>
        <p className="badge badge--sand">{project.status}</p>
      </div>
      <p className="project__summary">{project.summary}</p>
      <details className="project__case" open={open} onToggle={(e) => setOpen(e.currentTarget.open)}>
        <summary className="project__toggle">
          <span className="project__toggle-closed">Read the case</span>
          <span className="project__toggle-open">Hide the case</span>
        </summary>
      <dl className="project__facts">
          <div>
            <dt className="label">Problem</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt className="label">Approach</dt>
            <dd>{project.approach}</dd>
          </div>
          <div>
            <dt className="label">What exists today</dt>
            <dd>
              <ul className="project__evidence">
                {project.evidence.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </details>
      <ul className="tag-list" aria-label="Built with">
        {project.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
      <div className="project__links">
        <ul className="link-list">
          {project.links.map((link) => (
            <li key={link.href}>
              <a className="button button--tertiary" href={link.href} rel="noopener noreferrer">
                {link.label}
                <span className="sr-only"> (opens in a new tab)</span>
                <span className="arrow" aria-hidden="true">
                  &#8599;
                </span>
              </a>
            </li>
          ))}
        </ul>
        {project.privateNote ? <p className="project__note">{project.privateNote}</p> : null}
      </div>
    </article>
  );
}

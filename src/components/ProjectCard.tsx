import { useId, useState } from 'react';
import type { Project } from '../content/projects';

/**
 * An expandable container card. Collapsed, every card shows the same things in the same
 * places, so all cards are the same size; the case (problem, approach, evidence, links)
 * opens smoothly in place.
 */
export default function ProjectCard({ project }: { project: Project }) {
  const uid = useId();
  const titleId = `${uid}-title`;
  const panelId = `${uid}-panel`;
  const [open, setOpen] = useState(false);
  const [primary, ...moreLinks] = project.links;

  return (
    <article
      className={`card project${project.featured ? ' frame project--featured' : ''}${open ? ' is-open' : ''}`}
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

      <ul className="tag-list project__tags" aria-label="Built with">
        {project.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>

      <div className="project__bar">
        <button
          type="button"
          className="project__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="project__chevron" aria-hidden="true" />
          <span>{open ? 'Hide details' : 'Show details'}</span>
          <span className="sr-only"> for {project.name}</span>
        </button>
        <a className="button button--tertiary" href={primary.href} rel="noopener noreferrer">
          {primary.label}
          <span className="sr-only"> (opens in a new tab)</span>
          <span className="arrow" aria-hidden="true">
            &#8599;
          </span>
        </a>
      </div>

      <div id={panelId} className="project__panel" role="region" aria-labelledby={titleId} inert={!open}>
        <div className="project__panel-inner">
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
          {moreLinks.length > 0 || project.privateNote ? (
            <div className="project__links">
              <ul className="link-list">
                {moreLinks.map((link) => (
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
          ) : null}
        </div>
      </div>
    </article>
  );
}

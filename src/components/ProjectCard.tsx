import { useId, useState } from 'react';
import { m } from 'motion/react';
import type { Project } from '../content/projects';
import { ArrowUpRight } from './Icons';

/**
 * An expandable card. Collapsed, every card shows the same parts in the same places, so all cards are
 * the same size; the case (problem, approach, evidence, links) opens smoothly in place. On hover the
 * card lifts a few pixels with a spring, and the lift never hides content.
 */
export default function ProjectCard({ project }: { project: Project }) {
  const uid = useId();
  const titleId = `${uid}-title`;
  const panelId = `${uid}-panel`;
  const [open, setOpen] = useState(false);
  const [primary, ...moreLinks] = project.links;

  return (
    <m.div className="moment__inner" whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }}>
      <article
        className={`card project${project.featured ? ' project--featured' : ''}${open ? ' is-open' : ''}`}
        aria-labelledby={titleId}
      >
        <div className="project__head">
          <div className="project__meta">
            <p className="project__id meta">
              {project.index} / {project.kind}
            </p>
            <p className="chip">{project.status}</p>
          </div>
          <h3 id={titleId} className="project__name">
            {project.name}
          </h3>
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
          <a className="text-link" href={primary.href} rel="noopener noreferrer">
            {primary.label}
            <span className="sr-only"> (opens in a new tab)</span>
            <ArrowUpRight className="arrow" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" />
          </a>
        </div>

        <div id={panelId} className="project__panel" role="region" aria-labelledby={titleId} inert={!open}>
          <div className="project__panel-inner">
            <dl className="project__facts">
              <div>
                <dt className="meta">Problem</dt>
                <dd>{project.problem}</dd>
              </div>
              <div>
                <dt className="meta">Approach</dt>
                <dd>{project.approach}</dd>
              </div>
              <div>
                <dt className="meta">What exists today</dt>
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
                      <a className="text-link" href={link.href} rel="noopener noreferrer">
                        {link.label}
                        <span className="sr-only"> (opens in a new tab)</span>
                        <ArrowUpRight className="arrow" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" />
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
    </m.div>
  );
}

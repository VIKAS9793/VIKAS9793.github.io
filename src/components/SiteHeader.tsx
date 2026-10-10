import { useEffect, useState } from 'react';
import { nav, site } from '../content/site';

/** Marks the nav link of the section currently in view. Progressive: works without it. */
function useActiveSection(ids: readonly string[]): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        }
        const top = [...visible.entries()].sort((a, b) => b[1] - a[1])[0];
        setActive(top ? top[0] : null);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = nav.map((item) => item.href.slice(1));

export default function SiteHeader() {
  const active = useActiveSection(sectionIds);

  return (
    <header className="site-header">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="container site-header__inner">
        <a className="wordmark" href="#top" aria-label={`${site.name}, back to top`}>
          <span className="wordmark__mark" aria-hidden="true">
            VS
          </span>
          <span className="wordmark__name">{site.name}</span>
        </a>
        <nav aria-label="Primary">
          <ul className="nav-list">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  className="nav-link"
                  href={item.href}
                  aria-current={active === item.href.slice(1) ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

import { useEffect, useState } from 'react';
import { useMotionValueEvent } from 'motion/react';
import { nav, site } from '../content/site';
import QuietToggle from './QuietToggle';
import ProgressBar from './motion/ProgressBar';
import { useEditorial } from './motion/editorial';

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
const keepOnPhone = new Set(['#work', '#contact']);

export default function SiteHeader() {
  const active = useActiveSection(sectionIds);
  const { scrollY } = useEditorial();
  const [stuck, setStuck] = useState(false);
  useMotionValueEvent(scrollY, 'change', (y) => setStuck(y > 24));

  const [firstName, ...rest] = site.name.split(' ');

  return (
    <>
      <ProgressBar />
      <header className={`site-header${stuck ? ' is-stuck' : ''}`}>
        <div className="container site-header__inner">
          <a className="wordmark" href="#top" aria-label={`${site.name}, back to top`}>
            <span className="wordmark__dot" aria-hidden="true" />
            <span className="wordmark__name">
              {firstName.toLowerCase()} <b>{rest.join(' ').toLowerCase()}</b>
            </span>
          </a>
          <div className="site-header__tools">
            <nav aria-label="Primary">
              <ul className="nav-list">
                {nav.map((item) => (
                  <li key={item.href} {...(keepOnPhone.has(item.href) ? { 'data-keep': '' } : {})}>
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
            <QuietToggle />
          </div>
        </div>
      </header>
    </>
  );
}

import { renderToString } from 'react-dom/server';
import { fireEvent, render, screen, within } from '@testing-library/react';
import App from '../App';
import { projects } from '../content/projects';
import { duo, site } from '../content/site';

describe('portfolio page', () => {
  it('has one h1 and the expected landmarks', () => {
    render(<App />);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument();
  });

  it('renders every project as an article with a heading', () => {
    render(<App />);
    for (const p of projects) {
      const article = screen.getByRole('article', { name: p.name });
      expect(within(article).getByText(p.status)).toBeInTheDocument();
    }
  });

  it('keeps decoration hidden from assistive technology, and every photo described', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.marquee')).toHaveAttribute('aria-hidden', 'true');
    expect(container.querySelector('.portrait__worlds')).toHaveAttribute('aria-hidden', 'true');
    // Two meaningful images, both described and with reserved dimensions: the hero portrait and the bio photo.
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAccessibleName(site.heroPhotoAlt);
    expect(images[1]).toHaveAccessibleName(site.photoAlt);
    for (const image of images) {
      expect(image).toHaveAttribute('width');
      expect(image).toHaveAttribute('height');
    }
  });

  it('sets the headline as one sentence, with the AI note on the Product side of the portrait', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(`${site.headlineLead} ${site.headlineEmphasis}`);
    // The parts must add up to the full sentence used in the page description and search results.
    expect(site.headline).toBe(`${site.headlineLead} ${site.headlineEmphasis.replace(/\.$/, '')}, with ${site.buildNote.replace(/^AI/, 'AI')}.`);
    expect(duo.right.line).toContain(site.buildNote);
    expect(screen.getByText(duo.right.line)).toBeInTheDocument();
  });

  it('opens every external link safely and labels it for screen readers', () => {
    render(<App />);
    const external = screen.getAllByRole('link').filter((a) => a.getAttribute('href')?.startsWith('https://'));
    expect(external.length).toBeGreaterThan(5);
    for (const a of external) expect(a).toHaveAttribute('rel', expect.stringContaining('noopener'));
  });

  it('offers a skip link as the first focusable element', () => {
    render(<App />);
    expect(screen.getAllByRole('link')[0]).toHaveTextContent(/skip to content/i);
  });

  it('expands a project card in place, and keeps collapsed details out of reach', () => {
    render(<App />);
    const card = screen.getByRole('article', { name: 'AndroJack MCP' });
    const toggle = within(card).getByRole('button', { name: /show details/i });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    const panel = card.querySelector('.project__panel')!;
    expect(panel).toHaveAttribute('inert');
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(panel).not.toHaveAttribute('inert');
    expect(within(card).getByRole('button', { name: /hide details/i })).toBeInTheDocument();
  });

  it('gives every card the same collapsed structure', () => {
    render(<App />);
    for (const card of screen.getAllByRole('article')) {
      for (const part of ['.project__head', '.project__summary', '.project__tags', '.project__bar', '.project__panel']) {
        expect(card.querySelector(part)).not.toBeNull();
      }
    }
  });

  it('Quiet mode is a labelled switch that calms motion for the whole page', () => {
    render(<App />);
    const toggle = screen.getByRole('button', { name: 'Quiet mode' });
    expect(toggle).toHaveAttribute('aria-pressed', 'false');
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-pressed', 'true');
    expect(document.documentElement.dataset.calm).toBe('true');
    fireEvent.click(toggle);
    expect(document.documentElement.dataset.calm).toBe('false');
  });

  it('never ships content hidden: the prerendered page has no hidden text or armed reveals', () => {
    const html = renderToString(<App />);
    expect(html).not.toMatch(/data-reveal="armed"/);
    expect(html).not.toMatch(/opacity:\s*0[;"]/);
    expect(html).toContain(site.headlineEmphasis);
    // The hero is the real photograph until the page is running: the worlds are not switched on yet.
    expect(html).not.toContain('data-ready');
  });
});

import { render, screen, within } from '@testing-library/react';
import App from '../App';
import { projects } from '../content/projects';

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

  it('gives the portrait a meaningful alt text and dimensions', () => {
    render(<App />);
    const img = screen.getByRole('img', { name: /illustrated portrait of vikas sahani/i });
    expect(img).toHaveAttribute('width');
    expect(img).toHaveAttribute('height');
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
});

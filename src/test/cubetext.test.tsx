import { render } from '@testing-library/react';
import CubeText from '../components/CubeText';

describe('CubeText (letters that solve like a cube)', () => {
  it('keeps the real words as ordinary document text, spaces and emphasis included', () => {
    const { container } = render(
      <CubeText as="h2">
        Four products, <em>each from a real problem.</em>
      </CubeText>,
    );
    const heading = container.querySelector('h2')!;
    expect(heading.textContent).toBe('Four products, each from a real problem.');
    expect(heading.querySelector('em')!.textContent).toBe('each from a real problem.');
  });

  it('names the heading with the full sentence for assistive technology', () => {
    const { container } = render(<CubeText as="h2">Finance first, <em>then product.</em></CubeText>);
    expect(container.querySelector('h2')).toHaveAttribute('aria-label', 'Finance first, then product.');
  });

  it('keeps the scrambled faces out of the document text', () => {
    const { container } = render(<CubeText as="h2">Hello</CubeText>);
    const faces = container.querySelectorAll('.cube__face--a, .cube__face--b, .cube__face--c');
    expect(faces).toHaveLength(15);
    for (const face of faces) {
      expect(face.textContent).toBe('');
      expect(face).toHaveAttribute('aria-hidden', 'true');
    }
  });

  it('deals the same scrambled faces every time, and never the real letter', () => {
    const first = render(<CubeText as="h2">Hello world</CubeText>);
    const deal = (root: HTMLElement) => [...root.querySelectorAll('.cube__face[data-c]')].map((f) => f.getAttribute('data-c'));
    const a = deal(first.container);
    first.unmount();
    const second = render(<CubeText as="h2">Hello world</CubeText>);
    expect(deal(second.container)).toEqual(a);
    const letters = [...second.container.querySelectorAll('.cube__face--front')].map((f) => f.textContent);
    second.container.querySelectorAll('.cube').forEach((cube, i) => {
      for (const face of cube.querySelectorAll('.cube__face[data-c]')) expect(face.getAttribute('data-c')).not.toBe(letters[i]);
    });
  });

  it('keeps each word together so a line can only break between words', () => {
    const { container } = render(<CubeText as="h2">one two</CubeText>);
    expect(container.querySelectorAll('.cube-word')).toHaveLength(2);
  });
});

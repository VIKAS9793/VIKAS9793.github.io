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

  it('keeps each word together so a line can only break between words', () => {
    const { container } = render(<CubeText as="h2">one two</CubeText>);
    expect(container.querySelectorAll('.cube-word')).toHaveLength(2);
  });
});

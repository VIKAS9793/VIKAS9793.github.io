import { fireEvent, render, screen } from '@testing-library/react';
import { duo } from '../content/site';
import { tenureAt, tenureCopy } from '../content/tenure';
import SplitPortrait from '../components/SplitPortrait';

describe('split portrait', () => {
  it('shows both words and describes the photograph', () => {
    render(<SplitPortrait calm={false} />);
    expect(screen.getByText(duo.left.word)).toBeInTheDocument();
    expect(screen.getByText(duo.right.word)).toBeInTheDocument();
    expect(screen.getByText(tenureCopy.heroLine(tenureAt(new Date())))).toBeInTheDocument();
    expect(screen.getByText(duo.right.line)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAccessibleName();
  });

  it('is a keyboard-operable slider that starts with the line in the middle', () => {
    render(<SplitPortrait calm />);
    const slider = screen.getByRole('slider', { name: duo.sliderLabel });
    expect(slider).toHaveAttribute('tabindex', '0');
    expect(slider).toHaveAttribute('aria-valuenow', '50');

    fireEvent.keyDown(slider, { key: 'ArrowLeft' });
    expect(slider).toHaveAttribute('aria-valuenow', '45');
    expect(slider).toHaveAttribute('aria-valuetext', `${duo.left.word} 45 percent, ${duo.right.word} 55 percent`);

    fireEvent.keyDown(slider, { key: 'Home' });
    expect(slider).toHaveAttribute('aria-valuenow', '0');
    fireEvent.keyDown(slider, { key: 'ArrowLeft' });
    expect(slider).toHaveAttribute('aria-valuenow', '0'); // never below the end

    fireEvent.keyDown(slider, { key: 'End' });
    fireEvent.keyDown(slider, { key: 'ArrowRight' });
    expect(slider).toHaveAttribute('aria-valuenow', '100'); // never past the other end
  });

  it('moves the one number that drives the worlds, the handle and the underlines', () => {
    const { container } = render(<SplitPortrait calm />);
    const slider = screen.getByRole('slider');
    fireEvent.keyDown(slider, { key: 'ArrowLeft' });
    fireEvent.keyDown(slider, { key: 'ArrowLeft' });
    expect((container.querySelector('.duo') as HTMLElement).style.getPropertyValue('--p')).toBe('40');
  });

  it('keeps both worlds decorative and draws the person above them', () => {
    const { container } = render(<SplitPortrait calm />);
    const worlds = container.querySelector('.portrait__worlds')!;
    expect(worlds).toHaveAttribute('aria-hidden', 'true');
    const photo = container.querySelector('.portrait__photo')!;
    // Later in the document is drawn on top: the person must come after the worlds.
    expect(worlds.compareDocumentPosition(photo) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it('ignores keys it does not use', () => {
    render(<SplitPortrait calm />);
    const slider = screen.getByRole('slider');
    fireEvent.keyDown(slider, { key: 'a' });
    expect(slider).toHaveAttribute('aria-valuenow', '50');
  });
});

const items = [
  'AI-assisted development',
  'Android apps',
  'Developer tools',
  'Mixed reality games',
  'Wealth and investment services',
  'Customer discovery',
];

/**
 * A slow band between the hero and the work. It only repeats facts the page already states, so it is
 * hidden from assistive technology, pauses on hover and stands still in calm mode.
 */
export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <div key={copy} className="marquee__group">
            {items.map((item) => (
              <span key={item} className="marquee__item">
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

import { Wave } from './Icons';
import { useEditorial } from './motion/editorial';

/** Quiet mode: switches off parallax, loops and entrance movement while keeping every word readable. */
export default function QuietToggle() {
  const { quiet, setQuiet } = useEditorial();
  return (
    <button type="button" className="quiet-toggle" aria-pressed={quiet} aria-label="Quiet mode" onClick={() => setQuiet(!quiet)}>
      <Wave aria-hidden="true" />
      <span>Quiet</span>
    </button>
  );
}

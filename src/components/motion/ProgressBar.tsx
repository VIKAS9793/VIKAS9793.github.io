import { m } from 'motion/react';
import { useEditorial } from './editorial';

/** A thin bar at the top of the window that fills as the page is read. */
export default function ProgressBar() {
  const { progress } = useEditorial();
  return <m.div className="progress-bar" aria-hidden="true" style={{ scaleX: progress }} />;
}

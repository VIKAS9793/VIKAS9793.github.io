import { useState } from 'react';

/** Copies text to the clipboard and says so. Falls back to doing nothing visible if blocked. */
export default function CopyButton({ text, label }: { text: string; label: string }) {
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle');

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setState('copied');
    } catch {
      setState('failed');
    }
    window.setTimeout(() => setState('idle'), 2400);
  }

  return (
    <>
      <button type="button" className="button button--secondary button--small" onClick={copy}>
        {state === 'copied' ? 'Copied' : state === 'failed' ? 'Copy failed' : label}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {state === 'copied' ? 'Email address copied to clipboard' : state === 'failed' ? 'Could not copy. Select the address instead.' : ''}
      </span>
    </>
  );
}

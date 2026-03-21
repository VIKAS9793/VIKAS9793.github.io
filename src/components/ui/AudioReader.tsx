import { useState, useEffect, useRef, useCallback } from 'react';

// Chrome Web Speech API silently drops utterances longer than this threshold.
const MAX_CHUNK_LENGTH = 2000;

function chunkText(text: string): string[] {
  const chunks: string[] = [];
  let remaining = text;

  while (remaining.length > 0) {
    if (remaining.length <= MAX_CHUNK_LENGTH) {
      chunks.push(remaining.trim());
      break;
    }

    // Split at the last sentence boundary within the limit.
    const slice = remaining.slice(0, MAX_CHUNK_LENGTH);
    const lastPeriod = Math.max(
      slice.lastIndexOf('. '),
      slice.lastIndexOf('? '),
      slice.lastIndexOf('! ')
    );

    const cutAt = lastPeriod > MAX_CHUNK_LENGTH / 2 ? lastPeriod + 1 : MAX_CHUNK_LENGTH;
    chunks.push(remaining.slice(0, cutAt).trim());
    remaining = remaining.slice(cutAt).trim();
  }

  return chunks.filter(c => c.length > 0);
}

function isElementVisible(el: Element): boolean {
  // offsetParent is unreliable inside overflow-hidden and fixed ancestors.
  // Use computed style instead.
  const style = window.getComputedStyle(el);
  return (
    style.display !== 'none' &&
    style.visibility !== 'hidden' &&
    style.opacity !== '0' &&
    !el.closest('nav') &&
    !el.closest('footer') &&
    !el.classList.contains('sr-only') &&
    Boolean(el.textContent?.trim())
  );
}

export default function AudioReader() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  const synthRef = useRef<SpeechSynthesis | null>(null);
  // FIX A: store utterance in a ref so Chrome cannot GC it mid-speech.
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);
  const chunksRef = useRef<string[]>([]);
  const chunkIndexRef = useRef(0);
  const keepAliveRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;

    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setIsSupported(false);
      return;
    }

    const synth = window.speechSynthesis;
    synthRef.current = synth;

    const loadVoices = () => { voicesRef.current = synth.getVoices(); };
    loadVoices();
    synth.addEventListener('voiceschanged', loadVoices);

    return () => {
      isMountedRef.current = false;
      synth.removeEventListener('voiceschanged', loadVoices);
      synth.cancel();
      utteranceRef.current = null;
      if (keepAliveRef.current !== null) clearInterval(keepAliveRef.current);
    };
  }, []);

  const stopKeepAlive = useCallback(() => {
    if (keepAliveRef.current !== null) {
      clearInterval(keepAliveRef.current);
      keepAliveRef.current = null;
    }
  }, []);

  // Speak a single chunk. Chains to the next chunk via onend.
  const speakChunk = useCallback((index: number) => {
    const synth = synthRef.current;
    if (!synth || !isMountedRef.current) return;

    const chunks = chunksRef.current;
    if (index >= chunks.length) {
      // All chunks done.
      stopKeepAlive();
      utteranceRef.current = null;
      if (isMountedRef.current) setIsPlaying(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(chunks[index]);
    // FIX A: hold a strong ref so the object is not GC'd mid-speech.
    utteranceRef.current = utterance;

    const indianVoice =
      voicesRef.current.find(
        v =>
          (v.lang.includes('en-IN') || v.lang.includes('hi-IN')) &&
          (v.name.includes('Google') || v.name.includes('Natural'))
      ) ||
      voicesRef.current.find(v => v.lang.includes('en-IN')) ||
      voicesRef.current.find(v => v.lang.includes('hi-IN'));

    if (indianVoice) utterance.voice = indianVoice;

    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      // FIX: Chrome ~15s freeze bug — keep-alive only on the first chunk.
      if (index === 0) {
        keepAliveRef.current = setInterval(() => {
          if (synth.speaking) {
            synth.pause();
            synth.resume();
          } else {
            stopKeepAlive();
          }
        }, 10000);
      }
    };

    utterance.onend = () => {
      if (!isMountedRef.current) return;
      chunkIndexRef.current = index + 1;
      speakChunk(index + 1);
    };

    utterance.onerror = (e) => {
      // 'interrupted' fires on intentional cancel — do not treat as an error.
      if ((e as SpeechSynthesisErrorEvent).error === 'interrupted') return;
      console.error('Speech error:', e);
      stopKeepAlive();
      utteranceRef.current = null;
      if (isMountedRef.current) setIsPlaying(false);
    };

    synth.speak(utterance);
  }, [stopKeepAlive]);

  const handleStop = useCallback(() => {
    stopKeepAlive();
    synthRef.current?.cancel();
    utteranceRef.current = null;
    chunksRef.current = [];
    chunkIndexRef.current = 0;
    setIsPlaying(false);
  }, [stopKeepAlive]);

  const handleStart = useCallback(() => {
    if (!synthRef.current || isPlaying) return;

    // FIX B: wait one tick so any pending Suspense renders flush into the DOM.
    setTimeout(() => {
      if (!isMountedRef.current) return;

      // FIX C: use getComputedStyle instead of offsetParent for visibility.
      const contentElements = document.querySelectorAll(
        'h1, h2, h3, p, li:not(.nav-item)'
      );

      const fullTextArr: string[] = ['Listen to this page. '];

      contentElements.forEach(el => {
        if (isElementVisible(el)) {
          const isHeading = /^H[1-6]$/.test(el.tagName);
          fullTextArr.push(
            (el.textContent ?? '').trim() + (isHeading ? '. ' : '. ')
          );
        }
      });

      const fullText = fullTextArr.join(' ').trim();

      // Guard: do not call speak() with empty or trivially short text.
      if (fullText.length < 20) return;

      // Split into chunks to avoid Chrome's silent truncation limit.
      chunksRef.current = chunkText(fullText);
      chunkIndexRef.current = 0;

      synthRef.current?.cancel();

      // Brief pause after cancel before speaking.
      setTimeout(() => {
        if (!isMountedRef.current) return;
        setIsPlaying(true);
        speakChunk(0);
      }, 150);
    }, 0);
  }, [isPlaying, speakChunk]);

  if (!isSupported) return null;

  return (
    <div className="fixed bottom-32 right-6 z-[9999]">
      <button
        onClick={isPlaying ? handleStop : handleStart}
        aria-label={isPlaying ? 'Stop reading' : 'Listen to this page'}
        title={isPlaying ? 'Stop reading' : 'Listen to this page'}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center
          hover:scale-110 active:scale-95 transition-all
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
          ${isPlaying ? 'bg-red-600 text-white' : 'bg-blue-600 text-white'}`}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <rect x="6" y="6" width="12" height="12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="ml-1"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </div>
  );
}
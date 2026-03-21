# Vikas Sahani - Portfolio

Associate Product Manager | AI Products | Developer Tools | FinTech

Live: https://myportfoliohubexpo.netlify.app
GitHub: https://github.com/VIKAS9793/VIKAS9793.github.io

---

## Stack

| Layer | Technology |
|-------|------------|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS with Material Design 3 tokens |
| Fonts | Google Sans Flex |
| Deployment | Netlify |

---

## Getting Started

```bash
git clone https://github.com/VIKAS9793/VIKAS9793.github.io.git
cd VIKAS9793.github.io
npm install
npm run dev
```

```bash
npm run build      # production build
npm run preview    # preview production build locally
npm run test       # run tests
```

---

## Project Structure

```
src/
├── App.tsx
├── data/
│   ├── portfolio.ts       # all content, projects, stats, contact
│   └── skills.ts          # skill categories
├── types/
│   └── index.ts           # TypeScript interfaces
├── components/
│   ├── Hero.tsx
│   ├── ProductLifecycle.tsx
│   ├── SkillsSection.tsx
│   ├── CaseStudy.tsx
│   ├── ProjectsSection.tsx
│   ├── AchievementsSection.tsx
│   ├── ProductSupplementary.tsx
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   └── ValueProposition.tsx
├── hooks/
│   └── useScrollAnimation.ts
└── index.css
```

---

## Content Updates

All portfolio content is sourced from `src/data/portfolio.ts`. To update projects, stats, certifications, or contact information, edit that file only. No component changes are required for content edits.

---

## AudioReader: Page Narration Feature
## Component: src/components/AudioReader.tsx

---

## What This Feature Does

Adds a floating play button that reads the visible text content of the page aloud using the browser's built-in text-to-speech engine. No external API. No data sent to any server. All processing happens locally in the browser.

---

## Release Notes

### v1.1.0 — Screen Reading Fix

**Bug fixes:**

- Fixed primary silence bug: Chrome was garbage-collecting the utterance object mid-speech. The utterance is now held in a ref for the full duration of playback.
- Fixed lazy-loaded content being missed: sections below the hero are loaded asynchronously. The DOM scrape is now deferred one tick to allow all sections to render before reading begins.
- Fixed Chrome 15-second freeze bug: an interval-based keep-alive now pauses and resumes the engine every 10 seconds to prevent the known Chrome TTS hang.
- Fixed visibility detection: replaced `offsetParent` check with `getComputedStyle` to correctly handle elements inside `overflow-hidden` and fixed-position ancestors.
- Fixed long-page truncation: Chrome silently drops utterances above approximately 2,000 characters. Content is now split at sentence boundaries and chained sequentially.
- Fixed double-click race condition: playing state is set optimistically before `speak()` is called, not after `onstart` fires.
- Fixed stale closure on `handleStart`: wrapped in `useCallback` with correct dependencies.
- Removed debug `console.log` from `onstart` and `onend` callbacks.
- Silenced the `interrupted` error that Chrome fires on intentional cancel, which was logging a false error to the console.

### v1.0.0 — Initial Release

- Play and stop button with accessible `aria-label`
- Attempts to select an Indian English voice when available
- Gracefully hides when the Web Speech API is not supported

---

## Known Limitations and Disclaimers

### Voice quality and availability depend entirely on the user's device

This feature uses the Web Speech API, which is built into the browser. It does not ship a voice. It does not call any external service. The voice you hear is the one installed on your operating system or provided by your browser.

**What this means in practice:**

- If you are on Chrome with Google TTS installed and an English voice pack, it will work well.
- If you are on a device with no TTS voices installed, it will produce no audio. The button will appear to do nothing.
- If you are on Firefox, the voice quality depends entirely on your OS. It may sound robotic or speak in an unexpected language depending on your system locale.
- Safari on iOS and macOS uses Apple's on-device voices. These work reliably but the available languages depend on what the user has installed in Settings.
- Brave and some hardened browsers disable the Speech API entirely as an anti-fingerprinting measure. The feature will not appear at all on these browsers because the API is not detected.

### Indian English voice is not guaranteed

The component attempts to find an `en-IN` or `hi-IN` voice. This voice is only available if the user has installed an Indian English language pack in their browser or OS settings. If no such voice is found, the feature falls back to the default system voice, which may be American, British, or generic depending on the device.

---

## Performance

| Category | Score |
|----------|-------|
| Performance | 97 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

---

## Contact

Vikas Sahani
vikassahani17@gmail.com
https://www.linkedin.com/in/vikas-sahani-727420358
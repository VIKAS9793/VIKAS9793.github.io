## Quantum‑Pixel Web Architect – 2025 Edition

Building a lightning‑fast, visually spellbinding portfolio that scales to planetary traffic. Every frame and millisecond is engineered for delight and resilience.

### 🔗 Live Site
- https://vikas9793.github.io/

---

### ✨ Highlights
- **Instant feel**: Critical hints, deferred heavy work, and a lean service worker deliver snappy loads.
- **Alive visuals**: GPU‑friendly motion, parallax nebula, magnetic buttons, and tasteful micro‑interactions.
- **Robust UX**: Accessible, keyboard‑friendly, and resilient on low‑power devices.

---

### 🧱 Tech Stack Overview

- **Core**
  - HTML5 semantic structure (`index.html`)
  - CSS3 with modern custom properties and fluid type scales
  - Vanilla JavaScript (no heavy frameworks)

- **Typography & Icons**
  - Google Fonts: `Inter`
  - Font Awesome 6 via CDN

- **Performance Engineering**
  - Preconnect/DNS‑prefetch for CDNs and fonts
  - Lazy initialization via `requestIdleCallback`/timeouts
  - Content‑visibility and contain‑intrinsic‑size on sections
  - IntersectionObserver for reveal/lazy effects
  - Service Worker (`sw.js`): network‑first for HTML, cache‑first for assets
  - Reduced‑motion fallbacks respected via `prefers-reduced-motion`

- **Graphics & Motion**
  - WebGL background shader (lightweight, single full‑screen quad)
  - CSS gradients, blend modes, and keyframe animations
  - Parallax using pointer tracking + `requestAnimationFrame`
  - Magnetic buttons + tilt cards (pointer‑based micro‑interactions)

- **AI/UX Layer**
  - In‑page “AI Assistant” widget with simulated analysis pipeline
  - Typing effect with variable pacing and idle/burst timing

- **Accessibility & UX**
  - High‑contrast palette on dark surface
  - Keyboard shortcuts (focus search, toggle chat, ESC to close)
  - ARIA attributes for interactive widgets

---

### 📁 Project Structure

```
index.html       # Main application document
sw.js            # Service Worker (caching strategy)
README.md        # This file
```

---

### 🚀 Running Locally

Service workers require `https` or `localhost`.

- Quick serve (Python):
  - Python 3: `python -m http.server 8080`
  - Open: `http://localhost:8080/`

Or use any static server (VS Code Live Server, http-server, serve, etc.).

---

### 📈 Performance Tactics Used

- Resource **hints**: `dns-prefetch` + `preconnect` for `cdnjs`, `fonts.googleapis.com`, `fonts.gstatic.com`
- **Defer heavies**: WebGL/init work deferred with `requestIdleCallback`/timeouts
- **Lazy effects**: IntersectionObserver for reveal and card observation
- **Cache strategy**: Network‑first HTML for freshness; cache‑first for static assets
- **Motion budget**: GPU‑friendly transforms; respects reduced‑motion

---

### 🧠 On‑Device ML & Performance (2025)

- **Tiny intent model (offline)**: `tiny_model.json` bundled, keyword‑weight scoring
- **ML Web Worker**: `modelWorker.js` runs inference off main thread
  - Progressive load: tiny model immediately, full model hook reserved for idle
  - Throttled inference (≈2 Hz) to avoid jank
- **RUM metrics**: chat input→response latency and model inference ms
- **Adaptive frame guard**: dampens parallax on frame spikes to protect 120 fps
- **Offline ready**: Service Worker caches `index.html`, `modelWorker.js`, `tiny_model.json`

How it works
- UI posts chat text to the worker; worker returns `{intent, latency, model}`
- Indicators in chat show current model and last inference time
- Full model upgrade path kept for future (idle hot‑swap)

---

### 🔧 Customization

- Swap the Google Font in the `@import` and `preconnect` lines
- Tune hero typography via the `.hero-title` `clamp()` values
- Adjust shader intensity/opacity inside `initWebGL()`
- Expand the service worker `STATIC_ASSETS` list if you add new static files

---

### ✅ Compatibility Targets

- Modern evergreen browsers (Chromium, Firefox, Safari)
- Graceful degradation when WebGL or View Transitions are unavailable

---

### 🧪 Suggested Checks (Optional)

- Lighthouse (Performance, Accessibility, Best Practices, SEO)
- WebPageTest for first‑byte and render path
- Throttle CPU/Network in DevTools to validate motion smoothness

---

### 📜 License

Personal/portfolio usage. Adapt freely for your own site.



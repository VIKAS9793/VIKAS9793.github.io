# Vikas Sahani, portfolio

Source for [vikas9793.github.io](https://vikas9793.github.io): the portfolio of a product builder from Mumbai who uses AI-assisted development to turn business problems into working products.

## Design

The site follows the **Motion Editorial** system: a warm paper canvas, one espresso dark chapter, a single terracotta accent, DM Serif Display for headlines (with one italic accent phrase), Manrope for reading and DM Mono for small labels. The layout is asymmetric, the page is paced as chapters (statement, work, a dark process chapter, the record, an invitation), and motion is there to set the pace, not to decorate.

- Tokens live in `src/styles/tokens.css`. Components read tokens and never raw hex values.
- Motion is built with [Motion](https://motion.dev) (`motion@14.3.0`, pinned): a spring-smoothed scroll progress bar, the staged hero object, per-card scroll depth and hover lift, and the cube text. Everything else is plain CSS. The animation features load in their own small chunks after the page.
- **Cube text**: headline letters turn through scrambled faces like a Rubik's cube and click into place, left to right (`src/components/CubeText.tsx`). The real letters stay in the page as ordinary text; the scrambled faces come from attributes through CSS, so they are never in the document text or read aloud.
- **Content is never hidden by animation.** The prerendered HTML, a page without JavaScript and a crawler all see everything. Only blocks still below the fold are held back after the page is running, then released as they arrive (`src/components/motion/Reveal.tsx`).
- **Quiet mode** (the switch in the header) and the system's reduced-motion setting turn off parallax, loops, entrance movement and the cube text. Every word stays readable.
- Contrast is verified two ways: `src/test/contrast.test.ts` pins the token pairs, and `npm run audit:contrast` measures every rendered text element in a real browser (`CHROME_PATH=/path/to/chrome`, with `npm run preview` running). The audit has caught issues the token test could not.
- Two deliberate deviations from the published blueprint, both for WCAG AA text contrast: running secondary text uses `--muted-ink` (`#6b5d4f`) because the blueprint's `--muted` is only 2.9 to 3.9:1 on the light grounds, and small accent text uses `--accent-ink` (`#9a4122`) and buttons use `--accent-deep` (`#a8492a`) because the bright accent is 3.9 to 4.2:1.
- Fonts are self-hosted through `@fontsource`; nothing loads from a third-party CDN.

## Content rules

All page content lives in `src/content/` and is separate from presentation.

- Only claims that can be traced to the projects themselves (versions, tool counts, statuses). Volatile numbers such as downloads and stars are left out.
- Only public repositories are linked. Private projects link to their public websites.
- No verification badges, QR codes or phone number. `src/test/content.test.ts` enforces these.

## Develop

```bash
npm install
npm run dev        # local server
npm run lint
npm run test:run   # content, contrast and page-structure tests
npm run build      # type-check, build, then prerender the page into dist/index.html
```

The build prerenders the React page into static HTML (for search engines and no-JS visitors) and hydrates it in the browser.

Pushing to `main` runs lint, tests and build, then deploys `dist/` to GitHub Pages (`.github/workflows/deploy.yml`).

## Structure

```
src/
  content/      site.ts, projects.ts (all words and links)
  components/   one file per section or card (CubeText, HeroStillLife, ProjectCard ...)
    motion/     MotionProvider, Reveal, ParallaxCard, ProgressBar, AmbientFloat
  styles/       tokens.css, base.css, components.css
  test/         contrast, content integrity, page structure, cube text
public/images/  photo (480 and 960 px WebP) and social preview
```

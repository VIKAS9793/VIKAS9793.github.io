# Vikas Sahani, portfolio

Source for [vikas9793.github.io](https://vikas9793.github.io): the portfolio of a product builder from Mumbai who uses AI-assisted development to turn business problems into working products.

## Design

The site follows the **Motion Editorial** system: a warm paper canvas, one espresso dark chapter, a single terracotta accent, DM Serif Display for headlines (with one italic accent phrase), Manrope for reading and DM Mono for small labels. The layout is asymmetric, the page is paced as chapters (statement, work, a dark process chapter, the record, an invitation), and motion is there to set the pace, not to decorate.

- Tokens live in `src/styles/tokens.css`. Components read tokens and never raw hex values.
- Motion is built with [Motion](https://motion.dev) (`motion@14.3.0`, pinned): a spring-smoothed scroll progress bar, per-card scroll depth and hover lift, and the cube text. Everything else is plain CSS. The animation features load in their own small chunks after the page.
- **Cube text**: the italic accent phrase in each headline turns through scrambled faces like a Rubik's cube and clicks into place, left to right (`src/components/CubeText.tsx`). It is kept to that one phrase on purpose, because the cost grows with the number of letters. The real letters stay in the page as ordinary text; the scrambled faces come from attributes through CSS, so they are never in the document text or read aloud.
- **Content is never hidden by animation.** The prerendered HTML, a page without JavaScript and a crawler all see everything. Only blocks still below the fold are held back after the page is running, then released as they arrive (`src/components/motion/Reveal.tsx`).
- **Quiet mode** (the switch in the header) and the system's reduced-motion setting turn off parallax, loops, entrance movement and the cube text. Every word stays readable.
- Contrast is verified two ways: `src/test/contrast.test.ts` pins the token pairs, and `npm run audit:contrast` measures every rendered text element in a real browser (`CHROME_PATH=/path/to/chrome`, with `npm run preview` running). The audit has caught issues the token test could not.
- Two deliberate deviations from the published blueprint, both for WCAG AA text contrast: running secondary text uses `--muted-ink` (`#6b5d4f`) because the blueprint's `--muted` is only 2.9 to 3.9:1 on the light grounds, and small accent text uses `--accent-ink` (`#9a4122`) and buttons use `--accent-deep` (`#a8492a`) because the bright accent is 3.9 to 4.2:1.
- Fonts are self-hosted through `@fontsource`; nothing loads from a third-party CDN.


### Hero portrait

The hero is one portrait with two worlds behind it: **Finance** on the left of a draggable line and **Product** on the right. The photo is the real picture from the first paint. After the page has loaded, a second copy of the person, cut out from the background (`public/images/vikas-cutout-720.webp`), is laid exactly over it, and two canvases open out from the middle behind them (`themedWorlds.ts`): finance symbols (rupee, percent, charts, coins) on a ledger, and product symbols (code, cursor, wireframe, roadmap) on a dot grid. Symbols are placed in a loose grid and skipped wherever the person is, so they sit around the portrait and never over it. One CSS variable, `--p`, is the share of the frame given to the finance world; the clips, the handle and the underlines all read it, so dragging never re-renders React. The line is an accessible slider (arrow keys, Home and End). The plain photo is the page without JavaScript; Quiet mode and reduced motion skip the opening reveal.

To change the photo, replace the three `vikas-portrait-*.webp` files (3:4) and the cutout, and set `--world-finance` and `--world-product` in `tokens.css` to the photo's two background colours.

### Years in customer-facing finance

The figure is never typed. `src/content/tenure.ts` works it out from the role dates in the experience list, read the way a résumé reads them (the month someone leaves is not counted; gaps do not count; "present" runs to today). It says "nearly" within a quarter of a whole year and "over" after it, and shows the figure rounded down to a tenth (4.9+). The prerendered page uses the build date; the browser switches to the real date straight after hydrating, so the text stays right between deploys. `llms.txt` is a static file, so it says "since 2021" instead of a number.

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
  components/   one file per section or card (CubeText, SplitPortrait, ProjectCard ...)
    motion/     MotionProvider, Reveal, ParallaxCard, ProgressBar, AmbientFloat
  styles/       tokens.css, base.css, components.css
  test/         contrast, content integrity, page structure, cube text
public/images/  the bio photo (480 and 960 px) and the hero portrait (480, 720 and 960 px), WebP, and the social preview
```

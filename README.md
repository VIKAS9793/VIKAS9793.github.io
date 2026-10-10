# Vikas Sahani, portfolio

Source for [vikas9793.github.io](https://vikas9793.github.io): the portfolio of a product builder from Mumbai who uses AI-assisted development to turn business problems into working products.

## Design

The site follows the **TONAL 2D** design system: warm cream surfaces, forest green emphasis, a terracotta accent, Inter for content, JetBrains Mono for technical annotations, and restrained drafting marks (a dotted grid and a double-line frame reserved for the hero portrait and the two featured projects).

- Tokens live in `src/styles/tokens.css` in three layers: primitive, semantic, component. Components never use raw hex values.
- Contrast is verified two ways: `src/test/contrast.test.ts` pins the token pairs (including text on a grid dot), and `npm run audit:contrast` measures every rendered text element and control boundary in a real browser (`CHROME_PATH=/path/to/chrome`, with `npm run preview` running). The audit has caught issues the token test could not.
- One deliberate deviation: muted text is `#5a5e55` instead of `#696d64`, and terracotta text uses a darker ink (`#8a4a30`), because the originals fall below the WCAG AA 4.5:1 ratio on some surfaces. `src/test/contrast.test.ts` pins every text pair.
- Fonts are self-hosted through `@fontsource-variable`; nothing loads from a third-party CDN.

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

The build prerenders the React page into static HTML (for search engines and no-JS visitors) and hydrates it in the browser. Motion is CSS only and switches off for reduced-motion users.

Pushing to `main` runs lint, tests and build, then deploys `dist/` to GitHub Pages (`.github/workflows/deploy.yml`).

## Structure

```
src/
  content/      site.ts, projects.ts (all words and links)
  components/   one file per section or card
  styles/       tokens.css, base.css, components.css
  test/         contrast, content integrity, page structure
public/images/  portrait (640 and 1200 px WebP) and social preview
```

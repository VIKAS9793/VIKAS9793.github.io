// Prerenders the React app into dist/index.html so the page is real HTML before any JavaScript runs.
import { readFile, writeFile, rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { build } from 'vite';

const root = resolve(import.meta.dirname, '..');
const ssrOut = resolve(root, 'dist-ssr');

await build({
  root,
  logLevel: 'warn',
  build: { ssr: 'src/entry-server.tsx', outDir: ssrOut, emptyOutDir: true, target: 'es2022' },
});

const { render } = await import(pathToFileURL(resolve(ssrOut, 'entry-server.js')).href);
const html = render();

const indexPath = resolve(root, 'dist/index.html');
const template = await readFile(indexPath, 'utf8');
const marker = '<div id="root"></div>';
if (!template.includes(marker)) throw new Error('prerender: root marker not found in dist/index.html');

await writeFile(indexPath, template.replace(marker, `<div id="root">${html}</div>`));
// 404 page for GitHub Pages: same shell, served for unknown paths.
const notFound = `<main class="not-found"><div class="container"><p class="label">404</p><h1>Page not found</h1><p>That page does not exist. The portfolio lives on the home page.</p><p><a class="button button--primary" href="/">Go to the home page</a></p></div></main>`;
await writeFile(
  resolve(root, 'dist/404.html'),
  template
    .replace(marker, notFound)
    .replace('<title>Vikas Sahani | Product builder in Mumbai</title>', '<title>Page not found | Vikas Sahani</title>')
    .replace('<meta name="robots" content="index, follow, max-image-preview:large" />', '<meta name="robots" content="noindex" />')
    .replace(/<script type="module"[^>]*><\/script>/, ''),
);
await rm(ssrOut, { recursive: true, force: true });
console.log(`prerendered ${html.length} bytes of HTML into dist/index.html`);

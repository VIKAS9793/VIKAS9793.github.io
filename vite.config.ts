/// <reference types="vitest/config" />
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Preloads the three fonts the first screen uses (the display face, its italic and the body face), so
 * they arrive with the first paint instead of swapping in afterwards and moving the headline.
 * File names are hashed, so they are read from the build output.
 */
function preloadCriticalFonts(): Plugin {
  const wanted = [/dm-serif-display-latin-400-normal-.*\.woff2$/, /dm-serif-display-latin-400-italic-.*\.woff2$/, /manrope-latin-wght-normal-.*\.woff2$/];
  return {
    name: 'preload-critical-fonts',
    transformIndexHtml: {
      order: 'post',
      handler(_html, ctx) {
        if (!ctx.bundle) return [];
        return Object.keys(ctx.bundle)
          .filter((file) => wanted.some((re) => re.test(file)))
          .map((file) => ({
            tag: 'link',
            attrs: { rel: 'preload', as: 'font', type: 'font/woff2', crossorigin: '', href: `/${file}` },
            injectTo: 'head' as const,
          }));
      },
    },
  };
}

export default defineConfig({
  base: '/',
  plugins: [react(), preloadCriticalFonts()],
  // The build day, so the prerendered page and the first browser render agree on anything that depends on the date.
  define: { __BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 10)) },
  build: { target: 'es2022', cssMinify: true },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: false,
  },
});

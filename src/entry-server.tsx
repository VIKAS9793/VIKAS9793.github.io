import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

/** Used at build time only: renders the page to static HTML so crawlers and no-JS visitors get the content. */
export function render(): string {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

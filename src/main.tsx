import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import '@fontsource/dm-serif-display/400.css';
import '@fontsource/dm-serif-display/400-italic.css';
import '@fontsource-variable/manrope/wght.css';
import '@fontsource/dm-mono/400.css';
import '@fontsource/dm-mono/500.css';
import './styles/tokens.css';
import './styles/base.css';
import './styles/components.css';
import App from './App';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// The build prerenders the page into #root; hydrate it when present, otherwise render fresh (dev server).
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);

import SiteHeader from './components/SiteHeader';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Work from './components/Work';
import Games from './components/Games';
import Approach from './components/Approach';
import About from './components/About';
import Contact from './components/Contact';
import SiteFooter from './components/SiteFooter';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Highlights />
        <Work />
        <Games />
        <Approach />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

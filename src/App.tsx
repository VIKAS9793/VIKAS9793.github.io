import SiteHeader from './components/SiteHeader';
import Hero from './components/Hero';
import Work from './components/Work';
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
        <Work />
        <Approach />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

import SiteHeader from './components/SiteHeader';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Work from './components/Work';
import Games from './components/Games';
import Approach from './components/Approach';
import About from './components/About';
import Contact from './components/Contact';
import SiteFooter from './components/SiteFooter';
import MotionProvider from './components/motion/MotionProvider';

export default function App() {
  return (
    <MotionProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Marquee />
        <Work />
        <Games />
        <Approach />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </MotionProvider>
  );
}

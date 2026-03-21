import './index.css';
import { lazy, Suspense, useEffect } from 'react';
import Hero from '@components/Hero';
import FloatingNav from '@components/ui/FloatingNav';
import ScrollButton from '@components/ui/ScrollButton';
import AudioReader from '@components/ui/AudioReader';
import LoadingSpinner from '@components/ui/LoadingSpinner';
import { personalInfo, contactInfo, stats } from '@data/portfolio';

// Lazy load heavy components for better initial page load
const SkillsSection = lazy(() => import('@components/SkillsSection'));
const CaseStudy = lazy(() => import('@components/CaseStudy'));
const ProjectsSection = lazy(() => import('@components/ProjectsSection'));
const AchievementsSection = lazy(() => import('@components/AchievementsSection'));
const ProductLifecycle = lazy(() => import('@components/ProductLifecycle'));
const ProductSupplementary = lazy(() => import('@components/ProductSupplementary').then(m => ({ default: () => (
    <>
      <m.MeasurementSection />
      <m.DistributionSection />
    </>
  )})));
const AboutSection = lazy(() => import('@components/AboutSection'));
const ContactSection = lazy(() => import('@components/ContactSection'));

/**
 * Loading fallback for lazy-loaded sections
 */
function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <LoadingSpinner size="lg" />
    </div>
  );
}

/**
 * Balanced Portfolio App
 * Sweet spot: Visual polish + Constraint-first content
 * Performance: Lazy loading for below-the-fold content
 */
function App() {
  useEffect(() => {
    // Reveal sections on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    // Since many sections are lazy-loaded via <Suspense>, they don't exist in the DOM on mount.
    // We use a MutationObserver to detect when they are injected and then observe them.
    const handleMutations = () => {
      const elements = document.querySelectorAll('.animate-on-scroll:not(.is-observed), .section-reveal:not(.is-observed), .stat-entrance:not(.is-observed)');
      elements.forEach((el) => {
        el.classList.add('is-observed');
        observer.observe(el);
      });
    };

    const mutationObserver = new MutationObserver(() => {
      handleMutations();
    });

    // Start observing the document body for injected nodes
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    
    // Initial check for elements already in the DOM (like Hero)
    handleMutations();

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-surface text-on-surface">
      {/* Floating Navigation */}
      <FloatingNav />

      {/* Scroll Button */}
      <ScrollButton />

      {/* Accessible Page Reader */}
      <AudioReader />

      <main role="main">
        {/* Hero - Clean text + subtle visuals (loaded immediately) */}
        <Hero personalInfo={personalInfo} stats={stats} />

        {/* Lazy load below-the-fold sections for better performance */}
        <Suspense fallback={<SectionLoader />}>
          {/* Product Lifecycle Approach */}
          <ProductLifecycle />

          {/* Skills - Categorized cards (visual polish) */}
          <SkillsSection />

          {/* Case Study - THE CORE (constraint-first structure) */}
          <CaseStudy />

          {/* Projects - Cards with GitHub links */}
          <ProjectsSection />

          {/* Certifications & Achievements */}
          <AchievementsSection />

          {/* Product Measurement & Distribution */}
          <ProductSupplementary />

          {/* About - Inline, grounded */}
          <AboutSection />

          {/* Contact */}
          <ContactSection contactInfo={contactInfo} personalInfo={personalInfo} />
        </Suspense>
      </main>

      {/* Vibrant Footer */}
      <footer className="py-8 pb-24 text-center border-t border-outline-variant bg-surface-container">
        <div className="container-google">
          <p className="text-on-surface text-base font-medium">
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
          <p className="text-on-surface-variant text-sm mt-2 font-medium">
            Built with constraint-first thinking
          </p>
          <p className="text-on-surface-variant/80 text-sm mt-1 font-medium">
            Design inspired by Google's Design Language
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

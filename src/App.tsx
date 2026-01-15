import './index.css';
import { lazy, Suspense } from 'react';
import Hero from '@components/Hero';
import FloatingNav from '@components/ui/FloatingNav';
import ScrollButton from '@components/ui/ScrollButton';
import LoadingSpinner from '@components/ui/LoadingSpinner';
import { personalInfo, contactInfo, stats } from '@data/portfolio';

// Lazy load heavy components for better initial page load
const SkillsSection = lazy(() => import('@components/SkillsSection'));
const CaseStudy = lazy(() => import('@components/CaseStudy'));
const ProjectsSection = lazy(() => import('@components/ProjectsSection'));
const AchievementsSection = lazy(() => import('@components/AchievementsSection'));
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
  return (
    <div className="relative min-h-screen bg-white text-text-primary">
      {/* Floating Navigation */}
      <FloatingNav />

      {/* Scroll Button */}
      <ScrollButton />

      <main role="main">
        {/* Hero - Clean text + subtle visuals (loaded immediately) */}
        <Hero personalInfo={personalInfo} stats={stats} />

        {/* Lazy load below-the-fold sections for better performance */}
        <Suspense fallback={<SectionLoader />}>
          {/* Skills - Categorized cards (visual polish) */}
          <SkillsSection />

          {/* Case Study - THE CORE (constraint-first structure) */}
          <CaseStudy />

          {/* Projects - Cards with GitHub links */}
          <ProjectsSection />

          {/* Achievements - Product Titans & Certifications */}
          <AchievementsSection />

          {/* About - Inline, grounded */}
          <AboutSection />

          {/* Contact */}
          <ContactSection contactInfo={contactInfo} personalInfo={personalInfo} />
        </Suspense>
      </main>

      {/* Vibrant Footer */}
      <footer className="py-8 pb-24 text-center border-t-punchy-lg border-black bg-vibrant-pink/10">
        <div className="container-google">
          <p className="text-text-primary text-base font-bold">
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
          <p className="text-text-secondary text-sm mt-2 font-semibold">
            Built with constraint-first thinking
          </p>
          <p className="text-text-tertiary text-sm mt-1 font-medium">
            Design inspired by Google's Design Language
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

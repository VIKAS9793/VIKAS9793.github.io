import './index.css';
import Hero from '@components/Hero';
import SkillsSection from '@components/SkillsSection';
import CaseStudy from '@components/CaseStudy';
import ProjectsSection from '@components/ProjectsSection';
import AchievementsSection from '@components/AchievementsSection';
import ContactSection from '@components/ContactSection';
import FloatingNav from '@components/ui/FloatingNav';
import ScrollButton from '@components/ui/ScrollButton';
import { personalInfo, contactInfo, stats } from '@data/portfolio';

/**
 * Balanced Portfolio App
 * Sweet spot: Visual polish + Constraint-first content
 */
function App() {
  return (
    <div className="relative min-h-screen bg-white text-text-primary">
      {/* Floating Navigation */}
      <FloatingNav />

      {/* Scroll Button */}
      <ScrollButton />

      <main role="main">
        {/* Hero - Clean text + subtle visuals */}
        <Hero personalInfo={personalInfo} stats={stats} />

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
      </main>

      {/* Clean Footer */}
      <footer className="py-8 pb-24 text-center border-t border-ui-border">
        <div className="container-google">
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
          <p className="text-text-tertiary text-xs mt-2">
            Built with constraint-first thinking
          </p>
          <p className="text-text-tertiary text-xs mt-1">
            Inspired by Google's Design Language
          </p>
        </div>
      </footer>
    </div>
  );
}

/**
 * About Section - GDG Style
 */
function AboutSection() {
  return (
    <section id="about" className="bg-white py-section">
      <div className="container-google max-w-4xl">
        <h2 className="text-display-xl text-text-primary mb-8">About</h2>
        <div className="text-body-md text-text-secondary leading-relaxed space-y-6">
          <p>
            I transitioned into product management after 4+ years in banking operations
            at HDFC Bank and IndusInd Bank. I understand regulated environments,
            compliance constraints, and the operational friction that comes with them.
          </p>
          <p>
            I'm drawn to problems where clarity matters more than speed. Insurance,
            lending, identity verification, government systems. In these domains,
            getting it wrong has consequences.
          </p>
          <p>
            I care about constraint documentation, explicit non-goals, and
            understanding why things <em>can't</em> be done before proposing
            what <em>should</em> be done.
          </p>
          <div className="flex flex-wrap gap-3 pt-6">
            <span className="px-4 py-2 bg-google-blue/10 text-google-blue border border-google-blue/30 rounded-pill text-sm font-medium">
              IBM AI PM Certified
            </span>
            <span className="px-4 py-2 bg-google-green/10 text-google-green border border-google-green/30 rounded-pill text-sm font-medium">
              Google Project Mgmt
            </span>
            <span className="px-4 py-2 bg-google-yellow/10 text-google-yellow border border-google-yellow/30 rounded-pill text-sm font-medium">
              DeepLearning.AI LLMs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;

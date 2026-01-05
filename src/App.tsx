import './index.css';
import Hero from '@components/Hero';
import SkillsSection from '@components/SkillsSection';
import CaseStudy from '@components/CaseStudy';
import ProjectsSection from '@components/ProjectsSection';
import ContactSection from '@components/ContactSection';
import FloatingNav from '@components/ui/FloatingNav';
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

      <main role="main">
        {/* Hero - Clean text + subtle visuals */}
        <Hero personalInfo={personalInfo} stats={stats} />

        {/* Skills - Categorized cards (visual polish) */}
        <SkillsSection />

        {/* Case Study - THE CORE (constraint-first structure) */}
        <CaseStudy />

        {/* Projects - Cards with GitHub links */}
        <ProjectsSection />

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
        </div>
      </footer>
    </div>
  );
}

/**
 * About Section - Short, grounded, serious
 */
function AboutSection() {
  return (
    <section id="about" className="py-16 bg-[#121212]">
      <div className="container-google max-w-3xl">
        <h2 className="text-2xl font-bold text-white mb-6">About</h2>
        <div className="text-gray-300 leading-relaxed space-y-4">
          <p>
            I transitioned into product management after 4+ years in banking operations
            at HDFC Bank and IndusInd Bank. I understand regulated environments,
            compliance constraints, and the operational friction that comes with them.
          </p>
          <p>
            I'm drawn to problems where clarity matters more than speed — insurance,
            lending, identity verification, government systems. In these domains,
            getting it wrong has consequences.
          </p>
          <p>
            I care about constraint documentation, explicit non-goals, and
            understanding why things <em>can't</em> be done before proposing
            what <em>should</em> be done.
          </p>
          <div className="flex flex-wrap gap-2 pt-4">
            <span className="px-3 py-1 bg-google-blue/20 text-google-blue border border-google-blue/30 rounded-full text-sm">
              IBM AI PM Certified
            </span>
            <span className="px-3 py-1 bg-google-green/20 text-google-green border border-google-green/30 rounded-full text-sm">
              Google Project Mgmt
            </span>
            <span className="px-3 py-1 bg-google-yellow/20 text-google-yellow border border-google-yellow/30 rounded-full text-sm">
              DeepLearning.AI LLMs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;

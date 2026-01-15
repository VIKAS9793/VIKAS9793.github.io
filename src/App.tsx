import './index.css';
import Hero from '@components/Hero';
import SkillsSection from '@components/SkillsSection';
import CaseStudy from '@components/CaseStudy';
import ProjectsSection from '@components/ProjectsSection';
import AchievementsSection from '@components/AchievementsSection';
import ContactSection from '@components/ContactSection';
import FloatingNav from '@components/ui/FloatingNav';
import ScrollButton from '@components/ui/ScrollButton';
import { StarIcon } from '@components/ui/SocialIcons';
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

/**
 * About Section - Vibrant Design
 */
function AboutSection() {
  return (
    <section id="about" className="bg-vibrant-pink/10 py-section relative">
      <div className="container-google max-w-4xl">
        {/* Header with decorative elements */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-display-xl text-text-primary font-black">About</h2>
          <div className="hidden md:block">
            <StarIcon color="#00D4FF" size={40} />
          </div>
        </div>

        <div className="space-y-8">
          {/* Story paragraphs with enhanced styling */}
          <p className="text-lg text-text-primary leading-relaxed font-medium">
            I transitioned into product management after 4+ years in banking operations
            at HDFC Bank and IndusInd Bank. I understand regulated environments,
            compliance constraints, and the operational friction that comes with them.
          </p>
          <p className="text-lg text-text-primary leading-relaxed font-medium">
            I'm drawn to problems where clarity matters more than speed. Insurance,
            lending, identity verification, government systems. In these domains,
            getting it wrong has consequences.
          </p>
          <p className="text-lg text-text-primary leading-relaxed font-medium">
            I care about constraint documentation, explicit non-goals, and
            understanding why things <em className="font-bold text-vibrant-pink">can't</em> be done before proposing
            what <em className="font-bold text-vibrant-cyan">should</em> be done.
          </p>

          {/* Certifications with vibrant badges */}
          <div className="flex flex-wrap gap-4 pt-6">
            <span className="px-5 py-3 bg-vibrant-cyan text-black border-punchy-md border-black rounded-pill text-sm font-bold hover:scale-105 transition-transform">
              IBM AI PM Certified
            </span>
            <span className="px-5 py-3 bg-vibrant-green text-black border-punchy-md border-black rounded-pill text-sm font-bold hover:scale-105 transition-transform">
              Google Project Mgmt
            </span>
            <span className="px-5 py-3 bg-vibrant-yellow text-black border-punchy-md border-black rounded-pill text-sm font-bold hover:scale-105 transition-transform">
              DeepLearning.AI LLMs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;

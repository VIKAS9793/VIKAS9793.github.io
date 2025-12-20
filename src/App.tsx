import './index.css';
import Hero from '@components/Hero';
import ValueProposition from '@components/ValueProposition';
import ProjectsSection from '@components/ProjectsSection';
import SkillsSection from '@components/SkillsSection';
import CertificationsSection from '@components/CertificationsSection';
import CaseStudy from '@components/CaseStudy';
import ContactSection from '@components/ContactSection';
import FloatingNav from '@components/ui/FloatingNav';
import { personalInfo, certifications, contactInfo, stats } from '@data/portfolio';

function App() {
  return (
    <div className="relative min-h-screen bg-white text-text-primary">
      {/* Floating Navigation */}
      <FloatingNav />

      <main role="main">
        {/* Hero Section - White bg with tooltips */}
        <Hero personalInfo={personalInfo} stats={stats} />

        {/* Value Proposition - What I'm Best At */}
        <ValueProposition />

        {/* Skills Section - Dark bg, Primary/Secondary */}
        <SkillsSection />

        {/* Featured Case Study - Netflix */}
        <CaseStudy />

        {/* Projects Section - Fetches from GitHub API */}
        <ProjectsSection />

        {/* Certifications Section - Light Blue bg, Collapsible */}
        <CertificationsSection certifications={certifications} />

        {/* Contact Section - White bg */}
        <ContactSection contactInfo={contactInfo} personalInfo={personalInfo} />
      </main>

      {/* Footer */}
      <footer className="section-white py-8 pb-24 text-center border-t border-ui-border">
        <div className="container-google space-y-3">
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
          <p className="text-text-tertiary text-xs">
            Crafted with precision • Powered by innovation
          </p>
          <p className="text-text-tertiary text-[10px] opacity-60">
            Typography:{' '}
            <a
              href="https://fonts.google.com/specimen/Google+Sans+Flex"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-google-blue transition-colors"
            >
              Google Sans Flex
            </a>
            {' '}• Design inspired by{' '}
            <a
              href="https://design.google/library/google-sans-flex-font"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-google-blue transition-colors"
            >
              Google Design
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

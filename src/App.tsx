import './index.css';
import Hero from '@components/Hero';
import ValueProposition from '@components/ValueProposition';
import ProjectsSection from '@components/ProjectsSection';
import SkillsSection from '@components/SkillsSection';
import CertificationsSection from '@components/CertificationsSection';
import CaseStudy from '@components/CaseStudy';
import ContactSection from '@components/ContactSection';
import FloatingNav from '@components/ui/FloatingNav';
import { personalInfo, projects, certifications, contactInfo, stats } from '@data/portfolio';

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

        {/* Projects Section - Yellow/Cream bg */}
        <ProjectsSection projects={projects} />

        {/* Certifications Section - Light Blue bg, Collapsible */}
        <CertificationsSection certifications={certifications} />

        {/* Contact Section - White bg */}
        <ContactSection contactInfo={contactInfo} personalInfo={personalInfo} />
      </main>

      {/* Footer */}
      <footer className="section-white py-8 text-center border-t border-ui-border">
        <div className="container-google">
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
          <p className="text-text-tertiary text-xs mt-1">
            Crafted with precision • Powered by innovation
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

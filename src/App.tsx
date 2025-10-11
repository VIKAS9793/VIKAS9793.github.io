import { useEffect, useState } from 'react';
import './index.css';
import ModernBackground from '@components/ModernBackground';
import IntroAnimation from '@components/IntroAnimation';
import Hero from '@components/Hero';
import ProjectsSection from '@components/ProjectsSection';
import CertificationsSection from '@components/CertificationsSection';
import ContactSection from '@components/ContactSection';
import { personalInfo, projects, certifications, contactInfo, stats } from '@data/portfolio';
import { enableSmoothScroll } from './utils/smoothScroll';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  // Enable smooth scrolling for all anchor links
  useEffect(() => {
    enableSmoothScroll();
  }, []);

  // Show intro animation on first load
  if (showIntro) {
    return (
      <IntroAnimation 
        name={personalInfo.name}
        title={personalInfo.title}
        tagline={personalInfo.tagline}
        onComplete={() => setShowIntro(false)} 
      />
    );
  }
  
  return (
    <div 
      className="relative min-h-screen bg-black text-white" 
      style={{ 
        contain: 'layout style paint',
      }}
    >
      {/* Modern CSS-only animated background */}
      <ModernBackground variant="hero" />

      <main>
        {/* Cinematic Hero */}
        <Hero personalInfo={personalInfo} stats={stats} />

        {/* Projects with scroll storytelling */}
        <ProjectsSection projects={projects} />

        {/* Certifications */}
        <CertificationsSection certifications={certifications} />

        {/* Contact */}
        <ContactSection contactInfo={contactInfo} personalInfo={personalInfo} />
      </main>

      <footer className="py-10 text-center text-sm text-gray-500">
        <div>&copy; {new Date().getFullYear()} {personalInfo.name}</div>
        <div className="opacity-60 mt-1 font-mono">Crafted with precision // Powered by innovation</div>
      </footer>
    </div>
  );
}

export default App

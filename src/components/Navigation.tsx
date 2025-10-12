import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { cn } from '@utils';
import Logo from '@components/ui/Logo';
import ThemeToggle from '@components/ui/ThemeToggle';

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Home', href: '#hero', icon: '🏠' },
  { id: 'projects', label: 'Projects', href: '#projects', icon: '🚀' },
  { id: 'skills', label: 'Skills', href: '#skills', icon: '⚡' },
  { id: 'certifications', label: 'Certs', href: '#certifications', icon: '🎯' },
  { id: 'contact', label: 'Contact', href: '#contact', icon: '💬' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  // Handle scroll events for navbar visibility and active section
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.getBoundingClientRect().top + window.scrollY <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (href: string, id: string) => {
    const element = document.querySelector(href);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 100;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  // Animate active indicator
  useEffect(() => {
    if (!navRef.current || !indicatorRef.current) return;

    const activeItem = navRef.current.querySelector(`[data-nav-id="${activeSection}"]`);
    if (activeItem) {
      const itemRect = activeItem.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();
      const left = itemRect.left - navRect.left;
      const width = itemRect.width;

      gsap.to(indicatorRef.current, {
        x: left,
        width: width,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  }, [activeSection]);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        ref={navRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'bg-black/80 backdrop-blur-xl border-b border-primary-500/20 shadow-lg' 
            : 'bg-transparent'
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-center">
          <div className="flex items-center justify-between py-4 px-4">
            {/* Logo/Brand */}
            <Logo 
              size="md"
              showText={true}
              animated={false}
              onClick={() => scrollToSection('#hero', 'hero')}
              className="hover:scale-105 transition-transform"
            />

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4 relative">
              {/* Theme Toggle */}
              <ThemeToggle />
              
              <div className="flex space-x-1 relative bg-white/5 rounded-full p-1 backdrop-blur-sm border border-white/10">
                {/* Active indicator */}
                <div
                  ref={indicatorRef}
                  className="absolute top-1 bottom-1 bg-primary-500/20 rounded-full border border-primary-500/30 transition-all duration-300"
                />
                
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    data-nav-id={item.id}
                    onClick={() => scrollToSection(item.href, item.id)}
                    className={cn(
                      'relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 z-10',
                      activeSection === item.id
                        ? 'text-primary-500 bg-primary-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    )}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                  >
                    <span className="flex items-center space-x-1">
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <motion.div
                animate={isMobileMenuOpen ? 'open' : 'closed'}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 }
                  }}
                  className="w-6 h-0.5 bg-white block transform origin-center transition-all"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className="w-6 h-0.5 bg-white block mt-1 transition-all"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 }
                  }}
                  className="w-6 h-0.5 bg-white block mt-1 transform origin-center transition-all"
                />
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-0 z-40 md:hidden"
          >
            <div className="bg-black/95 backdrop-blur-xl border-b border-primary-500/20 mt-20">
              <div className="container-center px-4 py-6">
                <nav className="space-y-2" role="navigation" aria-label="Mobile navigation">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => scrollToSection(item.href, item.id)}
                      className={cn(
                        'w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all',
                        activeSection === item.id
                          ? 'bg-primary-500/10 text-primary-500 border border-primary-500/30'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      )}
                      aria-current={activeSection === item.id ? 'page' : undefined}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                      {activeSection === item.id && (
                        <div className="ml-auto w-2 h-2 bg-primary-500 rounded-full" />
                      )}
                    </motion.button>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
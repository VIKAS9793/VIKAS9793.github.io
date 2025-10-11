import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { HeroSectionProps } from '@types';
import { prefersReducedMotion } from '@utils';
import MorphingBlob from './MorphingBlob';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface FloatingButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  delay?: number;
  label?: string;
}

function FloatingButton({ children, href, className, delay = 0, label }: FloatingButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (!buttonRef.current || prefersReducedMotion()) return;

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 50, scale: 0.8, rotateZ: -10 },
      { opacity: 1, y: 0, scale: 1, rotateZ: 0, duration: 0.8, delay, ease: 'back.out(1.7)' }
    );

    const handleMouseEnter = () => {
      gsap.to(buttonRef.current, { scale: 1.05, rotateZ: 5, duration: 0.3, ease: 'power2.out' });
      setShowTooltip(true);
    };
    const handleMouseLeave = () => {
      gsap.to(buttonRef.current, { scale: 1, rotateZ: 0, duration: 0.3, ease: 'power2.out' });
      setShowTooltip(false);
    };

    buttonRef.current.addEventListener('mouseenter', handleMouseEnter);
    buttonRef.current.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      buttonRef.current?.removeEventListener('mouseenter', handleMouseEnter);
      buttonRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [delay]);

  return (
    <div className={`fixed right-8 z-50 group ${className || ''}`}>
      <a 
        ref={buttonRef} 
        href={href} 
        className="block w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-lg border border-primary-500/30 shadow-glow transition-all duration-300 hover:border-primary-500 hover:shadow-glow-lg"
        aria-label={label}
      >
        {children}
      </a>
      {label && showTooltip && (
        <div className="absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900/95 backdrop-blur-md px-4 py-2 rounded-lg border border-primary-500/30 text-sm font-medium text-white shadow-xl animate-in fade-in slide-in-from-right-2 duration-200">
          {label}
          <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-gray-900 border-r border-t border-primary-500/30" />
        </div>
      )}
    </div>
  );
}

function StatCard({ stat, index }: { stat: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!cardRef.current || prefersReducedMotion()) return;

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 100, rotateX: -45 },
      { opacity: 1, y: 0, rotateX: 0, duration: 0.8, delay: 2.5 + index * 0.15, ease: 'power3.out' }
    );

    if (numberRef.current) {
      const finalText = numberRef.current.textContent || '';
      const hasNumber = /\d/.test(finalText);
      if (hasNumber) {
        const match = finalText.match(/([₹$]*)?([\d.,]+)([A-Za-z%+]*)/);
        if (match) {
          const prefix = match[1] || '';
          const number = parseFloat(match[2].replace(/[,₹$]/g, ''));
          const suffix = match[3] || '';
          const counter = { value: 0 } as { value: number };
          gsap.to(counter, {
            value: number,
            duration: 1.5,
            delay: 3 + index * 0.15,
            ease: 'power2.out',
            onUpdate: () => {
              if (numberRef.current) numberRef.current.textContent = `${prefix}${Math.floor(counter.value).toLocaleString()}${suffix}`;
            },
            onComplete: () => {
              if (numberRef.current) numberRef.current.textContent = finalText;
            }
          });
        }
      }
    }
  }, [index]);

  return (
    <div ref={cardRef} className="glass p-6 rounded-xl text-center opacity-0 perspective-1000">
      <div className="text-3xl md:text-4xl font-bold text-primary-500 font-mono mb-2">
        <span ref={numberRef}>{stat.value}</span>
      </div>
      <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">
        {stat.label}
      </div>
    </div>
  );
}

function ScrollIndicator() {
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!indicatorRef.current || prefersReducedMotion()) return;
    gsap.fromTo(indicatorRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 4, ease: 'power2.out' });
    const line = indicatorRef.current.querySelector('.scroll-line');
    if (line) gsap.to(line, { y: 10, duration: 1.5, repeat: -1, yoyo: true, ease: 'power2.inOut' });
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#projects, main > section:nth-of-type(2)');
    if (nextSection) {
      const elementPosition = nextSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 100;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div ref={indicatorRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer opacity-0" onClick={scrollToNext}>
      <div className="flex flex-col items-center text-gray-400 hover:text-primary-500 transition-colors">
        <span className="text-xs uppercase tracking-widest mb-2 font-mono">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary-500 to-transparent relative overflow-hidden">
          <div className="scroll-line w-px h-3 bg-primary-500 absolute top-0" />
        </div>
      </div>
    </div>
  );
}

export default function Hero({ personalInfo, stats }: HeroSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion()) {
      if (titleRef.current) titleRef.current.style.opacity = '1';
      if (subtitleRef.current) subtitleRef.current.style.opacity = '1';
      return;
    }

    const tl = gsap.timeline();
    gsap.set([titleRef.current, subtitleRef.current], { opacity: 0 });

    // Title cinematic reveal - character by character
    if (titleRef.current) {
      const text = titleRef.current.textContent || '';
      titleRef.current.innerHTML = text
        .split('')
        .map((ch) => (ch === ' ' ? ' ' : `<span class="inline-block">${ch}</span>`))
        .join('');
      const chars = titleRef.current.querySelectorAll('span');
      gsap.set(chars, { opacity: 0, y: 100, rotateX: -90, transformOrigin: '50% 100%' });
      tl.to(chars, { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.03, ease: 'back.out(1.7)' }, 0.5);
    }

    // Subtitle fade in
    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out' },
        1.8
      );
    }

    // Parallax on scroll
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        if (titleRef.current) gsap.set(titleRef.current, { y: progress * -100, opacity: 1 - progress * 0.5 });
        if (subtitleRef.current) gsap.set(subtitleRef.current, { y: progress * -80, opacity: 1 - progress * 0.7 });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef as React.RefObject<HTMLElement>} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Modern Tech */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=3132&auto=format&fit=crop" 
          alt="Modern Tech Background"
          className="w-full h-full object-cover opacity-15"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
      </div>

      {/* Morphing Blob */}
      <MorphingBlob color1="#00ff88" color2="#0a84ff" opacity={0.08} />
      {/* FABs - Floating Action Buttons with clear vertical separation */}
      <FloatingButton 
        href="#projects" 
        className="bottom-32 bg-gradient-to-r from-primary-500 to-primary-400 text-black" 
        delay={3.5}
        label="View Projects"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </FloatingButton>

      <FloatingButton 
        href="#contact" 
        className="bottom-12 bg-secondary-500/90 text-white" 
        delay={4}
        label="Get in Touch"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </FloatingButton>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10 max-w-6xl">
        {/* Name - Large and Bold like Apple */}
        <h1 ref={titleRef} className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight opacity-0 perspective-1000 mb-8">
          <span className="text-gradient">{personalInfo.name}</span>
        </h1>

        {/* Tagline - Clean and Minimal */}
        <p ref={subtitleRef} className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed opacity-0 font-light">
          {personalInfo.tagline}
        </p>
        
        {/* Role/Title - Accent color */}
        <div className="text-lg md:text-xl text-primary-500 mb-16 uppercase tracking-widest font-semibold">
          {personalInfo.title}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>

      <ScrollIndicator />

      {/* Decorative */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-primary-500/20 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-20 w-32 h-32 border border-secondary-500/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
      <div className="absolute top-1/3 right-10 w-2 h-16 bg-gradient-to-b from-accent-500/50 to-transparent" />
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { prefersReducedMotion, isTouchDevice } from '@utils';

export default function LiquidCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (prefersReducedMotion() || isTouchDevice()) return;
    
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;
    let frameCount = 0;

    // Smooth cursor following
    const animateCursor = () => {
      frameCount++;
      // Update every other frame for better performance
      if (frameCount % 2 === 0) {
        // Liquid-like lag effect
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        dotX += (mouseX - dotX) * 0.35;
        dotY += (mouseY - dotY) * 0.35;

        gsap.set(cursor, { x: cursorX, y: cursorY });
        gsap.set(cursorDot, { x: dotX, y: dotY });
      }

      requestAnimationFrame(animateCursor);
    };
    animateCursor();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Magnetic effect on interactive elements
    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 2,
        backgroundColor: 'rgba(0, 255, 136, 0.2)',
        border: '2px solid rgba(0, 255, 136, 0.8)',
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(cursorDot, {
        scale: 0,
        duration: 0.3
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: 'transparent',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(cursorDot, {
        scale: 1,
        duration: 0.3
      });
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .card-glass');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  if (prefersReducedMotion() || isTouchDevice()) return null;

  return (
    <>
      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        className="fixed w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: '-20px',
          top: '-20px',
          transition: 'width 0.3s, height 0.3s'
        }}
      />
      {/* Inner dot */}
      <div
        ref={cursorDotRef}
        className="fixed w-1.5 h-1.5 bg-primary-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: '-3px',
          top: '-3px'
        }}
      />
    </>
  );
}

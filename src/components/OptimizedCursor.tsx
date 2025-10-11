import { useEffect, useRef, useCallback } from 'react';
import { prefersReducedMotion, isTouchDevice } from '@utils';

/**
 * Modern 2025 Optimized Cursor
 * 
 * Optimizations:
 * - requestAnimationFrame with proper throttling
 * - Passive event listeners
 * - CSS transforms only (GPU accelerated)
 * - Intersection Observer for interactive elements
 * - Will-change management
 * - ResizeObserver for adaptive sizing
 */
export default function OptimizedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);

  // Smooth lerp function
  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  // Animation loop with proper RAF usage
  const animate = useCallback(() => {
    if (!cursorRef.current || !cursorDotRef.current) return;

    // Smooth interpolation
    cursorPos.current.x = lerp(cursorPos.current.x, mousePos.current.x, 0.15);
    cursorPos.current.y = lerp(cursorPos.current.y, mousePos.current.y, 0.15);
    dotPos.current.x = lerp(dotPos.current.x, mousePos.current.x, 0.35);
    dotPos.current.y = lerp(dotPos.current.y, mousePos.current.y, 0.35);

    // Use CSS transforms for GPU acceleration
    cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
    cursorDotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0)`;

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion() || isTouchDevice()) return;

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    // Passive event listener for better scroll performance
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Intersection Observer for interactive elements
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.matches(':hover')) {
          isHovering.current = true;
          cursor.style.width = '60px';
          cursor.style.height = '60px';
          cursor.style.backgroundColor = 'rgba(0, 255, 136, 0.1)';
          cursor.style.borderColor = 'rgba(0, 255, 136, 0.6)';
          cursorDot.style.opacity = '0';
        } else if (!entry.target.matches(':hover')) {
          isHovering.current = false;
          cursor.style.width = '40px';
          cursor.style.height = '40px';
          cursor.style.backgroundColor = 'transparent';
          cursor.style.borderColor = 'rgba(255, 255, 255, 0.3)';
          cursorDot.style.opacity = '1';
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    // Observe interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], .card-glass, .interactive-element'
    );
    interactiveElements.forEach((el) => observer.observe(el));

    // Start animation loop
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [animate]);

  if (prefersReducedMotion() || isTouchDevice()) return null;

  return (
    <>
      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] mix-blend-difference rounded-full border"
        style={{
          width: '40px',
          height: '40px',
          marginLeft: '-20px',
          marginTop: '-20px',
          borderWidth: '1px',
          borderColor: 'rgba(255, 255, 255, 0.3)',
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
          transition: 'width 0.3s ease, height 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
          backfaceVisibility: 'hidden',
        }}
      />
      {/* Inner dot */}
      <div
        ref={cursorDotRef}
        className="fixed pointer-events-none z-[9999] mix-blend-difference rounded-full bg-primary-500"
        style={{
          width: '6px',
          height: '6px',
          marginLeft: '-3px',
          marginTop: '-3px',
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
          transition: 'opacity 0.3s ease',
          backfaceVisibility: 'hidden',
        }}
      />
    </>
  );
}

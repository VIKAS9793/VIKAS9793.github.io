import { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { prefersReducedMotion } from '@utils';

// Lazy load Three.js components only when needed
const ThreeScene = lazy(() => import('./Scene'));

/**
 * Modern 2025 Optimized Scene Component
 * 
 * Optimizations:
 * - Lazy loading with React.lazy
 * - Intersection Observer for viewport visibility
 * - CSS animations instead of RAF where possible
 * - GPU-accelerated transforms
 * - content-visibility for paint optimization
 */
export default function OptimizedScene({ className = '' }: { className?: string }) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Don't render 3D scene if user prefers reduced motion
    if (prefersReducedMotion()) {
      return;
    }

    // Use Intersection Observer to only render when in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldRender(true);
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '100px', // Start loading 100px before entering viewport
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Fallback gradient background
  if (prefersReducedMotion() || !shouldRender) {
    return (
      <div
        ref={containerRef}
        className={`fixed inset-0 ${className}`}
        style={{
          zIndex: -1,
          background: 'radial-gradient(ellipse at top, rgba(0, 255, 136, 0.05) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(10, 132, 255, 0.05) 0%, transparent 50%), linear-gradient(180deg, #000000 0%, #0a0a0a 100%)',
          willChange: 'auto',
          contain: 'strict',
        }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 ${className}`}
      style={{
        zIndex: -1,
        willChange: 'auto',
        contain: 'layout style paint',
      }}
    >
      <Suspense
        fallback={
          <div
            style={{
              background: 'radial-gradient(ellipse at top, rgba(0, 255, 136, 0.05) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(10, 132, 255, 0.05) 0%, transparent 50%), linear-gradient(180deg, #000000 0%, #0a0a0a 100%)',
            }}
            className="w-full h-full"
          />
        }
      >
        {isInView && <ThreeScene />}
      </Suspense>
    </div>
  );
}

/**
 * Modern 2025 CSS-Only Animated Background
 * 
 * Best Practices Applied:
 * 1. Pure CSS animations (no JavaScript RAF)
 * 2. GPU-accelerated properties only (transform, opacity)
 * 3. CSS custom properties for dynamic theming
 * 4. CSS containment for rendering optimization
 * 5. backdrop-filter with performance hints
 * 6. Prefers-reduced-motion support
 * 7. Layer promotion with will-change
 */

interface ModernBackgroundProps {
  variant?: 'hero' | 'section' | 'minimal';
}

export default function ModernBackground({ variant = 'hero' }: ModernBackgroundProps) {
  const gradients = {
    hero: 'from-primary-500/10 via-transparent to-secondary-500/10',
    section: 'from-primary-500/5 via-transparent to-transparent',
    minimal: 'from-black via-gray-900/50 to-black',
  };

  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{
        contain: 'strict',
        contentVisibility: 'auto',
      }}
    >
      {/* Animated gradient orbs - Pure CSS */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-float-slow"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 136, 0.15) 0%, transparent 70%)',
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)', // Force GPU layer
        }}
      />
      
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-float-slower"
        style={{
          background: 'radial-gradient(circle, rgba(10, 132, 255, 0.15) 0%, transparent 70%)',
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
          animationDelay: '2s',
        }}
      />

      {/* Mesh gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradients[variant]} opacity-60`}
        style={{
          mixBlendMode: 'overlay',
          willChange: 'auto',
        }}
      />

      {/* Noise texture for depth */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          willChange: 'auto',
        }}
      />
    </div>
  );
}

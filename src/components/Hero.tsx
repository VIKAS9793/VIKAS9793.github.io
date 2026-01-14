import type { HeroSectionProps } from '@types';

/**
 * Hero Section - GDG Design Language
 * - Two-column layout (60/40 split)
 * - 100px typography for name
 * - 4.8px thick black border on profile photo
 * - Pill-shaped primary CTA
 */
export default function Hero({ personalInfo }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="bg-white py-section-lg"
      aria-label="Introduction"
    >
      <div className="container-google">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 lg:gap-16 items-center">

          {/* Left: Text content */}
          <div>
            {/* Name - Premium 72-84px typography */}
            <h1 className="text-7xl lg:text-8xl font-bold text-text-primary mb-4 leading-none">
              {personalInfo.name}
            </h1>

            {/* Subtitle - Modern signal chips */}
            <p className="text-lg font-medium text-text-secondary mb-6">
              Product case studies • Metrics • Experimentation • Responsible AI
            </p>

            {/* Value proposition - Premium, execution-focused */}
            <p className="text-lg text-text-secondary leading-relaxed mb-4 max-w-xl">
              I build structured product case studies that focus on real user friction,
              measurable outcomes, and execution-ready decisions. My work includes problem
              framing, personas, journey mapping, prioritization (RICE), North Star metrics,
              and experiment design - built with trust, compliance, and responsible AI thinking
              where required.
            </p>

            {/* Focus areas - Domain flexibility */}
            <p className="text-base text-text-tertiary mb-6 max-w-xl">
              <span className="font-medium">Focused on:</span> Consumer journeys • Trust systems • AI-enabled workflows
            </p>

            {/* Achievement Proof Card - Premium styling */}
            <div className="mb-6 p-4 bg-google-blue/5 border border-google-blue/30 rounded-card max-w-xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1.5 bg-google-blue text-white text-sm font-medium rounded-pill">
                  🏆 Runner-up (Rank 2)
                </span>
                <span className="text-text-primary font-semibold text-sm">
                  Product Titans PM Challenge
                </span>
                <span className="text-text-secondary text-sm">
                  Score: 6.4 • Solo Team: North Star Hunter
                </span>
              </div>
              <div className="mt-2 flex gap-3">
                <a
                  href="https://youtu.be/M_D3dxxZiqI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-google-blue text-sm hover:underline font-medium"
                >
                  Watch Walkthrough →
                </a>
                <a
                  href="#achievements"
                  className="text-google-blue text-sm hover:underline font-medium"
                >
                  View Certificate →
                </a>
              </div>
            </div>

            {/* CTAs - GDG pill buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#case-study" className="btn-pill-primary">
                View Case Study →
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-pill font-medium transition-all duration-200 border-card border-black px-6 py-3 text-text-primary hover:bg-gray-50"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Right: Profile Photo - GDG thick border style */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/profile.jpg"
              alt={personalInfo.name}
              className="w-72 h-72 lg:w-80 lg:h-80 object-cover rounded-card border-thick border-black"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

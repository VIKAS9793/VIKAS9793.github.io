import type { HeroSectionProps } from '@types';
import PillButton from './ui/PillButton';

/**
 * Dark Hero - Testing darker hue version
 */
export default function Hero({ personalInfo }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex items-center bg-[#121212] relative overflow-hidden"
      aria-label="Introduction"
    >
      {/* Subtle gradient accent - darker version */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-google-blue/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-google-green/15 to-transparent rounded-full blur-3xl" />

      <div className="container-google py-16 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">

          {/* Left: Text content */}
          <div className="flex-1 max-w-2xl">
            {/* Name & Role */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">
              {personalInfo.name}
            </h1>
            <p className="text-2xl text-google-blue font-medium mb-6">
              {personalInfo.title}
            </p>

            {/* Clear value proposition */}
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Building regulated fintech products with AI at the core. From banking
              operations to sovereign AI platforms—I bridge customer needs,
              compliance constraints, and cutting-edge technology.
            </p>

            {/* Key differentiators - darker pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              <span className="px-4 py-2 bg-google-blue/20 text-google-blue border border-google-blue/30 rounded-full text-sm font-medium">
                4+ Years Fintech
              </span>
              <span className="px-4 py-2 bg-google-green/20 text-google-green border border-google-green/30 rounded-full text-sm font-medium">
                Constraint-First PM
              </span>
              <span className="px-4 py-2 bg-google-yellow/20 text-google-yellow border border-google-yellow/30 rounded-full text-sm font-medium">
                AI Product Certified
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <PillButton variant="primary" href="#case-study">
                View Case Study →
              </PillButton>
              <PillButton variant="outline" href="#projects">
                Projects
              </PillButton>
              <PillButton
                variant="outline"
                href="https://www.linkedin.com/in/vikas-sahani-727420358"
                external
              >
                LinkedIn
              </PillButton>
            </div>
          </div>

          {/* Right: Profile Photo with subtle glow */}
          <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Subtle gradient ring */}
              <div className="absolute -inset-1 bg-gradient-to-br from-google-blue via-google-green to-google-blue rounded-full opacity-60" />

              {/* Photo container */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
                <img
                  src="/images/profile.jpg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

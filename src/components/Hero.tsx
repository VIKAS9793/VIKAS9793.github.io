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
            {/* Name - GDG 100px typography */}
            <h1 className="text-display-hero text-text-primary mb-4 leading-none">
              {personalInfo.name}
            </h1>

            {/* Title */}
            <p className="text-body-xl text-text-secondary mb-8">
              {personalInfo.title}
            </p>

            {/* Value proposition */}
            <p className="text-body-md text-text-secondary leading-relaxed mb-10 max-w-xl">
              Building regulated fintech products with AI at the core. From banking
              operations to sovereign AI platforms, I bridge customer needs,
              compliance constraints, and cutting-edge technology.
            </p>

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

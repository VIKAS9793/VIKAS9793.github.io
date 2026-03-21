import type { HeroSectionProps } from '@types';

/**
 * Hero Section - Material 3 Expressive Design
 * Clean light-blue gradient with high-contrast text.
 */
export default function Hero({ personalInfo, stats }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="py-24 relative overflow-hidden hero-gradient"
      aria-label="Introduction"
    >
      <div className="container-google">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 lg:gap-16 items-center relative">

          {/* Left: Text content */}
          <div className="relative z-10">
            {/* Name */}
            <div className="relative mb-6">
              <h1 className="text-display-lg lg:text-display-xl font-bold text-[#191C1E] mb-2 leading-tight hero-entrance">
                {personalInfo.name}
              </h1>
              <p className="text-title-md font-medium text-[#005CB9] hero-entrance hero-entrance-delay-1">
                Owned a developer tool from 0 to 1. Measurable traction in 15 days. Zero paid spend.
              </p>
            </div>

            {/* Professional Title */}
            <p className="text-display-sm font-semibold text-[#191C1E] mb-6 hero-entrance hero-entrance-delay-2">
              Associate Product Manager | AI Products | Developer Tools | FinTech
            </p>
            
            {/* Value proposition */}
            <p className="text-body-lg text-[#44474E] max-w-xl mb-8 hero-entrance hero-entrance-delay-3 leading-relaxed">
              Product professional with 4+ years in regulated financial environments. I define scope, instrument analytics funnels, and iterate on activation signals. Seeking APM, AI Product, or FinTech roles where experimentation, data-driven prioritization, and stakeholder-focused execution are valued.
            </p>

            {/* Focus areas */}
            <div className="mb-10 hero-entrance hero-entrance-delay-3">
              <p className="text-body-md text-[#44474E] font-medium">
                <span className="text-[#0B57D0] font-bold">Focused on:</span> User trust in AI outputs | Constraint-first product decisions | Regulated AI deployment
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center hero-entrance hero-entrance-delay-4">
              <a
                href="#case-study"
                className="bg-[#0B57D0] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all active:scale-95"
              >
                View Case Study
              </a>
              <a
                href="#projects"
                className="border-2 border-[#74777F] text-[#0B57D0] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#D3E3FD]/20 transition-all active:scale-95"
              >
                Projects
              </a>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mt-12 max-w-xl">
              {stats?.map((stat, i) => (
                <div
                  key={stat.id}
                  className={`bg-[#D3E3FD]/30 border border-[#0B57D0]/10 rounded-2xl p-5 section-reveal stat-entrance stat-entrance-delay-${i + 1}`}
                >
                  <p className="text-display-sm font-bold text-[#0B57D0] leading-none">{stat.value}</p>
                  <p className="text-label-lg text-[#44474E] mt-2 font-medium uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Profile Photo */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative">
              <img
                src="/images/profile-avatar.png"
                alt={`${personalInfo.name} - AI Product Manager`}
                className="w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-xl border-4 border-white"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
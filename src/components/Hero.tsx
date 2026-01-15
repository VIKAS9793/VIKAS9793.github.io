import type { HeroSectionProps } from '@types';
import SpeechBubble from '@components/ui/SpeechBubble';
import DecorativeArrow from '@components/ui/DecorativeArrow';
import { ThumbsUpIcon, StarIcon, PlusSignIcon } from '@components/ui/SocialIcons';

/**
 * Hero Section - Vibrant Social Media Design
 * - Speech bubbles for key messages
 * - Decorative arrows and icons
 * - Punchy colors and bold typography
 * - Thick black borders (5px)
 */
export default function Hero({ personalInfo }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="bg-white py-section-lg relative overflow-hidden"
      aria-label="Introduction"
    >
      <div className="container-google">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 lg:gap-16 items-center relative">

          {/* Left: Text content */}
          <div className="relative z-10">
            {/* Name - Punchy typography */}
            <div className="relative">
              <h1 className="text-7xl lg:text-8xl font-black text-text-primary mb-4 leading-none">
                {personalInfo.name}
              </h1>

              {/* Decorative star icons around name */}
              <div className="absolute -top-4 -right-4 hidden lg:block">
                <StarIcon color="#FFD700" size={30} />
              </div>
              <div className="absolute -bottom-2 left-0 hidden lg:block">
                <StarIcon color="#FF69B4" size={24} />
              </div>
            </div>

            {/* Speech Bubble - Product Manager */}
            <div className="mb-6 relative">
              <SpeechBubble color="pink" size="md" tailDirection="none">
                <span className="text-punchy-md">Product Manager</span>
              </SpeechBubble>

              {/* Decorative plus sign */}
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden lg:block">
                <PlusSignIcon color="#00D4FF" size={24} />
              </div>
            </div>

            {/* Speech Bubble - AI & ML Focus */}
            <div className="mb-6 relative">
              <SpeechBubble color="cyan" size="md" tailDirection="none">
                <span className="text-punchy-sm">AI & ML Focus • Responsible AI</span>
              </SpeechBubble>
            </div>

            {/* Value proposition */}
            <p className="text-lg text-text-secondary leading-relaxed mb-4 max-w-xl">
              I build structured product case studies that focus on real user friction,
              measurable outcomes, and execution-ready decisions. My work includes problem
              framing, personas, journey mapping, prioritization (RICE), North Star metrics,
              and experiment design - built with trust, compliance, and responsible AI thinking
              where required.
            </p>

            {/* Focus areas */}
            <p className="text-base text-text-tertiary mb-6 max-w-xl">
              <span className="font-medium">Focused on:</span> Consumer journeys • Trust systems • AI-enabled workflows
            </p>

            {/* Achievement Proof Card - Vibrant styling */}
            <div className="mb-6 p-4 bg-vibrant-yellow/20 border-punchy-md border-black rounded-card max-w-xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1.5 bg-vibrant-orange text-black text-sm font-bold rounded-pill border-2 border-black">
                  🏆 Runner-up (Rank 2)
                </span>
                <span className="text-text-primary font-bold text-sm">
                  Product Titans PM Challenge
                </span>
                <span className="text-text-secondary text-sm font-semibold">
                  Score: 6.4 • Solo Team: North Star Hunter
                </span>
              </div>
              <div className="mt-2 flex gap-3">
                <a
                  href="https://youtu.be/M_D3dxxZiqI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vibrant-blue text-sm hover:underline font-bold"
                >
                  Watch Walkthrough →
                </a>
                <a
                  href="#achievements"
                  className="text-vibrant-blue text-sm hover:underline font-bold"
                >
                  View Certificate →
                </a>
              </div>
            </div>

            {/* CTAs - Vibrant pill buttons with arrow */}
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#case-study"
                className="inline-flex items-center justify-center rounded-pill font-bold transition-all duration-200 bg-vibrant-cyan text-black border-punchy-lg border-black px-8 py-4 text-lg hover:scale-105"
              >
                View Case Study →
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-pill font-bold transition-all duration-200 border-punchy-md border-black px-6 py-3 text-text-primary bg-white hover:bg-gray-50"
              >
                Projects
              </a>

              {/* Decorative arrow pointing to CTA */}
              <div className="hidden lg:block">
                <DecorativeArrow color="yellow" direction="left" size="md" />
              </div>
            </div>
          </div>

          {/* Right: Profile Photo - Vibrant border */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative">
              <img
                src="/images/profile.jpg"
                alt={personalInfo.name}
                className="w-72 h-72 lg:w-80 lg:h-80 object-cover rounded-card border-punchy-lg border-black"
              />

              {/* Decorative thumbs up */}
              <div className="absolute -bottom-4 -right-4">
                <ThumbsUpIcon color="#FFD700" size={50} />
              </div>

              {/* Decorative stars */}
              <div className="absolute -top-4 -left-4 hidden lg:block">
                <StarIcon color="#00D4FF" size={35} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { StarIcon } from '@components/ui/SocialIcons';

/**
 * About Section - Vibrant Design
 * Displays personal story, background, and key certifications
 */
export default function AboutSection() {
  return (
    <section id="about" className="bg-vibrant-pink/10 py-section relative">
      <div className="container-google max-w-4xl">
        {/* Header with decorative elements */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-display-xl text-text-primary font-black">About</h2>
          <div className="hidden md:block">
            <StarIcon color="#00D4FF" size={40} />
          </div>
        </div>

        <div className="space-y-8">
          {/* Story paragraphs with enhanced styling */}
          <p className="text-lg text-text-primary leading-relaxed font-medium">
            I work on AI products where reliability, measurement, and responsible deployment matter.
            My experience combines product execution, analytics instrumentation, and domain knowledge from
            regulated financial environments. I focus on building products that move from problem discovery
            to measurable adoption.
          </p>

          {/* Certifications with vibrant badges */}
          <div className="flex flex-wrap gap-4 pt-6">
            <span className="px-5 py-3 bg-vibrant-cyan text-black border-punchy-md border-black rounded-pill text-sm font-bold hover:scale-105 transition-transform">
              IBM AI PM Certified
            </span>
            <span className="px-5 py-3 bg-vibrant-green text-black border-punchy-md border-black rounded-pill text-sm font-bold hover:scale-105 transition-transform">
              Google Project Mgmt
            </span>
            <span className="px-5 py-3 bg-vibrant-yellow text-black border-punchy-md border-black rounded-pill text-sm font-bold hover:scale-105 transition-transform">
              DeepLearning.AI LLMs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

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
            I transitioned into product management after 4+ years in banking operations
            at HDFC Bank and IndusInd Bank. I understand regulated environments,
            compliance constraints, and the operational friction that comes with them.
          </p>
          <p className="text-lg text-text-primary leading-relaxed font-medium">
            I'm drawn to problems where clarity matters more than speed. Insurance,
            lending, identity verification, government systems. In these domains,
            getting it wrong has consequences.
          </p>
          <p className="text-lg text-text-primary leading-relaxed font-medium">
            I care about constraint documentation, explicit non-goals, and
            understanding why things <em className="font-bold text-vibrant-pink">can't</em> be done before proposing
            what <em className="font-bold text-vibrant-cyan">should</em> be done.
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

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
            Product professional with 4+ years in customer-facing financial environments
            across HDFC Bank, ICICI Bank, IndusInd Bank, and Aditya Birla Capital.
            I have owned a developer tool across the full product lifecycle — from problem
            definition to multiplatform launch and iterative growth — achieving measurable
            traction within two weeks with zero paid acquisition.
          </p>

          <p className="text-lg text-text-primary leading-relaxed font-medium">
            I believe good AI products are defined as much by what they refuse to do
            as by what they can do. The most consequential product decisions I make are
            around AI output boundaries, Human-in-the-Loop requirements, and the conditions
            under which a product should surface uncertainty rather than a confident answer.
            This matters especially in regulated domains where a wrong output carries a real
            cost to a real person.
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
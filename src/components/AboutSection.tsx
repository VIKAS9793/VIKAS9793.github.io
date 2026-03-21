

/**
 * About Section - Vibrant Design
 * Displays personal story, background, and key certifications
 */
export default function AboutSection() {
  return (
    <section id="about" className="bg-surface-container-low py-section relative section-reveal">
      <div className="container-google max-w-4xl">
        {/* Header (Clean) */}
        <div className="mb-8">
          <h2 className="text-display-xl text-text-primary font-medium">About</h2>
        </div>

        <div className="space-y-8">
          {/* Story paragraphs with enhanced styling */}
          <p className="text-lg text-on-surface leading-relaxed font-medium">
            Product professional with 4+ years in customer-facing financial environments
            across HDFC Bank, ICICI Bank, IndusInd Bank, and Aditya Birla Capital.
            I have owned a developer tool across the full product lifecycle from problem
            definition to multiplatform launch and iterative growth, achieving measurable
            traction within two weeks with zero paid acquisition.
          </p>

          <p className="text-lg text-on-surface leading-relaxed font-medium">
            I believe good AI products are defined as much by what they refuse to do
            as by what they can do. The most consequential product decisions I make are
            around AI output boundaries, Human-in-the-Loop requirements, and the conditions
            under which a product should surface uncertainty rather than a confident answer.
            This matters especially in regulated domains where a wrong output carries a real
            cost to a real person.
          </p>

          {/* Certifications with clean badges */}
          <div className="flex flex-wrap gap-4 pt-6">
            <span className="px-4 py-2 bg-primary-container text-on-primary-container rounded-full text-sm font-medium">
              IBM AI PM Certified
            </span>
            <span className="px-4 py-2 bg-primary-container text-on-primary-container rounded-full text-sm font-medium">
              Google AI Professional
            </span>
            <span className="px-4 py-2 bg-primary-container text-on-primary-container rounded-full text-sm font-medium">
              Meta Fundamentals of UI/UX
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
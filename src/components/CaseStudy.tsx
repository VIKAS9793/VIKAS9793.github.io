import { CaseStudyVideoCard } from './ui/CaseStudyVideoCard';

/**
 * Case Study Section - Multiple PM case studies
 * Showcases product thinking and evidence-based analysis
 */
export default function CaseStudy() {
    return (
        <section id="case-study" className="section-white py-section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Product Management Case Studies</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Real-world PM thinking: constraint-first design and evidence-based analysis
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <CaseStudyVideoCard
                        title="Fintech Onboarding Clarity"
                        description="How constraint-first thinking led to a lightweight AI-assisted guidance layer for regulated KYC flows without touching decision logic."
                        videoUrl="https://youtu.be/eSpfY1qSvQc"
                        figmaUrl="https://grill-menus-27764549.figma.site/"
                        label="Watch Case Study"
                    />

                    <CaseStudyVideoCard
                        title="HDFC Bank Mobile App – Friction Reduction"
                        description="Evidence-based analysis of 413K+ app store votes to identify critical friction points. Features RICE prioritization and competitive benchmarking without internal data."
                        videoUrl="https://youtu.be/DJDhdzbFQlQ"
                        figmaUrl="https://github.com/VIKAS9793/hdfc-mobile-app-pm-case-study"
                        label="Watch Walkthrough"
                    />
                </div>
            </div>
        </section>
    );
}

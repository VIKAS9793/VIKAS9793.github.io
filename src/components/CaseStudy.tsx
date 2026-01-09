import { CaseStudyVideoCard } from './ui/CaseStudyVideoCard';

/**
 * Case Study Section - GDG Design Language
 * Multiple horizontal cards showcasing PM case studies
 */
export default function CaseStudy() {
    return (
        <section id="case-study" className="section-white py-section">
            <div className="space-y-16">
                <CaseStudyVideoCard
                    title="Fintech Onboarding Clarity"
                    description="How constraint-first thinking led to a lightweight AI-assisted guidance layer for regulated KYC flows without touching decision logic."
                    videoUrl="https://youtu.be/eSpfY1qSvQc"
                    figmaUrl="https://grill-menus-27764549.figma.site/"
                    label="Case Study Walkthrough"
                    roleScope={{
                        title: "Role & Scope (PM-led Design)",
                        role: "Product Manager",
                        scope: "Product discovery, UX direction, and low-to-mid fidelity visual mockups",
                        tools: "Figma (for rapid visualization and stakeholder alignment)",
                        note: "These designs are intentionally lightweight and exploratory. They are meant to communicate product intent, flows, and edge cases—not final visual design."
                    }}
                />

                <CaseStudyVideoCard
                    title="HDFC Bank Mobile App – Friction Reduction"
                    description="Evidence-based analysis of 413K+ app store votes to identify critical friction points. Features RICE prioritization and competitive benchmarking without internal data."
                    videoUrl="https://youtu.be/DJDhdzbFQlQ"
                    label="Watch Walkthrough"
                />
            </div>
        </section>
    );
}

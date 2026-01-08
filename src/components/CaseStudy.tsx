import { CaseStudyVideoCard } from './ui/CaseStudyVideoCard';

/**
 * Case Study Section - GDG Design Language
 * Single YouTube video card showcasing Fintech Onboarding Clarity case study
 */
export default function CaseStudy() {
    return (
        <section id="case-study" className="section-white py-section">
            <CaseStudyVideoCard
                title="Fintech Onboarding Clarity"
                description="How constraint-first thinking led to a lightweight AI-assisted guidance layer for regulated KYC flows without touching decision logic."
                videoUrl="https://youtu.be/eSpfY1qSvQc"
                figmaUrl="https://grill-menus-27764549.figma.site/"
                label="Case Study Walkthrough"
            />
        </section>
    );
}

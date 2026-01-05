import { useScrollReveal } from '@hooks/useScrollAnimation';

/**
 * M3-style Skills Section with Categorized Cards
 * - 3 category cards with left-border accents
 * - Simple tag chips without proficiency levels
 */

// Skill categories data - clean, consistent Title Case
const skillCategories = [
  {
    id: 'product',
    title: 'Product Strategy',
    icon: '🎯',
    accentClass: 'skill-card-blue',
    skills: [
      'Product Discovery',
      'PRD & Spec Writing',
      'Roadmap Planning',
      'User Research',
      'MVP Scoping',
      'Metrics & KPIs',
      'Problem Framing',
      'Rapid Prototyping'
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI/ML Systems',
    icon: '🤖',
    accentClass: 'skill-card-green',
    skills: [
      'RAG Architecture',
      'Local LLMs',
      'Vector Databases',
      'AI Guardrails',
      'Model Evaluation',
      'Prompt Engineering',
      'Human-in-the-Loop',
      'Explainable AI'
    ]
  },
  {
    id: 'domain',
    title: 'Domain Expertise',
    icon: '🏦',
    accentClass: 'skill-card-yellow',
    skills: [
      'Banking Operations',
      'KYC & AML Compliance',
      'Insurance Regulations',
      'Data Privacy (DPDP)',
      'Portfolio Management',
      'Risk Frameworks',
      'Financial Products',
      'Regulated Systems'
    ]
  }
];

/**
 * Skill Category Card Component
 */
function SkillCategoryCard({
  category,
  index
}: {
  category: typeof skillCategories[0];
  index: number;
}) {
  const cardRef = useScrollReveal({ once: true });

  return (
    <div
      ref={cardRef as React.RefObject<HTMLDivElement>}
      className={`bg-white p-6 rounded-card-lg shadow-lg border border-gray-200 ${category.accentClass} animate-on-scroll stagger-${index + 1}`}
    >
      <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
        <span className="text-2xl">{category.icon}</span>
        {category.title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="skill-tag px-3 py-1.5 bg-section-lightgray rounded-pill text-sm text-text-primary cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * Skills Section - M3 Style with Categorized Cards
 */
export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-white relative"
      aria-labelledby="skills-heading"
    >
      <div className="container-google">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-mono text-google-blue uppercase tracking-wider mb-2">
            Core Skills
          </p>
          <h2 id="skills-heading" className="title-section mb-4">
            Product × Technology × Domain
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            A balanced mix of product strategy, technical understanding, and domain expertise
          </p>
        </div>

        {/* Skills Grid - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

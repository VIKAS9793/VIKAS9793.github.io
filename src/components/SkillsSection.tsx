/**
 * Skills Section - GDG Design Language
 * - Yellow background (#f9e6a9)
 * - White cards with 1.6px black borders  
 * - 32px border-radius
 * - Neo-brutalist style
 */

// Skill categories data
const skillCategories = [
  {
    id: 'product',
    title: 'Product Strategy',
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
  category
}: {
  category: typeof skillCategories[0];
}) {
  return (
    <div className="card-feature">
      <h3 className="text-display-lg text-text-primary mb-4">
        {category.title}
      </h3>

      <ul className="space-y-2">
        {category.skills.map((skill, i) => (
          <li key={i} className="text-body-md text-text-secondary">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-section-yellow py-section"
      aria-label="Skills and Expertise"
    >
      <div className="container-google">
        {/* Section Heading - GDG 72px */}
        <h2 className="text-display-xl text-text-primary mb-12">
          Expertise
        </h2>

        {/* Skill Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category) => (
            <SkillCategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

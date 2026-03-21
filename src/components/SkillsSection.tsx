

/**
 * Skills Section - Vibrant Design
 */

// Skill categories data with colors
const skillCategories = [
  {
    id: 'product',
    title: 'Product Management',
    color: 'pink' as const,
    icon: 'thumbs',
    skills: [
      'GTM Strategy',
      'MVP Scoping',
      'Roadmap Prioritization',
      'Product Lifecycle Ownership',
      'User Research',
      'A/B Experimentation',
      'OKR Definition',
      'Agile Execution',
      'Stakeholder Management'
    ]
  },
  {
    id: 'analytics',
    title: 'Product Analytics',
    color: 'yellow' as const,
    icon: 'circle',
    skills: [
      'GA4 Instrumentation',
      'Funnel Instrumentation',
      'KPI Definition',
      'Activation & Retention Metrics',
      'Channel Attribution',
      'Data-Driven Prioritization',
      'Behavioural Event Taxonomy'
    ]
  },
  {
    id: 'ai-tools',
    title: 'AI & Developer Tools',
    color: 'cyan' as const,
    icon: 'star',
    skills: [
      'Claude AI',
      'MCP Protocol',
      'Prompt Engineering',
      'AI Workflow Orchestration',
      'Agentic Development',
      'Human-in-the-Loop Design',
      'AI Output Boundary Definition',
      'Responsible AI'
    ]
  },
  {
    id: 'distribution',
    title: 'Distribution & GTM',
    color: 'orange' as const,
    icon: 'puzzle',
    skills: [
      'Multiplatform Distribution',
      'Developer GTM',
      'CLI Installer Design',
      'Marketplace Strategy',
      'Product-Led Growth',
      'Onboarding Optimization',
      'npm Registry',
      'VS Code Marketplace'
    ]
  }
];

/**
 * Skill Category Card Component - Vibrant Design
 */
function SkillCategoryCard({
  category
}: {
  category: typeof skillCategories[0];
}) {
  return (
    <div className="bg-surface-container rounded-2xl shadow-elevation-1 p-6 hover:shadow-elevation-2 transition-shadow relative border border-outline-variant/30">
      {/* Clean Title */}
      <div className="mb-6 -mx-2 px-2">
        <span className="text-title-md font-medium text-primary">{category.title}</span>
      </div>

      {/* Skills list */}
      <ul className="space-y-3">
        {category.skills.map((skill, i) => (
          <li
            key={i}
            className="text-base text-on-surface font-medium flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-on-surface-variant rounded-full flex-shrink-0"></span>
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
      className="bg-surface-container-low py-section relative section-reveal"
      aria-label="Skills and Expertise"
    >
      <div className="container-google">
        {/* Clean Section Heading */}
        <div className="mb-12">
          <h2 className="text-display-xl text-text-primary font-medium">
            Expertise
          </h2>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
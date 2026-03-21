import SpeechBubble from '@components/ui/SpeechBubble';
import { StarIcon, PuzzlePieceIcon, ThumbsUpIcon, CircleIcon } from '@components/ui/SocialIcons';

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
    <div className="bg-white border-punchy-lg border-black rounded-card p-6 hover:shadow-xl hover:scale-105 transition-all relative">
      {/* Decorative icon */}
      <div className="absolute -top-3 -right-3 z-10">
        {category.icon === 'thumbs' && <ThumbsUpIcon color="#FFD700" size={32} />}
        {category.icon === 'star' && <StarIcon color="#00D4FF" size={32} />}
        {category.icon === 'puzzle' && <PuzzlePieceIcon color="#FFA500" size={32} />}
        {category.icon === 'circle' && <CircleIcon color="#FF69B4" size={32} />}
      </div>

      {/* Title in Speech Bubble */}
      <div className="mb-6 -mx-2">
        <SpeechBubble color={category.color} size="md" tailDirection="none">
          <span className="text-punchy-sm">{category.title}</span>
        </SpeechBubble>
      </div>

      {/* Skills list */}
      <ul className="space-y-3">
        {category.skills.map((skill, i) => (
          <li
            key={i}
            className="text-base text-text-primary font-semibold flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
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
      className="bg-vibrant-yellow/30 py-section relative"
      aria-label="Skills and Expertise"
    >
      <div className="container-google">
        {/* Section Heading with decorative elements */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-display-xl text-text-primary font-black">
            Expertise
          </h2>
          <div className="hidden md:block">
            <StarIcon color="#FF69B4" size={45} />
          </div>
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
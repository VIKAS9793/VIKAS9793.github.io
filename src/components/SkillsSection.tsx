import { useState } from 'react';
import { skills, skillCategories } from '@data/skills';
import type { Skill } from '@data/skills';

// Primary skills (always visible) - top 8
const PRIMARY_SKILL_NAMES = [
  'Generative AI',
  'LLM Development',
  'AI Product Management',
  'Product Strategy',
  'Python',
  'React & TypeScript',
  'LangChain & Agentic AI',
  'Research Methodology'
];

/**
 * Get proficiency label instead of percentage
 */
function getProficiencyLabel(proficiency: number): { label: string; color: string } {
  if (proficiency >= 85) return { label: 'Expert', color: 'bg-google-green text-white' };
  if (proficiency >= 70) return { label: 'Advanced', color: 'bg-google-blue text-white' };
  return { label: 'Proficient', color: 'bg-google-yellow text-section-dark' };
}

/**
 * Circular Progress Skill Card - Google DevFest style
 */
function CircularSkillCard({ skill, isPrimary }: { skill: Skill; isPrimary: boolean }) {
  const size = isPrimary ? 100 : 80;
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (skill.proficiency / 100) * circumference;

  const getColor = () => {
    if (skill.proficiency >= 85) return '#34a853';
    if (skill.proficiency >= 70) return '#4285f4';
    return '#fbbc04';
  };

  const { label, color } = getProficiencyLabel(skill.proficiency);

  return (
    <div className="flex flex-col items-center p-3 hover:scale-105 transition-transform cursor-pointer group">
      {/* Circular Progress */}
      <div className="relative">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={getColor()}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-700 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`${isPrimary ? 'text-lg' : 'text-sm'} font-bold text-white`}>
            {skill.proficiency}%
          </span>
        </div>
      </div>

      {/* Skill name */}
      <h3 className={`text-white font-medium mt-2 text-center ${isPrimary ? 'text-sm' : 'text-xs'}`}>
        {skill.name}
      </h3>

      {/* Proficiency Label */}
      <span className={`mt-1 px-2 py-0.5 rounded-full text-xs ${color}`}>
        {label}
      </span>
    </div>
  );
}

/**
 * Skills Section with PRIMARY (8) / SECONDARY (expandable)
 */
export default function SkillsSection() {
  const [showSecondary, setShowSecondary] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Split into primary and secondary
  const primarySkills = skills.filter(s => PRIMARY_SKILL_NAMES.includes(s.name));
  const secondarySkills = skills.filter(s => !PRIMARY_SKILL_NAMES.includes(s.name));

  // Filter by category if not 'all'
  const filteredPrimary = activeCategory === 'all'
    ? primarySkills
    : primarySkills.filter(s => s.category === activeCategory);

  const filteredSecondary = activeCategory === 'all'
    ? secondarySkills
    : secondarySkills.filter(s => s.category === activeCategory);

  return (
    <section
      id="skills"
      className="section-dark relative overflow-hidden"
      aria-labelledby="skills-heading"
    >
      {/* DevFest Decorative Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-google-blue/20 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-google-green/20 rounded-full blur-2xl" />

      <div className="container-google relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 id="skills-heading" className="title-section text-white mb-4">
            Technical{' '}
            <span className="text-gradient-google">Expertise</span>
          </h2>
          <p className="body-large text-white/70 max-w-2xl mx-auto">
            Expert / Advanced / Proficient ratings based on project experience
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === 'all'
                ? 'bg-white text-section-dark shadow-lg'
                : 'bg-white/10 text-white hover:bg-white/20'
              }`}
          >
            All
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat.id
                  ? 'bg-white text-section-dark shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Primary Skills Section */}
        <div className="mb-6">
          <h3 className="text-white/60 text-sm font-medium text-center mb-4">
            PRIMARY EXPERTISE
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {filteredPrimary.map((skill) => (
              <CircularSkillCard key={skill.name} skill={skill} isPrimary={true} />
            ))}
          </div>
        </div>

        {/* Secondary Skills (Expandable) */}
        {filteredSecondary.length > 0 && (
          <>
            <div className="text-center mb-4">
              <button
                onClick={() => setShowSecondary(!showSecondary)}
                className="px-6 py-2.5 border border-white/30 rounded-full text-white text-sm font-medium hover:bg-white/10 transition-colors inline-flex items-center gap-2"
              >
                {showSecondary ? 'Hide' : 'Show'} {filteredSecondary.length} More Skills
                <svg
                  className={`w-4 h-4 transition-transform ${showSecondary ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {showSecondary && (
              <div className="animate-fade-in">
                <h3 className="text-white/60 text-sm font-medium text-center mb-4">
                  ADDITIONAL SKILLS
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
                  {filteredSecondary.map((skill) => (
                    <CircularSkillCard key={skill.name} skill={skill} isPrimary={false} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

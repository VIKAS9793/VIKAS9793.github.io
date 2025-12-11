import { useState } from 'react';
import { skills, skillCategories } from '@data/skills';
import type { Skill } from '@data/skills';

/**
 * Circular Progress Skill Card - Google DevFest style
 */
function CircularSkillCard({ skill }: { skill: Skill }) {
  // Circle dimensions
  const size = 120;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (skill.proficiency / 100) * circumference;

  // Color based on proficiency
  const getColor = () => {
    if (skill.proficiency >= 90) return '#34a853'; // Google Green
    if (skill.proficiency >= 75) return '#4285f4'; // Google Blue
    if (skill.proficiency >= 60) return '#fbbc04'; // Google Yellow
    return '#ea4335'; // Google Red
  };

  return (
    <div className="flex flex-col items-center p-4 hover:scale-105 transition-transform cursor-pointer group">
      {/* Circular Progress */}
      <div className="relative">
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
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
        {/* Center percentage */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{skill.proficiency}%</span>
        </div>
      </div>

      {/* Skill name */}
      <h3 className="text-white font-medium mt-3 text-center text-sm">
        {skill.name}
      </h3>

      {/* Tooltip on hover */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-16 left-1/2 -translate-x-1/2 bg-white text-text-primary text-xs p-2 rounded-lg shadow-card max-w-[200px] z-10 whitespace-normal">
        {skill.description}
      </div>
    </div>
  );
}

/**
 * Skills Section with CIRCULAR PROGRESS - Google DevFest style
 */
export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="section-dark relative overflow-hidden"
      aria-labelledby="skills-heading"
    >
      {/* DevFest Decorative Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-google-blue/20 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-google-green/20 rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-google-yellow/20 rounded-full blur-xl" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-google-red/20 rounded-full blur-xl" />

      <div className="container-google relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 id="skills-heading" className="title-section text-white mb-4">
            Technical{' '}
            <span className="text-gradient-google">Expertise</span>
          </h2>
          <p className="body-large text-white/70 max-w-2xl mx-auto">
            Hover on circles to see skill details
          </p>
        </div>

        {/* Category Tabs - DevFest style pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === 'all'
                ? 'bg-white text-section-dark shadow-lg scale-105'
                : 'bg-white/10 text-white hover:bg-white/20'
              }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat.id
                  ? 'bg-white text-section-dark shadow-lg scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Circular Skill Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 relative">
          {filteredSkills.map((skill) => (
            <CircularSkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills, skillCategories, type Skill } from '@/data/skills';
import SectionHeader from '@components/ui/SectionHeader';
import NeuralNetworkBackground from '@components/ui/NeuralNetworkBackground';

gsap.registerPlugin(ScrollTrigger);

interface SkillCardProps {
  skill: Skill;
  index: number;
}

/**
 * Individual skill card with animated proficiency bar
 * Proficiency levels based on actual certifications and project work
 */
function SkillCard({ skill, index }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    const progress = progressRef.current;
    if (!card || !progress) return;

    // Animate card entrance
    gsap.fromTo(
      card,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          onEnter: () => setIsVisible(true),
        },
      }
    );
  }, [index]);

  useEffect(() => {
    if (!isVisible || !progressRef.current) return;

    // Animate progress bar
    gsap.fromTo(
      progressRef.current,
      { width: '0%' },
      {
        width: `${skill.proficiency}%`,
        duration: 1.5,
        delay: 0.3,
        ease: 'power2.out',
      }
    );
  }, [isVisible, skill.proficiency]);

  return (
    <motion.div
      ref={cardRef}
      className="group relative p-6 rounded-3xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Skill name and proficiency */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {skill.name}
        </h3>
        <span className="text-sm font-mono text-primary-600 dark:text-primary-500 font-bold bg-primary-50 dark:bg-primary-500/10 px-3 py-1 rounded-full">
          {skill.proficiency}%
        </span>
      </div>

      {/* Progress bar */}
      <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-3 shadow-inner">
        <div
          ref={progressRef}
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-500 dark:to-primary-400 rounded-full shadow-sm"
          style={{ width: '0%' }}
        />
        {/* Glow effect */}
        <div
          className="absolute left-0 top-0 h-full bg-primary-500/20 dark:bg-primary-400/30 rounded-full blur-sm"
          style={{ width: `${skill.proficiency}%` }}
        />
      </div>

      {/* Description */}
      {skill.description && (
        <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
          {skill.description}
        </p>
      )}

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/5 dark:group-hover:from-primary-500/10 group-hover:to-secondary-500/5 dark:group-hover:to-secondary-500/10 transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
}

interface SkillsSectionProps {
  title?: string;
  subtitle?: string;
}

/**
 * Skills section displaying technical proficiencies
 * All data based on actual certifications and demonstrated project work
 */
export default function SkillsSection({
  title = 'Technical Expertise',
  subtitle = 'Skills backed by certifications and real-world project implementation',
}: SkillsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="section-spacing relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900"
      aria-labelledby="skills-heading"
    >
      {/* Neural Network Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <NeuralNetworkBackground />
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-center">
        <SectionHeader
          eyebrow="[ Expertise ]"
          title={title}
          subtitle={subtitle}
          accent="primary"
          id="skills-heading"
        />

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-3 rounded-full text-sm font-bold transition-all focus-ring ${
              activeCategory === 'all'
                ? 'bg-primary-500 text-black shadow-lg scale-105'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 shadow-md hover:shadow-lg'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all focus-ring ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-black shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 shadow-md hover:shadow-lg'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Note about skill levels */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-700 dark:text-gray-400 max-w-2xl mx-auto bg-white dark:bg-gray-800 p-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 shadow-md">
            <span className="font-bold text-primary-600 dark:text-primary-500">Note:</span> Proficiency levels reflect
            practical experience from completed projects and professional certifications from IBM, Google,
            Georgia Tech, and DeepLearning.AI.
          </p>
        </div>
      </div>
    </section>
  );
}

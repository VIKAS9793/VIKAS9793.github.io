import { motion } from 'framer-motion';
import { appleReveal, staggerContainer } from './Motion';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  accent?: 'primary' | 'secondary';
  id?: string;
}

export default function SectionHeader({ eyebrow, title, subtitle, accent = 'primary', id }: SectionHeaderProps) {
  const accentClass = accent === 'primary' ? 'text-primary-500' : 'text-secondary-500';
  return (
    <motion.div 
      className="container-center text-center mb-12"
      variants={staggerContainer(0.15)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {eyebrow && (
        <motion.div 
          variants={appleReveal}
          className={`font-mono text-sm tracking-[0.2em] ${accentClass} uppercase`}
        >
          {eyebrow}
        </motion.div>
      )}
      <motion.h2 
        variants={appleReveal}
        className="text-section-title mt-2 text-gray-900 dark:text-white"
        id={id}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          variants={appleReveal}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-3"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

/**
 * Skills data extracted from actual certifications and project work
 * Based on real expertise demonstrated in portfolio
 */

export interface Skill {
  name: string;
  category: 'ai-ml' | 'product' | 'technical' | 'business';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  description?: string;
}

/**
 * Skills derived from actual certifications and completed projects
 * Proficiency levels based on:
 * - Certifications (IBM, Google, Meta)
 * - Real projects (SaralPolicy, CharacterCraft Pro, etc.)
 * - Work experience (Aditya Birla Capital)
 */
export const skills: Skill[] = [
  // AI/ML Skills (from certifications and projects)
  {
    name: 'Generative AI',
    category: 'ai-ml',
    level: 'expert',
    description: 'Google Cloud & Vanderbilt certified, applied in CharacterCraft Pro and SaralPolicy'
  },
  {
    name: 'LLM Development',
    category: 'ai-ml',
    level: 'advanced',
    description: 'Google AI Professional, implemented in AI Interview System with LLaMA'
  },
  {
    name: 'AI Product Management',
    category: 'product',
    level: 'expert',
    description: 'IBM Professional Certificate, PMI Gen AI certified'
  },
  {
    name: 'LangChain & Agentic AI',
    category: 'ai-ml',
    level: 'advanced',
    description: 'Meta & CrewAI certified, used in interview system'
  },
  {
    name: 'Computer Vision',
    category: 'ai-ml',
    level: 'intermediate',
    description: 'Applied in CharacterCraft Pro for character consistency'
  },

  // Product Management Skills
  {
    name: 'Product Strategy',
    category: 'product',
    level: 'expert',
    description: 'Google PM certified, demonstrated in Fintech Onboarding case study with constraint-first approach'
  },
  {
    name: 'UX Design',
    category: 'product',
    level: 'advanced',
    description: 'Meta Fundamentals of UI/UX, applied in SaralPolicy bilingual UX'
  },
  {
    name: 'Research Methodology',
    category: 'product',
    level: 'expert',
    description: '50+ customer interviews for SaralPolicy, comprehensive case studies'
  },

  // Technical Skills
  {
    name: 'Python',
    category: 'technical',
    level: 'advanced',
    description: 'Used in MoatMetrics backend, AI systems'
  },
  {
    name: 'React & TypeScript',
    category: 'technical',
    level: 'advanced',
    description: 'EduVault PWA, current portfolio implementation'
  },
  {
    name: 'FastAPI',
    category: 'technical',
    level: 'intermediate',
    description: 'Enterprise SaaS backend for MoatMetrics'
  },

  // Business Skills
  {
    name: 'Financial Analysis',
    category: 'business',
    level: 'expert',
    description: 'Domain experience at Aditya Birla Capital, MBA Essentials certified'
  },
  {
    name: 'Business Strategy',
    category: 'business',
    level: 'advanced',
    description: 'MoatMetrics $12B TAM analysis, enterprise SaaS planning'
  },
  {
    name: 'Stakeholder Management',
    category: 'business',
    level: 'advanced',
    description: '25% efficiency gain in portfolio management, enterprise pilot secured'
  },
];

export const skillCategories = [
  { id: 'ai-ml', label: 'AI & Machine Learning', color: 'primary' },
  { id: 'product', label: 'Product Management', color: 'secondary' },
  { id: 'technical', label: 'Technical Skills', color: 'accent' },
  { id: 'business', label: 'Business & Strategy', color: 'primary' },
] as const;

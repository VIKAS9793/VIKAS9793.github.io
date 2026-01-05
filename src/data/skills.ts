/**
 * Skills data extracted from actual certifications and project work
 * Based on real expertise demonstrated in portfolio
 */

export interface Skill {
  name: string;
  category: 'ai-ml' | 'product' | 'technical' | 'business';
  proficiency: number; // 0-100, based on certifications and real projects
  description?: string;
}

/**
 * Skills derived from actual certifications and completed projects
 * Proficiency levels based on:
 * - Certifications (IBM, Google, DeepLearning.AI)
 * - Real projects (SaralPolicy, CharacterCraft Pro, etc.)
 * - Work experience (Aditya Birla Capital)
 */
export const skills: Skill[] = [
  // AI/ML Skills (from certifications and projects)
  {
    name: 'Generative AI',
    category: 'ai-ml',
    proficiency: 90,
    description: 'Google Cloud & Vanderbilt certified, applied in CharacterCraft Pro and SaralPolicy'
  },
  {
    name: 'LLM Development',
    category: 'ai-ml',
    proficiency: 85,
    description: 'DeepLearning.AI certified, implemented in AI Interview System with LLaMA'
  },
  {
    name: 'AI Product Management',
    category: 'product',
    proficiency: 90,
    description: 'IBM Professional Certificate, PMI Gen AI certified'
  },
  {
    name: 'LangChain & Agentic AI',
    category: 'ai-ml',
    proficiency: 80,
    description: 'DeepLearning.AI & CrewAI certified, used in interview system'
  },
  {
    name: 'Computer Vision',
    category: 'ai-ml',
    proficiency: 75,
    description: 'Applied in CharacterCraft Pro for character consistency'
  },

  // Product Management Skills
  {
    name: 'Product Strategy',
    category: 'product',
    proficiency: 85,
    description: 'Google PM certified, demonstrated in Fintech Onboarding case study with constraint-first approach'
  },
  {
    name: 'UX Design',
    category: 'product',
    proficiency: 80,
    description: 'Georgia Tech certified, applied in SaralPolicy bilingual UX'
  },
  {
    name: 'Research Methodology',
    category: 'product',
    proficiency: 85,
    description: '50+ customer interviews for SaralPolicy, comprehensive case studies'
  },

  // Technical Skills
  {
    name: 'Python',
    category: 'technical',
    proficiency: 80,
    description: 'Used in MoatMetrics backend, AI systems'
  },
  {
    name: 'React & TypeScript',
    category: 'technical',
    proficiency: 85,
    description: 'EduVault PWA, current portfolio implementation'
  },
  {
    name: 'FastAPI',
    category: 'technical',
    proficiency: 75,
    description: 'Enterprise SaaS backend for MoatMetrics'
  },

  // Business Skills
  {
    name: 'Financial Analysis',
    category: 'business',
    proficiency: 85,
    description: '₹100Cr+ AUM managed at Aditya Birla Capital, MBA Essentials certified'
  },
  {
    name: 'Business Strategy',
    category: 'business',
    proficiency: 80,
    description: 'MoatMetrics $12B TAM analysis, enterprise SaaS planning'
  },
  {
    name: 'Stakeholder Management',
    category: 'business',
    proficiency: 80,
    description: '25% efficiency gain in portfolio management, enterprise pilot secured'
  },
];

export const skillCategories = [
  { id: 'ai-ml', label: 'AI & Machine Learning', color: 'primary' },
  { id: 'product', label: 'Product Management', color: 'secondary' },
  { id: 'technical', label: 'Technical Skills', color: 'accent' },
  { id: 'business', label: 'Business & Strategy', color: 'primary' },
] as const;

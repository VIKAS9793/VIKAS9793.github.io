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
 * - Certifications (IBM, Google, NISM, IRDAI)
 * - Verified projects in the portfolio data
 * - Work experience (Aditya Birla Capital)
 */
export const skills: Skill[] = [
  // AI/ML Skills
  {
    name: 'Generative AI',
    category: 'ai-ml',
    level: 'expert',
    description: 'Google AI Professional certified, applied in Pramiti OS and Dharitri'
  },
  {
    name: 'LLM Development',
    category: 'ai-ml',
    level: 'advanced',
    description: 'Google AI Professional certified, implemented in NorthStar Wealth Companion'
  },
  {
    name: 'AI Product Management',
    category: 'product',
    level: 'expert',
    description: 'IBM Product Manager Professional Certificate'
  },
  {
    name: 'LangChain & Agentic AI',
    category: 'ai-ml',
    level: 'advanced',
    description: 'Applied in Pramiti OS multi-agent architecture'
  },

  // Product Management Skills
  {
    name: 'Product Strategy',
    category: 'product',
    level: 'expert',
    description: 'Google PM certified, demonstrated in AndroJack MCP discovery phase'
  },
  {
    name: 'Research Methodology',
    category: 'product',
    level: 'expert',
    description: 'Applied in analytics funnel instrumentation and activation signaling'
  },

  // Technical Skills
  {
    name: 'Python',
    category: 'technical',
    level: 'advanced',
    description: 'Used in AI systems and backend architectures'
  },
  {
    name: 'React & TypeScript',
    category: 'technical',
    level: 'advanced',
    description: 'Used in Pramiti OS, NorthStar Wealth Companion, and current portfolio'
  },
  {
    name: 'FastAPI',
    category: 'technical',
    level: 'intermediate',
    description: 'Used for Pramiti OS agentic backend routing'
  },

  // Business Skills
  {
    name: 'Financial Analysis',
    category: 'business',
    level: 'expert',
    description: 'Domain experience across Aditya Birla Capital, HDFC, ICICI, and IndusInd Bank'
  },
  {
    name: 'Business Strategy',
    category: 'business',
    level: 'advanced',
    description: 'Applied in financial product positioning and acquisition strategy'
  },
  {
    name: 'Stakeholder Management',
    category: 'business',
    level: 'advanced',
    description: 'Managing customer interactions and trust-driven positioning in regulated environments'
  },
];

export const skillCategories = [
  { id: 'ai-ml', label: 'AI & Machine Learning', color: 'primary' },
  { id: 'product', label: 'Product Management', color: 'secondary' },
  { id: 'technical', label: 'Technical Skills', color: 'accent' },
  { id: 'business', label: 'Business & Strategy', color: 'primary' },
] as const;

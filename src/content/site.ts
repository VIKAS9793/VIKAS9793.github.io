export interface NavItem {
  label: string;
  href: string;
}

export interface ContactLink {
  id: 'email' | 'github' | 'linkedin';
  label: string;
  value: string;
  href: string;
  external: boolean;
}

export const site = {
  year: 2026,
  name: 'Vikas Sahani',
  role: 'Product builder',
  location: 'Mumbai, IN',
  url: 'https://vikas9793.github.io',
  email: 'vikassahani17@gmail.com',
  githubHandle: 'VIKAS9793',
  headline: 'I turn business problems into working products, with AI as my build partner.',
  intro:
    'I am a product builder from Mumbai. I have spent four and a half years in customer-facing finance, so I start from what people actually struggle with, then use AI-assisted development to build and ship the answer.',
  description:
    'Vikas Sahani is a product builder from Mumbai who uses AI-assisted development to turn business problems into working products: Android apps, developer tools and mixed reality games.',
  portraitAlt:
    'Illustrated portrait of Vikas Sahani smiling beside a laptop, with scattered notes on one side and a winding path toward useful products on the other.',
} as const;

export const nav: readonly NavItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'Games', href: '#games' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const contacts: readonly ContactLink[] = [
  {
    id: 'email',
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: `github.com/${site.githubHandle}`,
    href: `https://github.com/${site.githubHandle}`,
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/vikas-sahani',
    href: 'https://www.linkedin.com/in/vikas-sahani-727420358',
    external: true,
  },
];

export interface Credential {
  name: string;
  issuer: string;
  topics: readonly string[];
}

export const credentials: readonly Credential[] = [
  {
    name: 'IBM Product Manager Professional Certificate',
    issuer: 'IBM, via Coursera',
    topics: ['Product strategy', 'Product management lifecycle', 'Sprint planning', 'Stakeholder management', 'Value proposition'],
  },
  {
    name: 'Google AI Professional Certificate',
    issuer: 'Google, via Coursera',
    topics: ['Prompt engineering', 'Responsible AI', 'AI acumen'],
  },
  {
    name: 'NISM Series V-A: Mutual Fund Distributor',
    issuer: 'NISM, valid until October 2027',
    topics: ['Mutual funds', 'Investment products'],
  },
  {
    name: 'IRDAI Corporate Agent (Composite)',
    issuer: 'IRDAI, valid until February 2028',
    topics: ['Insurance', 'Insurance regulation'],
  },
];

export interface Role {
  title: string;
  org: string;
  period: string;
  points: readonly string[];
}

/** Supplied by the owner from their r\u00e9sum\u00e9. Newest first. */
export const experience: readonly Role[] = [
  {
    title: 'Virtual Relationship Manager',
    org: 'Aditya Birla Capital',
    period: 'Nov 2024 to present',
    points: [
      'Manage a \u20b9200 Cr investment portfolio (90% retail, 10% HNI) and a 3,500-customer SIP book.',
      'Scaled monthly SIP mobilisation from \u20b950K to \u20b91L+.',
      'Review portfolios against each investor\u2019s goals and explain outcomes in plain language, and map what makes investors redeem or stop SIPs to improve follow-ups.',
      'Use company-approved Microsoft Copilot to speed up portfolio reviews and client emails, saving about 30 minutes per review.',
    ],
  },
  {
    title: 'Personal Banker',
    org: 'HDFC Bank',
    period: 'Jan 2024 to Jul 2024',
    points: ['Managed a \u20b950-60 Cr Classic segment portfolio and mobilised \u20b910-20L in monthly fixed deposits.'],
  },
  {
    title: 'Sales Officer',
    org: 'IndusInd Bank',
    period: 'Sep 2021 to Nov 2023',
    points: ['Achieved 100-150% of a \u20b950L monthly personal loan target. ACE Award, FY 2022-23.'],
  },
  {
    title: 'Customer Service Officer, Phone Banking',
    org: 'ICICI Bank',
    period: 'Mar 2021 to Jun 2021',
    points: ['Resolved credit card and banking queries with a focus on first-call resolution.'],
  },
];

export const skills: readonly string[] = [
  'Wealth and investment services',
  'SIP growth and retention',
  'Goal-based portfolio review',
  'Customer discovery',
  'Mutual fund and protection cross-selling',
  'AI-assisted analysis',
  'CRM, KYC and AML',
];

export const education = {
  degree: 'BSc, Mithibai College, University of Mumbai',
  period: '2012 to 2015',
} as const;

export interface Highlight {
  value: string;
  label: string;
}

export interface ApproachRow {
  label: string;
  title: string;
  body: string;
}

/** Separates who decided what, per the portfolio's content-integrity rule. */
export const approach: readonly ApproachRow[] = [
  {
    label: 'Mine',
    title: 'The problem and the decisions',
    body: 'Which problem is worth solving, what the first version includes, what it leaves out, and when it is ready to ship.',
  },
  {
    label: 'AI-assisted',
    title: 'The building',
    body: 'Specs, code generation, test scaffolding and drafting are done with AI tools, and I review what they produce before it ships.',
  },
  {
    label: 'Guardrails',
    title: 'The data',
    body: 'At work I use only company-approved AI tools, within data-privacy guidelines. Personal AI tools are for my own projects and learning, and no client or employer data ever goes into them.',
  },
  {
    label: 'Checked',
    title: 'The claims',
    body: 'Versions, tool counts and statuses on this page are read from the projects themselves. If I cannot verify a number, it is not here.',
  },
];

export const about = {
  paragraphs: [
    'I work in finance during the day. For four and a half years that has meant customer-facing wealth and banking roles, today as a Virtual Relationship Manager at Aditya Birla Capital. Talking to customers about money every day taught me where products lose people: unclear next steps, hidden costs and a lack of trust.',
    'Outside work I build. I am not a traditional software engineer. I decide what to build and why, use AI to do the implementation work, and keep each project small enough to finish and check properly.',
    'I am also passionate about games. That is why NorthStar Studioz exists: a place to explore how games are designed and built, alongside the business products I make.',
  ],
} as const;

export const games = {
  label: '02 / Games',
  title: 'Beyond products: games',
  lead: 'Products solve problems I see at work. Games are where I explore for the joy of it. NorthStar Studioz is my way of learning how games are made.',
} as const;

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
  name: 'Vikas Sahani',
  role: 'Product builder',
  location: 'Mumbai, IN',
  url: 'https://vikas9793.github.io',
  email: 'vikassahani17@gmail.com',
  githubHandle: 'VIKAS9793',
  headline: 'I turn business problems into working products, with AI as my build partner.',
  intro:
    'I am a product builder from Mumbai. I have spent more than four years in customer-facing finance, so I start from what people actually struggle with, then use AI-assisted development to build and ship the answer.',
  description:
    'Vikas Sahani is a product builder from Mumbai who uses AI-assisted development to turn business problems into working products: Android apps, developer tools and mixed reality games.',
  portraitAlt:
    'Illustrated portrait of Vikas Sahani smiling beside a laptop, with scattered notes on one side and a winding path toward useful products on the other.',
} as const;

export const nav: readonly NavItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'Approach', href: '#approach' },
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
];

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
    label: 'Checked',
    title: 'The claims',
    body: 'Versions, tool counts and statuses on this page are read from the projects themselves. If I cannot verify a number, it is not here.',
  },
];

export const about = {
  paragraphs: [
    'I work in finance during the day. For more than four years that has meant customer-facing roles across HDFC Bank, ICICI Bank, IndusInd Bank and, currently, Aditya Birla Capital as a Virtual Relationship Manager. Talking to customers about money every day taught me where products lose people: unclear next steps, hidden costs and a lack of trust.',
    'Outside work I build. I am not a traditional software engineer. I decide what to build and why, use AI to do the implementation work, and keep each project small enough to finish and check properly.',
  ],
} as const;

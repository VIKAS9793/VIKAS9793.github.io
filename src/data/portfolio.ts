import type {
  PersonalInfo,
  Project,
  Stat,
  Certification,
  ContactInfo,
  Simulation
} from '../types';

export const personalInfo: PersonalInfo = {
  name: "Vikas Sahani",
  title: "AI Product Manager | AI Products | Developer Tools | FinTech",
  tagline: "Product professional with 4+ years in customer-facing financial environments and hands-on experience owning a developer tool across the full product lifecycle — from ideation to early growth. I define product scope, instrument analytics funnels, and iterate on activation signals. Open to relocation. Open to visa sponsorship.",
  bio: `
    <p>
      Product professional with 4+ years in customer-facing financial environments.
      I have owned a developer tool across the full product lifecycle — from problem definition
      to multiplatform launch and iterative growth — achieving measurable traction within two weeks
      with zero paid acquisition. My work sits at the intersection of product execution, analytics
      instrumentation, and domain expertise from regulated financial environments.
    </p>
    <p>
      I focus on the 0→1 phase: defining MVP scope, instrumenting funnels, reading activation signals,
      and making scope decisions grounded in data rather than feature instinct.
    </p>
  `,
  location: "India",
  email: "vikassahani17@gmail.com",
  phone: "+91 7715072817",
  avatar: "https://raw.githubusercontent.com/VIKAS9793/VIKAS9793.github.io/main/public/images/profile-avatar.png"
};

export const stats: Stat[] = [
  {
    id: "weekly-active-installs",
    label: "Weekly Active Installs",
    value: "299",
    description: "North Star metric for AndroJack MCP. 660 GitHub clones from 251 unique cloners in 14 days — cloners exceed repo visitors, validating terminal-first organic growth."
  },
  {
    id: "npm-downloads",
    label: "Weekly npm Downloads",
    value: "240",
    description: "Weekly npm downloads alongside 59 VS Code Marketplace installs and 82% session engagement rate (GA4). All within the first two weeks post-launch, zero paid acquisition."
  },
  {
    id: "security-score",
    label: "Security Score",
    value: "10 / 10",
    description: "MCP Marketplace security score with zero CVEs. PageSpeed: SEO 100, Accessibility 100, Performance 97. Verified in Official MCP Registry."
  },
  {
    id: "pm-competition",
    label: "National PM Rank",
    value: "Rank 2",
    description: "Runner-up nationally at Product Titans PM Strategy Competition — solo submission, team North Star Hunter. Score: 6.4."
  }
];

export const projects: Project[] = [
  {
    id: "androjack-mcp",
    title: "AndroJack MCP",
    tagline: "Developer tool addressing reliability gaps in AI-assisted Android development. Owned end-to-end from problem definition to multiplatform launch and iterative growth.",
    description: "Identified a reliability gap in AI code generation tools that reference stale training data. Defined MVP scope, led multiplatform launch, instrumented the analytics funnel, and iterated on activation and engagement signals. Shipped v1.6.4 across 7 AI coding environments in under 4 weeks — solo.",
    pmSections: {
      problem: "AI coding tools generate Android solutions grounded in stale training data, not live documentation. Developers cannot trust outputs, creating a measurable reliability and trust gap in AI-assisted Android workflows.",
      solution: "Defined a Model Context Protocol (MCP) server that enforces live documentation verification at inference time — a first-mover category position over prompt engineering or RAG alternatives.",
      execution: "Orchestrated build using Claude AI for spec, Antigravity IDE for code generation, compressing solo lifecycle from discovery to v1.0 in under 4 weeks. Shipped CLI installer and VS Code extension for one-command setup across any AI coding environment. Prioritised PulseMCP registry listing on day 1 as primary distribution channel.",
      measurement: "Instrumented GA4 funnel with a behavioural event taxonomy mapping discovery, evaluation, and activation stages. KPIs: weekly download velocity, install conversion, engagement rate, channel attribution. Terminal-first growth validated: cloners (251) exceed repo visitors (179), confirming external discovery via npx direct install. Used Reddit (74 unique referrals, primary acquisition engine) and acquisition data to prioritise documentation as highest-ROI content channel.",
      impact: "299 weekly active installs (North Star). 660 GitHub clones, 251 unique cloners in 14 days. 240 weekly npm downloads. 59 VS Code Marketplace installs. 82% session engagement rate. 10/10 security score, zero CVEs. PageSpeed: SEO 100, Accessibility 100, Performance 97. Organic search position 4.5. Top-40 global weekly ranking on PulseMCP. Verified in Official MCP Registry. All organic — zero paid acquisition."
    },
    isFlagship: true,
    category: "ai",
    image: "https://raw.githubusercontent.com/VIKAS9793/VIKAS9793.github.io/main/public/images/androjack-banner.png",
    featured: true,
    technologies: ["MCP", "Node.js", "Android SDK", "GA4 Analytics", "npm", "VS Code Marketplace"],
    metrics: [
      { label: "Weekly Active Installs (North Star)", value: "299" },
      { label: "GitHub Clones (14 days)", value: "660" },
      { label: "Unique Cloners", value: "251" },
      { label: "Repo Visitors", value: "179" },
      { label: "npm Weekly Downloads", value: "240" },
      { label: "VS Code Installs", value: "59" },
      { label: "Session Engagement Rate", value: "82%" },
      { label: "Security Score", value: "10 / 10" },
      { label: "CVEs", value: "0" },
      { label: "AI Environments Supported", value: "7" },
      { label: "Iteration Cycles (2 weeks)", value: "4" },
      { label: "PageSpeed SEO", value: "100" },
      { label: "PageSpeed Accessibility", value: "100" },
      { label: "PageSpeed Performance", value: "97" },
      { label: "Organic Search Position", value: "4.5" }
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/VIKAS9793/androjack-mcp",
        label: "GitHub"
      }
    ]
  },
  {
    id: "product-titans-case-study",
    title: "Product Titans",
    description: "Runner-up (Rank 2) • Score 6.4 | National Product Management Challenge. Product Skills Applied: User Research, RICE Prioritization, North Star Mapping, GTM Strategy, Responsible AI.",
    longDescription: "Independent PM case study created for a national-level live project challenge hosted on Unstop and organized by Book My Mentor. Built an India-first agentic AI learning platform concept with problem framing, personas, journey mapping, RICE prioritization, North Star metrics, experimentation plan, and responsible AI governance (trust, explainability, privacy).",
    image: "https://raw.githubusercontent.com/VIKAS9793/VIKAS9793.github.io/main/public/images/product-titans.png",
    category: "product",
    featured: true,
    technologies: [
      "Personas",
      "RICE Prioritization",
      "North Star Metrics",
      "GTM Strategy",
      "Experimentation",
      "Responsible AI"
    ],
    metrics: [
      { label: "Achievement", value: "Rank 2" },
      { label: "Score", value: "6.4" },
      { label: "Team", value: "North Star Hunter (Solo)" },
      { label: "Certification", value: "Excellence" }
    ],
    links: [
      {
        type: "demo",
        url: "https://youtu.be/M_D3dxxZiqI",
        label: "Watch Case Study"
      }
    ]
  },
  {
    id: "indiaai-idp",
    title: "IndiaAI IDP Platform",
    description: "Enterprise-grade Intelligent Document Processing system for Indian government documents.",
    longDescription: "Scalable, privacy-first platform featuring modular architecture, DPDP Act compliance, and Human-in-the-Loop verification. Built for high-volume processing of Aadhaar, PAN, and financial documents.",
    image: "https://raw.githubusercontent.com/VIKAS9793/VIKAS9793.github.io/main/public/images/indiaai-idp.png",
    category: "ai",
    featured: true,
    technologies: [
      "Python & FastAPI",
      "React + Vite",
      "PaddleOCR",
      "Docker & AWS",
      "PostgreSQL/Redis",
      "DPDP Compliance"
    ],
    metrics: [
      { label: "Processing Speed", value: "~2s/page" },
      { label: "Accuracy", value: "95%+" },
      { label: "Architecture", value: "Modular" },
      { label: "Compliance", value: "DPDP 2023" }
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/VIKAS9793/indiaai-idp-platform",
        label: "View Project"
      }
    ]
  },
  {
    id: "saralpolicy",
    title: "SaralPolicy – AI-Powered Insurance Policy Explainer",
    description: "Conceived, designed, and launched SaralPolicy, a local-first AI assistant that simplifies insurance policy documents by explaining clauses, exclusions, and IRDAI rights in plain Hindi and English.",
    longDescription: "Validated user problem through 50+ customer interviews, uncovering key pain points around unreadable policy wording, hidden exclusions, and lack of privacy in existing tools.",
    image: "https://raw.githubusercontent.com/VIKAS9793/VIKAS9793.github.io/main/public/images/saralpolicy.png",
    category: "ai",
    featured: true,
    technologies: [
      "AI Product Leadership",
      "Privacy-First Architecture",
      "IRDAI Compliance",
      "Bilingual UX",
      "Material Design 3",
      "Financial Literacy"
    ],
    metrics: [
      { label: "Exclusion Detection", value: "90%" },
      { label: "Customer Interviews", value: "50+" },
      { label: "Usability Satisfaction", value: "98%" },
      { label: "Privacy Compliance", value: "100%" }
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/VIKAS9793/SaralPolicy.git",
        label: "View Project"
      }
    ]
  },
  {
    id: "fintech-onboarding-clarity",
    title: "Fintech Onboarding Clarity",
    description: "Exploratory PM case study on reducing user uncertainty in regulated fintech KYC flows.",
    longDescription: "Demonstrates constraint-first product thinking and AI boundary definition. Features 10+ PM artifacts covering problem framing, regulatory constraints, AI decision boundaries, and validation planning.",
    image: "https://raw.githubusercontent.com/VIKAS9793/VIKAS9793.github.io/main/public/images/fintech-onboarding.png",
    category: "product",
    featured: true,
    technologies: [
      "Product Discovery",
      "Constraint-First Design",
      "AI Boundaries",
      "HITL Validation",
      "Regulatory Compliance",
      "KYC/Onboarding"
    ],
    metrics: [
      { label: "PM Artifacts", value: "10+" },
      { label: "Compliance", value: "100%" },
      { label: "AI Role", value: "HITL" },
      { label: "Video Pitch", value: "YouTube" }
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/VIKAS9793/Fintech-Onboarding-Clarity",
        label: "View Case Study"
      },
      {
        type: "demo",
        url: "https://youtu.be/eSpfY1qSvQc",
        label: "Video Pitch"
      }
    ]
  },
  {
    id: "moatmetrics",
    title: "MoatMetrics",
    description: "Enterprise analytics platform for MSPs addressing $12B market opportunity.",
    longDescription: "Privacy-first architecture with production-ready MVP.",
    image: "https://raw.githubusercontent.com/VIKAS9793/VIKAS9793.github.io/main/public/images/moatmetrics.png",
    category: "enterprise",
    featured: true,
    technologies: [
      "Business Strategy",
      "Python",
      "FastAPI",
      "Enterprise SaaS"
    ],
    metrics: [
      { label: "Market TAM", value: "$12B" },
      { label: "Architecture", value: "Privacy-first" }
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/VIKAS9793/moatmetrics.git",
        label: "View Project"
      }
    ]
  },
  {
    id: "charactercraft-pro",
    title: "CharacterCraft Pro",
    description: "AI platform solving character consistency in generated images using Google Gemini 2.5 Flash with a deterministic Prompt Protocol Engine.",
    image: "https://raw.githubusercontent.com/VIKAS9793/VIKAS9793.github.io/main/public/images/charactercraft-pro.png",
    category: "ai",
    featured: true,
    technologies: [
      "Generative AI",
      "Gemini 2.5",
      "Computer Vision",
      "Product Architecture"
    ],
    metrics: [
      { label: "Consistency Rate", value: "94%" },
      { label: "Avg Speed", value: "1.2s" }
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/VIKAS9793/charactercraft-pro.git",
        label: "View Project"
      }
    ]
  },
  {
    id: "eduvault",
    title: "EduVault",
    description: "Offline-first educational platform bringing quality education to every corner of rural India.",
    longDescription: "Designed for learners with disabilities and areas with limited internet connectivity, featuring multilingual voice interaction, government curriculum integration, and complete accessibility compliance.",
    image: "https://raw.githubusercontent.com/VIKAS9793/VIKAS9793.github.io/main/public/images/eduvault.png",
    category: "education",
    featured: false,
    technologies: [
      "React + TypeScript",
      "Progressive Web App",
      "Offline-First",
      "Voice Interaction",
      "NCERT/DIKSHA",
      "Accessibility"
    ],
    metrics: [
      { label: "Target Users", value: "Rural" },
      { label: "Languages", value: "EN/HI" },
      { label: "Works Offline", value: "100%" },
      { label: "Accessibility", value: "WCAG AA" }
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/VIKAS9793/EduVault.git",
        label: "View Project"
      }
    ]
  },
  {
    id: "ai-interview-system",
    title: "AI Interview Simulation System",
    description: "AI-driven conversational agent for interview preparation with privacy-first, offline architecture.",
    longDescription: "Secured 3-month enterprise pilot program with positive feedback on core features using LangGraph, LLaMA, and ChromaDB for complete user data confidentiality.",
    image: "https://raw.githubusercontent.com/VIKAS9793/VIKAS9793.github.io/main/public/images/ai-interview-system.jpg",
    category: "ai",
    technologies: [
      "LangGraph",
      "LLaMA",
      "ChromaDB",
      "Privacy-First"
    ],
    metrics: [
      { label: "Pilot Program", value: "3 Mo" },
      { label: "Privacy", value: "Offline" }
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/VIKAS9793/ai-interviewer-langchain.git",
        label: "View Project"
      }
    ]
  },
  {
    id: "krishisahayak",
    title: "KrishiSahayak+Gemma",
    description: "Offline AI advisory system for rural agriculture focused on improving crop yield and sustainability.",
    longDescription: "Built local RAG pipeline with peer-to-peer knowledge-sharing for low-connectivity environments.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "ai",
    technologies: [
      "Agriculture",
      "RAG Pipeline",
      "Offline AI",
      "Low Connectivity"
    ],
    metrics: [
      { label: "Target", value: "Rural" },
      { label: "Mode", value: "P2P" }
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/VIKAS9793/KrishiSahayak_Gemma.git",
        label: "View Project"
      }
    ]
  },
  {
    id: "portfolio-management",
    title: "Aditya Birla Capital — Virtual Relationship Manager",
    description: "Current role (Nov 2024 – Present). Managing 50–60 daily customer interactions in a regulated financial environment, developing applied understanding of user trust signals, adoption friction, and lifecycle engagement patterns.",
    longDescription: "Identifying friction in financial product selection across customer cohorts and translating behavioural observations into actionable product and onboarding insights. 4+ years across HDFC Bank, ICICI Bank, IndusInd Bank, and Aditya Birla Capital — building domain knowledge in customer acquisition, retention behaviour, and trust-driven positioning.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "fintech",
    technologies: [
      "Customer Lifecycle Management",
      "Regulated Financial Products",
      "Trust Signal Analysis",
      "Onboarding Friction Identification",
      "KYC & Compliance"
    ],
    metrics: [
      { label: "Daily Customer Interactions", value: "50–60" },
      { label: "Domain Experience", value: "4+ yrs" },
      { label: "Institutions", value: "4" }
    ],
    links: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/vikas-sahani-727420358",
        label: "LinkedIn"
      }
    ]
  }
];

export const simulations: Simulation[] = [
  {
    id: "ea-simulation",
    company: "Electronic Arts (EA)",
    description: "Analyzed KPIs for a mobile gaming product and produced a data-driven feature roadmap proposal to improve user engagement. Product skills applied: KPI analysis, roadmap prioritization, stakeholder presentation.",
    skills: ["KPI Analysis", "Roadmap Prioritization", "Product Strategy", "Stakeholder Presentation"]
  }
];

export const certifications: Certification[] = [
  {
    id: "ibm-ai-pm",
    title: "IBM AI Product Manager Professional Certificate",
    organization: "IBM Professional Certificate",
    icon: "🏆"
  },
  {
    id: "google-ai-professional",
    title: "Google AI Professional Certificate & Project Management",
    organization: "Google Career Certificates",
    icon: "✨"
  },
  {
    id: "meta-ux",
    title: "Meta – Principles of UX/UI Design",
    organization: "Meta Professional Certificate",
    icon: "🎨"
  }
];

export const contactInfo: ContactInfo[] = [
  {
    type: "phone",
    label: "Phone",
    value: "+91 7715072817",
    url: "tel:+917715072817",
    icon: "📞"
  },
  {
    type: "email",
    label: "Email",
    value: "vikassahani17@gmail.com",
    url: "mailto:vikassahani17@gmail.com",
    icon: "📧"
  },
  {
    type: "linkedin",
    label: "LinkedIn",
    value: "Professional Network",
    url: "https://www.linkedin.com/in/vikas-sahani-727420358",
    icon: "💼"
  },
  {
    type: "github",
    label: "GitHub",
    value: "View Code",
    url: "https://github.com/VIKAS9793",
    icon: "🐱"
  },
  {
    type: "credly",
    label: "Credly",
    value: "Verified Badges",
    url: "https://www.credly.com/users/vikas-sahani.e0a347d7/badges#credly",
    icon: "🏅"
  }
];
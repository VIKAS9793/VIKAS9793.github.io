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
  title: "Virtual Relationship Manager, BFSI | Independent AI Product Builder",
  tagline: "4+ years in customer-facing financial environments (HDFC, ICICI, IndusInd, Aditya Birla Capital), building AI developer tools independently outside work hours. I define product scope, instrument analytics funnels, and iterate on activation signals. Open to relocation. Open to visa sponsorship.",
  bio: `
  <p>
    Product professional with 4+ years in customer-facing financial environments
    across HDFC Bank, ICICI Bank, IndusInd Bank, and Aditya Birla Capital.
    I have owned a developer tool across the full product lifecycle from problem definition
    to multiplatform launch and iterative growth, achieving measurable traction within two weeks
    with zero paid acquisition. My work sits at the intersection of product execution, analytics
    instrumentation, and domain expertise from regulated financial environments.
  </p>
  <p>
    I focus on the 0 to 1 phase: defining MVP scope, instrumenting funnels, reading activation signals,
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
    id: "npm-downloads",
    label: "Weekly npm Downloads",
    value: "110",
    description: "AndroJack MCP, live npm registry data. 813 downloads in the trailing month. Verified via registry.npmjs.org, not a static launch-week snapshot."
  },
  {
    id: "launch-traction",
    label: "Launch-Window Traction",
    value: "660 clones",
    description: "251 unique cloners and 179 repo visitors in AndroJack's first 14 days post-launch — cloners exceeding visitors validated terminal-first (npx direct install) organic growth with zero paid acquisition."
  },
  {
    id: "security-score",
    label: "Security Score",
    value: "10 / 10",
    description: "MCP Marketplace security score, 0 known vulnerabilities in the shipped dependency tree as of v2.0.0. Verified in the Official MCP Registry."
  }
];

export const projects: Project[] = [
  {
    id: "pramiti-os",
    title: "Pramiti OS",
    tagline: "Multi-agent architecture PoC for wealth-management Relationship Managers, unifying fragmented banking systems into one copilot while enforcing DPDP privacy and RBI human-in-the-loop rules.",
    description: "Proof-of-concept exploring whether a LangGraph + MCP agentic architecture can securely bridge internal banking APIs (CRM, Core Banking, market terminals) for RMs, without violating DPDP data-minimization rules or RBI's prohibition on unsupervised algorithmic execution. Codebase is at Beta maturity; not a deployed or production application.",
    longDescription: "Architecture separates reasoning (LLM), integration (MCP), and orchestration (LangGraph). Four MCP servers (cbs_server, portfolio_server, sip_server, data) expose specific Supabase queries and Qdrant document retrieval while masking PII (PAN, mobile, name) before it reaches the model. High-risk state changes — e.g. a portfolio reallocation proposal — trigger a LangGraph NodeInterrupt that pauses execution until a human RM explicitly approves it. The PoC runs on Groq's hosted llama-3.3-70b as a stand-in for the intended production target of on-premise, air-gapped Sarvam-30B/105B open-weight models, since cloud inference would itself violate the DPDP data-localization rule the project is designed around. 35 backend tests across unit and integration suites (PII masking, security config, SIP server, end-to-end graph execution) plus 12 documentation files spanning strategy, PRD, architecture, and an ADR on RBI MRMF kill-switch policy.",
    image: "https://raw.githubusercontent.com/VIKAS9793/pramiti-os/main/assets/images/project_banner.png",
    category: "fintech",
    featured: true,
    technologies: ["Next.js 16.2.11", "React 19.2.4", "LangGraph", "MCP", "FastAPI", "Supabase", "Qdrant", "Groq (Llama 3.3 70B)"],
    metrics: [
      { label: "Status", value: "Beta (code), PoC (not deployed)" },
      { label: "Backend Tests (unit + integration)", value: "35" },
      { label: "MCP Servers", value: "4 (cbs, portfolio, sip, data)" },
      { label: "Docs in /docs", value: "12" },
      { label: "Compliance Frameworks Addressed", value: "DPDP Act, RBI MRMF" },
      { label: "GitHub Stars", value: "0" },
      { label: "GitHub Forks", value: "0" }
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/VIKAS9793/pramiti-os",
        label: "GitHub"
      }
    ]
  },
  {
    id: "androjack-mcp",
    title: "AndroJack MCP",
    tagline: "Developer tool addressing reliability gaps in AI-assisted Android development. Owned end-to-end from problem definition through multiplatform launch to current v2.0.0.",
    description: "Identified a reliability gap in AI code generation tools that reference stale training data. Defined MVP scope, led multiplatform launch, instrumented the analytics funnel, and iterated on activation and engagement signals. Launched v1.0 in under 4 weeks as a solo build; current release is v2.0.0 with 23 tools, 28 validator rules, and a content-sanitizer layer added against indirect prompt injection.",
    pmSections: {
      problem: "AI coding tools generate Android solutions grounded in stale training data rather than live documentation. Developers cannot trust outputs, creating a measurable reliability and trust gap in AI-assisted Android workflows.",
      solution: "Defined a Model Context Protocol server that enforces live documentation verification at inference time. This established a first-mover category position over prompt engineering or RAG alternatives.",
      execution: "Orchestrated the build using Claude AI for spec definition and Antigravity IDE for code generation, compressing the solo product lifecycle from discovery to v1.0 in under 4 weeks. Shipped a CLI installer and VS Code extension for one-command setup across any AI coding environment. Prioritised PulseMCP registry listing on day 1 as the primary distribution channel. Since launch: expanded from 22 to 23 tools and 26 to 28 validator rules, patched 7 dependency vulnerabilities (3 high) to zero, and added a content-sanitizer layer defending against indirect prompt injection from externally-fetched documentation.",
      measurement: "Instrumented a GA4 funnel with a behavioural event taxonomy covering discovery, evaluation, and activation stages. Terminal-first growth was validated at launch when cloners (251) exceeded repo visitors (179) in the first 14 days, confirming external discovery via npx direct install. Reddit generated 74 unique referrals and was identified as the primary acquisition engine. Current traction is tracked live via the public npm registry rather than a static snapshot.",
      impact: "Live as of today: 110 weekly / 813 monthly npm downloads (registry.npmjs.org). At launch: 660 GitHub clones from 251 unique cloners in 14 days, organic search average position 4.5, top-40 global weekly ranking on PulseMCP — all with zero paid acquisition. Current release v2.0.0: 23 tools, 28 validator rules, 0 known vulnerabilities in the shipped dependency tree. Verified in the Official MCP Registry."
    },
    isFlagship: true,
    category: "ai",
    image: "https://raw.githubusercontent.com/VIKAS9793/VIKAS9793.github.io/main/public/images/androjack-banner.png",
    featured: true,
    technologies: ["MCP", "Node.js", "TypeScript", "Android SDK", "npm", "VS Code Marketplace"],
    metrics: [
      { label: "npm/week", value: "110" },
      { label: "npm/month", value: "813" },
      { label: "Current Version", value: "v2.0.0" },
      { label: "Tools", value: "23" },
      { label: "Validator Rules", value: "28" },
      { label: "Known Vulnerabilities", value: "0" },
      { label: "GitHub Clones (launch, 14 days)", value: "660" },
      { label: "Unique Cloners (launch)", value: "251" },
      { label: "Repo Visitors (launch)", value: "179" },
      { label: "GitHub Stars", value: "21" },
      { label: "GitHub Forks", value: "1" }
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/VIKAS9793/AndroJack-mcp",
        label: "GitHub"
      }
    ]
  },
  {
    id: "context-fabric",
    title: "Context Fabric (CADRE)",
    tagline: "MCP server built on a five-engine CADRE architecture for durable AI agent context.",
    description: "Model Context Protocol server that automatically captures project state on every git commit, detects when stored context has drifted from codebase reality, and delivers structured, token-budgeted briefings to AI coding agents.",
    longDescription: "Built the CADRE (Context-Aware Drift Resolution Engine) five-engine architecture: WATCHER captures state on commit, ANCHOR scores context drift 0-100, ROUTER ranks relevant components via SQLite FTS5 BM25, GOVERNOR caps output to a token budget, WEAVER composes the final briefing. Live product analytics dashboard tracks npm and GitHub metrics daily via automated GitHub Actions.",
    image: "https://raw.githubusercontent.com/VIKAS9793/context-fabric/main/assets/banner.png",
    category: "ai",
    featured: true,
    technologies: ["MCP", "Node.js", "Context Engineering", "Agent Orchestration"],
    metrics: [
      { label: "Architecture", value: "CADRE (5-engine)" },
      { label: "Lifetime npm downloads", value: "2,356" },
      { label: "npm/week", value: "604" },
      { label: "Current Version", value: "v1.2.2" },
      { label: "GitHub Stars", value: "2" },
      { label: "GitHub Forks", value: "0" }
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/VIKAS9793/context-fabric",
        label: "GitHub"
      },
      {
        type: "live",
        url: "https://vikas9793.github.io/context-fabric/",
        label: "Live Analytics Dashboard"
      }
    ]
  },
  {
    id: "dharitri",
    title: "Dharitri",
    tagline: "Offline-first, on-device AI agricultural assistant for rural Indian farmers on low-end Android devices.",
    description: "On-device AI assistant delivering instant crop diagnostics and voice-first vernacular guidance with zero data cost, running Google's Gemma 4 locally via AICore/ML Kit GenAI and LiteRT-LM. Pre-launch: no deployed user base yet — current work is deep reliability engineering across a 291-file Kotlin codebase.",
    longDescription: "Resolved a native SIGSEGV crash tied to Android 15 page-size alignment, fixed a silent JSON parsing failure and a search debounce race condition, audited a third-party ONNX speech integration (found and documented six bugs), and defined the integration contract for on-device Gemma 4 inference with a tiered fallback system. 14 production-grade architecture documents cover on-device AI, security, observability, and AI explainability/governance grounded in Google's PAIR framework. Building a live mandi (market) price data pipeline via a Cloudflare Worker relay.",
    image: "https://raw.githubusercontent.com/VIKAS9793/dharitri-agri-ai/main/images/banner.png",
    category: "ai",
    featured: true,
    technologies: ["Kotlin", "Jetpack Compose", "On-Device Gemma 4", "AICore / LiteRT-LM", "Hilt", "Room", "Cloudflare Workers"],
    metrics: [
      { label: "Stage", value: "Pre-launch / active dev" },
      { label: "Kotlin Files", value: "291" },
      { label: "Architecture Docs", value: "14" },
      { label: "SIGSEGV Crash", value: "1 (Fixed)" },
      { label: "Audited Integration Bugs", value: "6" },
      { label: "Min Android Version", value: "API 24" },
      { label: "GitHub Stars", value: "0" },
      { label: "GitHub Forks", value: "0" }
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/VIKAS9793/dharitri-agri-ai",
        label: "GitHub"
      }
    ]
  },
  {
    id: "northstar-wealth-ai",
    title: "NorthStar Wealth Companion",
    tagline: "Deterministic 7-layer compliance governance framework for AI-assisted wealth advisory, built for a national hackathon.",
    description: "Hackathon proof-of-concept (IDBI Innovate 2026, Wealth Advisory Challenge) with a working live demo — not a deployed banking product. Combines goal-based planning, behavioral coaching, and explainable AI on a deterministic 7-layer Constitutional AI governance framework enforcing SEBI IA Regulation 15 disclosure rules.",
    longDescription: "Built to show that AI-assisted financial advice can be made auditable and regulation-compliant by construction rather than by review: threat isolation, domain classification, financial-twin validation, constitutional AI critique, deterministic engine routing, tool-output schema enforcement, and a post-generation SEBI compliance filter with cryptographic (SHA-256) audit trail. All 158 automated tests across 6 suites pass. Designed to augment, not replace, human Relationship Managers.",
    image: "https://raw.githubusercontent.com/VIKAS9793/northstar-wealth-ai/main/docs/assets/project_banner.png",
    category: "fintech",
    featured: true,
    technologies: ["Next.js 15", "React 19", "Tailwind CSS v4", "Groq LPU (Llama 3.3 70B)", "Vitest"],
    metrics: [
      { label: "Status", value: "Hackathon PoC, live demo" },
      { label: "Governance Framework", value: "7-layer" },
      { label: "Tests (6 suites)", value: "158/158" },
      { label: "GitHub Stars", value: "0" },
      { label: "GitHub Forks", value: "0" }
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/VIKAS9793/northstar-wealth-ai",
        label: "GitHub"
      },
      {
        type: "live",
        url: "https://northstar-wealth-ai.netlify.app/",
        label: "Live Demo"
      }
    ]
  },
  {
    id: "portfolio-management",
    title: "Aditya Birla Capital - Virtual Relationship Manager",
    description: "Current role from Nov 2024 to present. Manage a ₹150 Cr investment portfolio (90% retail, 10% HNI), executing 100 daily targeted calls that generate 50-60 substantive customer interactions and 5-6 daily SIP conversions through needs-based financial advisory.",
    longDescription: "Scaled monthly SIP mobilization from approximately ₹50K to over ₹1L by refining customer engagement approaches and addressing investment adoption barriers. Conduct regular portfolio reviews to identify SIP top-up opportunities and promote multi-product adoption. 4+ years across ICICI Bank, IndusInd Bank, HDFC Bank, and Aditya Birla Capital, building domain knowledge in customer acquisition, retention behaviour, and trust-driven product positioning. NISM Series V-A and IRDAI Corporate Agent (Composite) certified.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    category: "fintech",
    technologies: [
      "Customer Lifecycle Management",
      "Regulated Financial Products",
      "Trust Signal Analysis",
      "Onboarding Friction Identification",
      "KYC and Compliance"
    ],
    metrics: [
      { label: "Investment Portfolio Managed", value: "₹150 Cr" },
      { label: "Monthly SIP Mobilization Growth", value: "₹50K → ₹1L+" },
      { label: "Daily Calls / Interactions", value: "100 / 50-60" },
      { label: "Daily SIP Conversions", value: "5-6" },
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
    description: "[Unverified] Analyzed KPIs for a mobile gaming product and produced a data-driven feature roadmap proposal to improve user engagement. Product skills applied: KPI analysis, roadmap prioritization, and stakeholder presentation.",
    skills: ["KPI Analysis", "Roadmap Prioritization", "Product Strategy", "Stakeholder Presentation"]
  }
];

export const certifications: Certification[] = [
  {
    id: "nism-va",
    title: "NISM Series V-A: Mutual Fund Distributor Certification",
    organization: "National Institute of Securities Markets (NISM)",
    description: "Valid until Oct 2027",
    skills: [
      "Mutual Fund Distribution",
      "Mutual Funds",
      "Investment Products",
      "Financial Markets"
    ],
    icon: "📜"
  },
  {
    id: "irdai-composite",
    title: "IRDAI Corporate Agent (Composite) Certification",
    organization: "Insurance Regulatory and Development Authority of India",
    description: "Valid until Feb 2028",
    skills: [
      "Insurance",
      "Corporate Agency",
      "Life Insurance",
      "General Insurance",
      "Insurance Regulation"
    ],
    icon: "📜"
  },
  {
    id: "ibm-ai-pm",
    title: "IBM Product Manager Professional Certificate",
    organization: "IBM, via Coursera",
    icon: "🏆",
    skills: [
      "Agile Development",
      "Agile Product Development",
      "ProdBOK",
      "Product Concept",
      "Product Delivery",
      "Product Management",
      "Product Management Lifecycle",
      "Product Owner",
      "Product Strategy",
      "Project Charter",
      "Sprint Planning",
      "Stakeholder Management",
      "Value Proposition"
    ]
  },
  {
    id: "google-ai-professional",
    title: "Google AI Professional Certificate",
    organization: "Google, via Coursera",
    icon: "✨",
    skills: [
      "AI Acumen",
      "AI for Data Analysis",
      "AI for brainstorming and planning",
      "AI for content creation",
      "AI for research and insights",
      "AI for writing and communicating",
      "Artificial Intelligence (AI)",
      "Prompt Engineering",
      "Responsible AI"
    ]
  },
  {
    id: "google-pm",
    title: "Google Project Management Professional Certificate",
    organization: "Google, via Coursera",
    icon: "✨",
    skills: [
      "Agile Project Management",
      "Career Development",
      "Introduction To Project Management",
      "Project Management"
    ]
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

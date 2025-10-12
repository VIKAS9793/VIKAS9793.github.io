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
  title: "AI Product Visionary",
  tagline: "Certified AI Product Manager with expertise in leading end-to-end development of sophisticated AI/ML solutions",
  bio: "IBM & Google certified professional specializing in Generative AI and LLM features with a proven track record in product management and strategic consulting.",
  location: "India",
  email: "vikassahani17@gmail.com",
  phone: "+91 7715072817",
  avatar: "/images/portfolio banner.png"
};

export const stats: Stat[] = [
  {
    id: "aum",
    label: "AUM Managed",
    value: "₹100Cr+",
    description: "Assets Under Management at Aditya Birla Capital"
  },
  {
    id: "market-tam",
    label: "Market TAM",
    value: "$12B",
    description: "Total Addressable Market for analytics platforms"
  },
  {
    id: "ai-consistency",
    label: "AI Consistency",
    value: "94%",
    description: "Character consistency rate in CharacterCraft Pro"
  },
  {
    id: "efficiency-gain",
    label: "Efficiency Gain",
    value: "25%",
    description: "Improvement in portfolio management processes"
  }
];

export const projects: Project[] = [
  {
    id: "saralpolicy",
    title: "SaralPolicy – AI-Powered Insurance Policy Explainer",
    description: "Conceived, designed, and launched SaralPolicy, a local-first AI assistant that simplifies insurance policy documents by explaining clauses, exclusions, and IRDAI rights in plain Hindi and English.",
    longDescription: "Validated user problem through 50+ customer interviews, uncovering key pain points around unreadable policy wording, hidden exclusions, and lack of privacy in existing tools.",
    image: "/images/saralpolicy.png",
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
    id: "netflix-case-study",
    title: "Netflix India PM Case Study",
    description: "Comprehensive educational framework demonstrating product management research methodology.",
    longDescription: "Features data quality audit processes, strategic framework application (RICE, JTBD, OKRs), and professional communication of uncertainty. Designed for PM interview preparation and skill development.",
    image: "/images/netflix-case-study.png",
    category: "product",
    featured: true,
    technologies: [
      "Product Strategy",
      "Research Methodology", 
      "RICE Framework",
      "Data Quality Audit",
      "Educational Resource",
      "PM Interview Prep"
    ],
    metrics: [
      { label: "Verification Level", value: "0.62/1.00" },
      { label: "Frameworks", value: "6+" },
      { label: "Research Depth", value: "Comprehensive" },
      { label: "License", value: "CC BY-NC-SA" }
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/VIKAS9793/netflix-india-pm-case-study.git",
        label: "View Project"
      }
    ]
  },
  {
    id: "moatmetrics",
    title: "MoatMetrics",
    description: "Enterprise analytics platform for MSPs addressing $12B market opportunity.",
    longDescription: "Privacy-first architecture with production-ready MVP targeting $1M ARR in Year 1.",
    image: "/images/moatmetrics.png",
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
      { label: "ARR Target Y1", value: "$1M" }
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
    description: "Revolutionary AI platform solving character consistency in generated images using Google Gemini 2.5 Flash with deterministic Prompt Protocol Engine.",
    image: "/images/charactercraft-pro.png",
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
    image: "/images/eduvault.png",
    category: "education",
    featured: true,
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
    image: "/images/ai-interview-system.jpg",
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
    title: "Portfolio Management",
    description: "Applied AI-driven analytics at Aditya Birla Capital managing high-net-worth clients.",
    longDescription: "Achieved 10% increase in diversification recommendations and 25% efficiency improvement.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "fintech",
    technologies: [
      "Financial Analysis",
      "Risk Management", 
      "AI Analytics",
      "Client Retention"
    ],
    metrics: [
      { label: "Current AUM", value: "₹100Cr" },
      { label: "Efficiency Gain", value: "+25%" }
    ],
    links: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/vikas-sahani-727420358",
        label: "Learn More"
      }
    ]
  }
];

export const simulations: Simulation[] = [
  {
    id: "ea-simulation",
    company: "Electronic Arts (EA)",
    description: "Analyzed KPIs for a mobile gaming product, creating a data-driven presentation to propose a new feature roadmap to increase user engagement.",
    skills: ["Data Analysis", "Product Strategy", "KPI Optimization", "Feature Roadmapping"]
  },
  {
    id: "jpmorgan-simulation", 
    company: "JPMorgan Chase",
    description: "Completed an enterprise software engineering simulation, implementing Kafka streams and debugging Java applications.",
    skills: ["Java", "Kafka Streams", "Enterprise Software", "Debugging"]
  },
  {
    id: "aws-simulation",
    company: "Amazon Web Services (AWS)",
    description: "Designed a scalable, cost-optimized hosting architecture for a new web application in a solutions architecture simulation.",
    skills: ["Cloud Architecture", "AWS Services", "Cost Optimization", "Scalability Design"]
  }
];

export const certifications: Certification[] = [
  {
    id: "gatech-ux",
    title: "Introduction to User Experience Design",
    organization: "Georgia Institute of Technology",
    icon: "🎨"
  },
  {
    id: "ibm-ai-pm",
    title: "AI Product Manager",
    organization: "IBM Professional Certificate",
    icon: "🏆"
  },
  {
    id: "google-pm",
    title: "Project Management", 
    organization: "Google Certificate",
    icon: "🎯"
  },
  {
    id: "pmi-genai",
    title: "Gen AI for PM",
    organization: "PMI Certificate", 
    icon: "⚡"
  },
  {
    id: "glasgow-mba",
    title: "MBA Essentials",
    organization: "University of Glasgow",
    icon: "🧠"
  },
  {
    id: "vanderbilt-genai",
    title: "Gen AI Software Engineering",
    organization: "Vanderbilt University",
    icon: "🤖"
  },
  {
    id: "crewai-agents",
    title: "AI Agents & Agentic AI",
    organization: "CrewAI, DeepLearning.AI",
    icon: "🔮"
  },
  {
    id: "google-genai",
    title: "Gen AI Essentials",
    organization: "Google Cloud",
    icon: "☁️"
  },
  {
    id: "langchain-apps",
    title: "LangChain Applications",
    organization: "DeepLearning.AI",
    icon: "🔗"
  },
  {
    id: "llm-pretraining",
    title: "LLM Pretraining & Fine-Tuning",
    organization: "DeepLearning.AI",
    icon: "🎓"
  },
  {
    id: "responsible-ai",
    title: "Responsible AI & Ethics",
    organization: "Rutgers, Google Cloud", 
    icon: "⚖️"
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    organization: "O.P. Jindal Global",
    icon: "🔬"
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
    type: "kaggle",
    label: "Kaggle",
    value: "Data Science",
    url: "https://www.kaggle.com/vikassahani9793", 
    icon: "📊"
  },
  {
    type: "google",
    label: "Google Developer",
    value: "Developer Profile", 
    url: "https://developers.google.com/profile/u/vikas9793",
    icon: "🌟"
  },
  {
    type: "credly",
    label: "Credly",
    value: "Verified Badges",
    url: "https://www.credly.com/users/vikas-sahani.e0a347d7/badges#credly",
    icon: "🏅"
  }
];
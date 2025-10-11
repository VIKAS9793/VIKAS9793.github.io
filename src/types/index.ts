export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  metrics: Metric[];
  links: ProjectLink[];
  featured?: boolean;
  category: 'ai' | 'product' | 'enterprise' | 'education' | 'fintech';
}

export interface Metric {
  label: string;
  value: string;
  description?: string;
}

export interface ProjectLink {
  type: 'github' | 'live' | 'case-study' | 'demo' | 'linkedin';
  url: string;
  label: string;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
  description?: string;
  icon?: string;
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  description?: string;
  year?: string;
  credentialUrl?: string;
  icon?: string;
}

export interface Simulation {
  id: string;
  company: string;
  description: string;
  skills: string[];
  completionYear?: string;
}

export interface ContactInfo {
  type: 'email' | 'phone' | 'linkedin' | 'github' | 'kaggle' | 'google' | 'credly' | 'twitter';
  label: string;
  value: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  avatar?: string;
  resumeUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  years?: number;
  description?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  description?: string;
  achievements?: string[];
  logo?: string;
}

// Animation and interaction types
export interface AnimationConfig {
  duration: number;
  delay: number;
  easing: string;
}

export interface ScrollTriggerConfig {
  trigger: string;
  start: string;
  end: string;
  scrub?: boolean;
  pin?: boolean;
}

export interface ThreeJSConfig {
  particles: {
    count: number;
    size: number;
    color: string;
    opacity: number;
  };
  camera: {
    position: [number, number, number];
    fov: number;
  };
  scene: {
    background: string;
    fog?: {
      color: string;
      near: number;
      far: number;
    };
  };
}

// Component props types
export interface HeroSectionProps {
  personalInfo: PersonalInfo;
  stats: Stat[];
}

export interface ProjectsSectionProps {
  projects: Project[];
  title?: string;
  subtitle?: string;
}

export interface CertificationsSectionProps {
  certifications: Certification[];
  title?: string;
  subtitle?: string;
}

export interface ContactSectionProps {
  contactInfo: ContactInfo[];
  personalInfo: PersonalInfo;
  title?: string;
  subtitle?: string;
}

// Utility types
export type Theme = 'dark' | 'light';
export type DeviceType = 'mobile' | 'tablet' | 'desktop';
export type LoadingStateType = 'idle' | 'loading' | 'success' | 'error';

export interface LoadingState {
  isLoading: boolean;
  error: string | null;
  progress: number;
  state: LoadingStateType;
}

export interface Viewport {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export interface MousePosition {
  x: number;
  y: number;
  normalizedX: number; // -1 to 1
  normalizedY: number; // -1 to 1
}

export interface CursorState {
  position: MousePosition;
  isHovering: boolean;
  hoverTarget: string | null;
  isVisible: boolean;
}

// Performance types
export interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  loadTime: number;
  renderTime: number;
}

export interface OptimizationConfig {
  enableAnimations: boolean;
  enableParticles: boolean;
  enableBlur: boolean;
  reduceMotion: boolean;
  lowPowerMode: boolean;
}
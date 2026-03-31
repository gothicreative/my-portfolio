export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl: string;
  galleryImages?: string[];
  liveUrl?: string;
  githubUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  category: ProjectCategory;
  platform: 'web' | 'mobile' | 'both';
  featured: boolean;
  date: string;
  metrics?: {
    users?: number;
    downloads?: number;
    performance?: string;
  };
}

export type ProjectCategory = 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'illustration' | 'hybrid';

export interface Skill {
  name: string;
  level: number; // 1-5 or percentage
  icon: string;
  category: SkillCategory;
  description?: string;
}

export type SkillCategory = 'frontend' | 'backend' | 'mobile' | 'creative' | 'tools' | 'databases';

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
  type: 'work' | 'freelance' | 'project';
  achievements?: string[];
  stack: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'hybrid';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType: 'web-development' | 'mobile-app' | 'fullstack' | 'illustration' | 'consultation';
  budget?: string;
  timeline?: string;
  platform?: 'web' | 'ios' | 'android' | 'both';
}

export interface NavigationItem {
  name: string;
  href: string;
  icon?: string;
}

export interface AppContextType {
  theme: 'light' | 'dark';
  language: 'en' | 'es' | 'fr';
  currentSection: string;
  isLoading: boolean;
  projects: Project[];
  skills: Skills;
}

export interface Skills {
  frontend: Skill[];
  backend: Skill[];
  mobile: Skill[];
  creative: Skill[];
  tools: Skill[];
  databases: Skill[];
}
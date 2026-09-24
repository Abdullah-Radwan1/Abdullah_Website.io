export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'saas' | 'web' | 'mobile';
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  date: string;
  isFeatured?: boolean;
  metrics?: string[];
  githubUrl?: string;
  liveUrl?: string;
  architectureNotes?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: string;
  location?: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  honors: string;
  gpa: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  level: string;
}

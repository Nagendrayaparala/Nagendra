export type ProjectCategory = 'all' | 'product' | 'webapp' | 'mobile' | 'experiment';

export interface ProjectCaseStudy {
  role: string;
  duration: string;
  problem: string;
  approach: string;
  implementation: string;
  outcome: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'product' | 'webapp' | 'mobile' | 'experiment';
  categoryLabel: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  caseStudy: ProjectCaseStudy;
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    level: string;
    tag: string;
    description: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  type: string;
  current?: boolean;
  summary: string;
  contributions: string[];
  techStack: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  score: string;
  focus: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface SkillItem {
  name: string;
  category?: string;
  iconName: string;
  color?: string;
}

export interface PersonalInfo {
  name: string;
  fullName: string;
  role: string;
  headline: string;
  statement: string;
  aboutIntro: string;
  aboutPhilosophy: string[];
  email: string;
  location: string;
  availability: string;
  statusText: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image: string;
}

export interface SkillItem {
  name: string;
  category?: string;
  iconName: string;
  color?: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  description: string;
  cgpa?: string;
  isEducation?: boolean;
}

export interface QuickStat {
  value: string;
  label: string;
  iconName: string;
}

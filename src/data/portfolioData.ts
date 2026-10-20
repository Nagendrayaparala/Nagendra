import { Project, SkillItem, ProcessStep, ExperienceItem, QuickStat } from '@/types';

export const PERSONAL_INFO = {
  name: 'Nagendra',
  brandName: 'NAGENDRA.',
  title: 'Frontend Developer',
  email: 'nagendra@example.com',
  linkedin: 'https://linkedin.com',
  github: 'https://github.com',
  twitter: 'https://twitter.com',
  resumeUrl: '#resume',
  status: 'Open to Opportunities',
};

export const QUICK_STATS: QuickStat[] = [
  {
    value: '1+',
    label: 'Years Experience',
    iconName: 'calendar',
  },
  {
    value: '10+',
    label: 'Projects Built',
    iconName: 'layers',
  },
  {
    value: 'Continuous',
    label: 'Learning',
    iconName: 'infinity',
  },
];

export const SKILLS: SkillItem[] = [
  { name: 'React', iconName: 'react', color: '#00D8FF' },
  { name: 'Next.js', iconName: 'nextjs', color: '#000000' },
  { name: 'JavaScript', iconName: 'javascript', color: '#F7DF1E' },
  { name: 'TypeScript', iconName: 'typescript', color: '#3178C6' },
  { name: 'Node.js', iconName: 'nodejs', color: '#339933' },
  { name: 'Express', iconName: 'express', color: '#333333' },
  { name: 'MongoDB', iconName: 'mongodb', color: '#47A248' },
  { name: 'MySQL', iconName: 'mysql', color: '#4479A1' },
  { name: 'Git', iconName: 'git', color: '#F05032' },
  { name: 'GitHub', iconName: 'github', color: '#181717' },
];

export const PROJECTS: Project[] = [
  {
    id: 'mockwin',
    title: 'MockWin',
    description: 'Recruitment and assessment product experiences.',
    tags: ['Next.js', 'React', 'TypeScript'],
    link: 'https://mockwin.example.com',
    image: '/projects/mockwin.jpg',
  },
  {
    id: 'ecom-rkv',
    title: 'Ecom-RKV',
    description: 'MERN stack e-commerce application.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://ecom-rkv.example.com',
    image: '/projects/ecom_rkv.jpg',
  },
  {
    id: 'mirror-news',
    title: 'Mirror News',
    description: 'Android news application with real-time updates.',
    tags: ['Java', 'XML', 'Firebase'],
    link: 'https://mirrornews.example.com',
    image: '/projects/mirror_news.jpg',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'step-1',
    number: '01',
    title: 'Understand the problem',
    description: 'Deconstruct requirements and constraints to identify the real challenge.',
    iconName: 'search',
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Reproduce the issue',
    description: 'Isolate behavior through consistent reproduction and edge-case testing.',
    iconName: 'clipboard',
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Investigate and analyze',
    description: 'Deep dive into data flows, component architecture, and runtime bottlenecks.',
    iconName: 'bar-chart',
  },
  {
    id: 'step-4',
    number: '04',
    title: 'Implement the solution',
    description: 'Write type-safe, maintainable, and clean code with optimal UX.',
    iconName: 'code',
  },
  {
    id: 'step-5',
    number: '05',
    title: 'Verify the result',
    description: 'Confirm resolution with testing, lighthouse benchmarks, and user checks.',
    iconName: 'check-circle',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: '2024 – Present',
    role: 'Frontend Developer',
    organization: 'Product Experiences',
    description: 'Working on product experiences with React.js and Next.js.',
  },
  {
    period: 'Internship',
    role: 'Web Developer Intern',
    organization: 'Bharath Intern',
    description: 'Building UI/UX and front-end features.',
  },
  {
    period: '2019 – 2023',
    role: 'B.Tech Computer Science',
    organization: 'RGUKT, RK Valley',
    description: 'Core computer science fundamentals, data structures, and web technologies.',
    cgpa: 'CGPA: 8.76',
    isEducation: true,
  },
];

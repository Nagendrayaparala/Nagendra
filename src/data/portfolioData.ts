import { PersonalInfo, Project, SkillCategory, ExperienceItem, EducationItem } from '@/types';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Nagendra',
  fullName: 'Nagendra Yaparala',
  role: 'Frontend Developer',
  headline: 'Frontend developer. Interface engineer. Detail obsessive.',
  statement:
    'I build thoughtful digital products with React, modern frontend technologies, and carefully crafted interactions. Currently engineering user-facing product interfaces at MockWin.',
  aboutIntro:
    'I believe that great frontend engineering is where design empathy meets computational discipline. Good frontend code makes complexity feel invisible to the user.',
  aboutPhilosophy: [
    'Focus on atomic component boundaries, single sources of truth, and predictable state flow.',
    'Prioritize semantic HTML, accessible navigation patterns, and keyboard ergonomics from day zero.',
    'Care deeply about real user latency: eliminating layout shifts, minimizing render churn, and respecting device budgets.',
  ],
  email: 'nagendrayaparala32@gmail.com',
  location: 'India · Available for Remote Worldwide',
  availability: 'Available for full-time frontend roles & engineering contracts',
  statusText: 'Open to Opportunities',
  github: 'https://github.com/Nagendrayaparala',
  linkedin: 'https://linkedin.com/in/nagendrayaparala',
  resumeUrl: '#contact',
};

export const PROJECTS: Project[] = [
  {
    id: 'mockwin',
    title: 'MockWin',
    subtitle: 'Candidate Assessment & Recruitment Engine UI',
    category: 'product',
    categoryLabel: 'Product UI · Assessment Engine',
    year: '2024',
    description:
      'Professional recruitment and candidate assessment product experience with high-fidelity test simulations, role benchmarking, and real-time candidate scorecards.',
    tags: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    image: '/projects/mockwin.jpg',
    liveUrl: 'https://mockwin.com',
    githubUrl: 'https://github.com/Nagendrayaparala',
    featured: true,
    metrics: [
      { label: 'Render Budget', value: '< 100ms' },
      { label: 'Accessibility', value: 'WCAG AA' },
      { label: 'Architecture', value: 'Modular UI' },
    ],
    caseStudy: {
      role: 'Frontend Developer',
      duration: 'Ongoing (2024)',
      problem:
        'Online technical assessments frequently suffer from clumsy candidate onboarding, jarring state transitions, and fragile form synchronization across timed question blocks.',
      approach:
        'Engineered an atomic component hierarchy dividing candidate test runners from proctor scorecards, establishing a clean contract for question state persistence.',
      implementation:
        'Constructed custom test simulation layouts in React and Next.js, integrating resilient timer hooks, local caching for candidate draft answers, and typed REST API bindings.',
      outcome:
        'Delivered an accessible, fluid candidate journey that prevents data loss during transient network interruptions and maintains smooth performance across all viewports.',
      highlights: [
        'Resilient client-side answer state caching preventing test loss',
        'WCAG AA accessible keyboard navigation across assessment flows',
        'Centralized design token implementation using Tailwind CSS',
      ],
    },
  },
  {
    id: 'ecom-rkv',
    title: 'Ecom-RKV',
    subtitle: 'Full-Stack MERN E-Commerce Storefront',
    category: 'webapp',
    categoryLabel: 'Web Application · MERN Stack',
    year: '2023',
    description:
      'Full-stack e-commerce web platform featuring authenticated buyer accounts, dynamic multi-facet catalog filtering, persistent shopping cart state, and Stripe payment flows.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    image: '/projects/ecom_rkv.jpg',
    liveUrl: 'https://github.com/Nagendrayaparala',
    githubUrl: 'https://github.com/Nagendrayaparala',
    featured: true,
    metrics: [
      { label: 'Stack', value: 'Full MERN' },
      { label: 'Cart Sync', value: 'Persistent' },
      { label: 'Checkout', value: 'Stripe 3DS' },
    ],
    caseStudy: {
      role: 'Full-Stack Developer',
      duration: '2023',
      problem:
        'Traditional e-commerce templates often face state desynchronization between cart drawers, catalog inventory counters, and checkout sessions.',
      approach:
        'Structured a centralized React context state store linked to an Express/MongoDB backend, ensuring single-source-of-truth inventory updates and secure checkout.',
      implementation:
        'Built dynamic catalog filtering with debounced search, modal product inspections, MongoDB aggregation pipelines, and secure JWT token authentication.',
      outcome:
        'Created a reliable shopping flow with real-time cart recalculations, optimistic UI feedback, and clean error boundaries.',
      highlights: [
        'Optimistic cart updates with instant price & tax calculation',
        'Secure token-based user authentication and order history',
        'Responsive mobile-first product grids with zero layout shift',
      ],
    },
  },
  {
    id: 'mirror-news',
    title: 'Mirror News',
    subtitle: 'Native Android News Aggregation Client',
    category: 'mobile',
    categoryLabel: 'Mobile App · Native Android',
    year: '2023',
    description:
      'Native Android news aggregation application delivering categorized global news feeds with offline cache management, push notifications, and customizable bookmarks.',
    tags: ['Java', 'Android SDK', 'XML Layouts', 'NewsAPI', 'Firebase'],
    image: '/projects/mirror_news.jpg',
    liveUrl: 'https://github.com/Nagendrayaparala',
    githubUrl: 'https://github.com/Nagendrayaparala',
    featured: true,
    metrics: [
      { label: 'Platform', value: 'Android' },
      { label: 'Offline', value: 'SQLite Cache' },
      { label: 'Feeds', value: 'NewsAPI' },
    ],
    caseStudy: {
      role: 'Android Developer',
      duration: '2023',
      problem:
        'News readers in variable connectivity areas experience white-screen freezes, repetitive feed fetches, and heavy battery drainage from unoptimized background tasks.',
      approach:
        'Designed an offline-first caching layer that stores fetched article models locally in SQLite, displaying instant cached feeds while background workers refresh data.',
      implementation:
        'Developed native XML layouts with RecyclerView, asynchronous HTTP networking via Retrofit/Volley, NewsAPI categorization, and Firebase event tracking.',
      outcome:
        'Delivered a lightweight, battery-efficient Android reader that launches instantly and allows smooth bookmarking and article skimming without active internet.',
      highlights: [
        'Offline article skimming with background cache sync',
        'Clean RecyclerView architectures with smooth scroll frame rates',
        'Firebase cloud messaging for breaking news notifications',
      ],
    },
  },
  {
    id: 'raraa',
    title: 'Raraa Boutique',
    subtitle: 'High-Performance Apparel Lookbook Storefront',
    category: 'webapp',
    categoryLabel: 'Web App · UI Boutique',
    year: '2022',
    description:
      'Lightweight, fast-loading apparel boutique storefront with custom CSS grid layouts, dynamic filtering, vanilla JavaScript cart state, and responsive checkout drawer.',
    tags: ['HTML5 Semantic', 'Modern CSS', 'Vanilla JavaScript', 'UI Precision'],
    image: '/projects/canvas_studio.jpg',
    liveUrl: 'https://github.com/Nagendrayaparala',
    githubUrl: 'https://github.com/Nagendrayaparala',
    featured: false,
    metrics: [
      { label: 'Lighthouse', value: '100 / 100' },
      { label: 'Layout Shift', value: '0.00 CLS' },
      { label: 'DOM Nodes', value: 'Minimal' },
    ],
    caseStudy: {
      role: 'Frontend Developer',
      duration: '2022',
      problem:
        'Heavy client-side bundles and bloated third-party plugins degrade boutique storefront load times and cause noticeable layout shifts on mobile devices.',
      approach:
        'Demonstrated raw frontend fundamentals by engineering the lookbook using semantic HTML5, pure CSS custom properties, and modular vanilla JavaScript.',
      implementation:
        'Created zero-dependency drawer physics, dynamic product attribute filters, client-side localStorage cart persistence, and mobile touch drawers.',
      outcome:
        'Achieved a flawless 100 Lighthouse performance benchmark with instantaneous initial page renders and fluid animations.',
      highlights: [
        'Zero-dependency vanilla JavaScript state management',
        'CSS Grid responsive masonry with zero layout shifts',
        'Fluid drawer transitions with micro-interactions',
      ],
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Engineering',
    description: 'Core languages and modern web standards ensuring semantic structure and high-performance render cycles.',
    skills: [
      {
        name: 'React.js',
        level: 'Primary',
        tag: 'Hooks · State · Architecture',
        description: 'Building modular component hierarchies, custom hooks, and predictable state lifecycles.',
      },
      {
        name: 'Next.js',
        level: 'Primary',
        tag: 'App Router · SSR · Optimizations',
        description: 'Developing high-speed web applications with server components, route handlers, and image optimization.',
      },
      {
        name: 'TypeScript',
        level: 'Primary',
        tag: 'Interfaces · Generics · Type Safety',
        description: 'Enforcing strict type boundaries across UI props, API contracts, and domain models.',
      },
      {
        name: 'JavaScript (ES6+)',
        level: 'Core',
        tag: 'Async · DOM · Event Loop',
        description: 'Deep understanding of modern JavaScript, closures, prototypal patterns, and async/await mechanics.',
      },
      {
        name: 'HTML5 Semantic Web',
        level: 'Core',
        tag: 'Accessibility · ARIA · SEO',
        description: 'Crafting accessible documents with semantic landmarks, micro-formats, and clean hierarchy.',
      },
      {
        name: 'CSS3 & Modern Layouts',
        level: 'Core',
        tag: 'Grid · Flexbox · Custom Properties',
        description: 'Architecting scalable CSS tokens, fluid responsive typography, and layout containment.',
      },
    ],
  },
  {
    id: 'ui-styling',
    name: 'UI Libraries & Architecture',
    description: 'Systematic token management and modular component libraries for consistent, resilient design execution.',
    skills: [
      {
        name: 'Tailwind CSS',
        level: 'Primary',
        tag: 'Utility First · Custom Themes',
        description: 'Centralizing design tokens, composing accessible utility layouts, and streamlining responsive views.',
      },
      {
        name: 'Bootstrap',
        level: 'Proficient',
        tag: 'Grid Systems · Breakpoints',
        description: 'Leveraging rapid scaffolding and responsive column layouts for administrative views.',
      },
      {
        name: 'Design Systems',
        level: 'Focus',
        tag: 'Tokens · Components · Guidelines',
        description: 'Establishing centralized color palettes, typographic scales, and reusable component contracts.',
      },
      {
        name: 'Responsive Design',
        level: 'Focus',
        tag: 'Mobile-First · Touch Ergonomics',
        description: 'Ensuring consistent usability across phones, tablets, laptops, and ultra-wide desktop monitors.',
      },
    ],
  },
  {
    id: 'backend',
    name: 'Backend & Data Integration',
    description: 'Connecting user interfaces to robust server endpoints, database schemas, and authenticated flows.',
    skills: [
      {
        name: 'Node.js & Express.js',
        level: 'Proficient',
        tag: 'REST APIs · Middleware',
        description: 'Authoring clean HTTP endpoints, error-handling middleware, and token authentication services.',
      },
      {
        name: 'RESTful API Design',
        level: 'Primary',
        tag: 'HTTP · JSON · Status Codes',
        description: 'Structuring clean API consumption layers with optimistic updates and resilient fallback states.',
      },
      {
        name: 'MongoDB',
        level: 'Proficient',
        tag: 'Mongoose · NoSQL Schemas',
        description: 'Designing data models, validation schemas, and indexed query operations.',
      },
      {
        name: 'MySQL',
        level: 'Proficient',
        tag: 'Relational · Joins · Queries',
        description: 'Managing structured tabular data, foreign keys, and normalized schema relationships.',
      },
    ],
  },
  {
    id: 'tooling',
    name: 'Developer Tools & Quality',
    description: 'Modern development workflow ensuring reproducible builds, team collaboration, and defect prevention.',
    skills: [
      {
        name: 'Git & GitHub',
        level: 'Daily',
        tag: 'Branches · PRs · Hygiene',
        description: 'Disciplined commit hygiene, pull request reviews, merge resolution, and release tagging.',
      },
      {
        name: 'Chrome DevTools',
        level: 'Daily',
        tag: 'Profiler · Network · DOM',
        description: 'Auditing layout performance, memory footprints, network waterfalls, and Lighthouse metrics.',
      },
      {
        name: 'Postman',
        level: 'Proficient',
        tag: 'API Testing · Environments',
        description: 'Validating payload contracts, response headers, and authentication tokens before UI integration.',
      },
      {
        name: 'VS Code & ESLint',
        level: 'Daily',
        tag: 'Formatting · Static Analysis',
        description: 'Maintaining clean code conventions, consistent formatting, and automated lint compliance.',
      },
    ],
  },
  {
    id: 'motion',
    name: 'Animation & Interaction',
    description: 'Purposeful motion design adding tangible tactile feedback without overwhelming the user or harming FPS.',
    skills: [
      {
        name: 'Micro-Interactions',
        level: 'Focus',
        tag: 'Haptic Feedback · Button Physics',
        description: 'Designing subtle button scale dips, hover shines, and instant tactile confirmations.',
      },
      {
        name: 'CSS Keyframes & Transitions',
        level: 'Primary',
        tag: 'GPU Accelerated · Transforms',
        description: 'Authoring 60fps transitions using transform and opacity, respecting prefers-reduced-motion.',
      },
      {
        name: 'Scroll & Viewport Motion',
        level: 'Focus',
        tag: 'Intersection Observer · Parallax',
        description: 'Staggering content entrances cleanly without layout recalculations or scroll jank.',
      },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'mockwin',
    period: '2024 — Present',
    role: 'Frontend Developer',
    organization: 'MockWin',
    location: 'India',
    type: 'Full-time',
    current: true,
    summary:
      'Engineering user-facing interfaces for the MockWin technical assessment and recruitment platform, translating design specifications into accessible, high-performance React and Next.js components.',
    contributions: [
      'Developed modular assessment simulator interfaces with Next.js and TypeScript, ensuring zero-latency timer synchronization and reliable state updates.',
      'Centralized UI design tokens using Tailwind CSS, establishing consistent typography, button states, and modal patterns across product views.',
      'Integrated complex REST API endpoints with typed payload validation, resilient error boundaries, and optimistic user feedback.',
      'Collaborated closely with product designers and backend engineers to maintain WCAG AA accessibility compliance and fast page load times.',
    ],
    techStack: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Git'],
  },
  {
    id: 'internship',
    period: '2022 — 2023',
    role: 'Web Development Intern',
    organization: 'Software Engineering Practice',
    location: 'India',
    type: 'Internship',
    current: false,
    summary:
      'Gained foundational professional experience developing cross-browser responsive frontend layouts, translating Figma prototypes into clean code, and performing component audits.',
    contributions: [
      'Built responsive web pages using semantic HTML5, modern CSS3, and JavaScript ES6+ from Figma design prototypes.',
      'Assisted in component refactoring to improve mobile touch interactions and reduce unnecessary DOM re-renders.',
      'Participated in Git version control workflows, pull request code reviews, and cross-browser testing on Chrome DevTools.',
    ],
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Git', 'Chrome DevTools'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    period: '2019 — 2023',
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'RGUKT, RK Valley',
    score: 'CGPA: 8.76 / 10.0',
    focus: 'Data Structures, Algorithms, Web Technologies, Database Systems, and Software Engineering.',
  },
];

export const PROCESS_STEPS = [
  { id: 'step-1', number: '01', title: 'Understand requirements', description: 'Deep dive into user intent and edge cases.', iconName: 'search' },
  { id: 'step-2', number: '02', title: 'Architecture & State', description: 'Divide components and design data contracts.', iconName: 'clipboard' },
  { id: 'step-3', number: '03', title: 'Implement & Style', description: 'Write accessible, responsive, clean code.', iconName: 'code' },
  { id: 'step-4', number: '04', title: 'Audit & Benchmark', description: 'Verify performance budgets and zero layout shifts.', iconName: 'check-circle' },
];

export const SKILLS = [
  { name: 'React.js', iconName: 'react', color: '#61DAFB' },
  { name: 'Next.js', iconName: 'nextjs', color: '#000000' },
  { name: 'TypeScript', iconName: 'typescript', color: '#3178C6' },
  { name: 'JavaScript', iconName: 'javascript', color: '#F7DF1E' },
  { name: 'HTML5', iconName: 'html5', color: '#E34F26' },
  { name: 'CSS3', iconName: 'css3', color: '#1572B6' },
  { name: 'Node.js', iconName: 'nodejs', color: '#339933' },
  { name: 'Tailwind CSS', iconName: 'tailwind', color: '#06B6D4' },
];

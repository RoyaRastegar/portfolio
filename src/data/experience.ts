import type { ExperienceItem } from '../types'

export const experience: ExperienceItem[] = [
  {
    id: 'tentacle-etiqa',
    role: 'Fullstack Developer',
    company: 'Tentacle | Etiqa Insurance & Takaful',
    location: 'Kuala Lumpur, Malaysia',
    period: 'Feb 2025 – Feb 2026',
    techStack: ['React', 'TypeScript', 'Vite', 'Micro-frontend', 'RTK Query', 'CI/CD'],
    bullets: [
      'Built micro-frontend modules for Commercial Vehicle Insurance using React, TypeScript, and Vite',
      'Designed a dynamic form engine for configurable, reusable business forms driven by JSON schema',
      'Implemented complex multi-step workflows with validation, state persistence, and error recovery',
      'Integrated backend services via RTK Query with caching, optimistic updates, and error handling',
      'Collaborated with DevOps on GitHub Actions CI/CD pipelines using Git tagging strategies',
    ],
  },
  {
    id: 'freelancer-kl',
    role: 'Mid-level Frontend Developer',
    company: 'Freelancer',
    location: 'Kuala Lumpur, Malaysia',
    period: 'Oct 2022 – Oct 2024',
    techStack: ['React', 'Redux', 'Tailwind CSS', 'REST API'],
    bullets: [
      'Built React/Redux frontend for an online shopping platform — product listing, cart, and checkout state',
      'Developed fully responsive UI for an online car rental booking flow and vehicle selection system',
      'Created a pet owners management application with complex multi-entity data workflows',
    ],
  },
  {
    id: 'pnd-texas',
    role: 'Mid-Level React Developer',
    company: 'PND',
    location: 'Texas, USA (Remote)',
    period: 'Oct 2021 – Oct 2022',
    techStack: ['React', 'Redux', 'Legacy Migration', 'JSP'],
    bullets: [
      'Migrated legacy JSP report forms to a modern React architecture, improving DX and performance',
      'Built wallet application frontend with React and Redux for financial transaction management',
      'Maintained and extended healthcare web application features with a focus on accessibility',
    ],
  },
  {
    id: 'hamrasta-tehran',
    role: 'Junior React Frontend Developer',
    company: 'Hamrasta',
    location: 'Tehran, Iran',
    period: 'Apr 2019 – Oct 2021',
    techStack: ['React', 'Redux', 'Government Systems', 'REST API'],
    bullets: [
      'Built React forms for government service payments across 12 distinct services',
      'Managed Redux state for 12 service forms and 4 department payment flows simultaneously',
      'Led weekly knowledge-sharing sessions on React patterns and tooling trade-offs',
    ],
  },
  {
    id: 'baharan-tehran',
    role: 'Junior Fullstack Developer',
    company: 'Baharan',
    location: 'Tehran, Iran',
    period: 'Apr 2018 – Apr 2019',
    techStack: ['Angular', 'Java Spring', 'PostgreSQL', 'Jasper Report'],
    bullets: [
      'Designed UI and built forms for an online exam system serving 500,000+ employees',
      'Implemented consolidated property reports in Jasper Report processing 500K+ records',
      'Optimised database queries achieving a 2× improvement in query response time',
    ],
  },
]

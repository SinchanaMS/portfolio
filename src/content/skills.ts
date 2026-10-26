export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    skills: [
      'React',
      'TypeScript',
      'Next.js',
      'Redux',
      'Zustand',
      'React Query',
      'AG Grid',
      'Storybook',
    ],
  },
  {
    id: 'backend-data',
    name: 'Backend & Data',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'PostgreSQL',
      'SQL',
      'Athena',
      'Metabase',
    ],
  },
  {
    id: 'cloud-realtime',
    name: 'Cloud & Real-time',
    skills: [
      'AWS (S3, CloudFront, AppConfig)',
      'WebSocket',
      'SSE',
      'Sentry',
    ],
  },
  {
    id: 'architecture',
    name: 'Architecture',
    skills: [
      'RBAC',
      'Multi-tenant Systems',
      'Frontend Architecture',
      'SEO',
      'Performance Optimization',
    ],
  },
];

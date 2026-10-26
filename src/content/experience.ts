export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
  // Flag for content that needs verification
  needsVerification?: boolean;
}

export const experience: Experience[] = [
  {
    id: 'arrowhead',
    company: 'Arrowhead AI',
    role: 'Software Engineer · Founding Engineer',
    period: 'Mar 2025 – Present',
    description:
      'Spearheading frontend development for a voice AI call-flow platform, building customer-facing dashboards, and owning the company website.',
    highlights: [
      'Built a visual Flow DSL editor for authoring, versioning, and deploying voice AI scripts — supporting 60-80 campaigns processing 30K calls/day',
      'Designed frontend architecture for multi-region product handling region-aware auth, API routing, and data consistency',
      'Implemented RBAC with 5 roles and resource-level permissions, enabling self-service access for 500+ users',
      'Built real-time capabilities using WebSockets, SSE, and WebRTC for flow testing and live call streaming',
      'Built company website (Next.js 15) with live AI demo, achieving Lighthouse score of ~90',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Zustand',
      'React Query',
      'Next.js',
      'WebSocket',
      'AWS',
    ],
    needsVerification: false,
  },
  {
    id: 'zeda',
    company: 'Zeda.io',
    role: 'Software Development Engineer',
    period: 'Aug 2022 – Dec 2024',
    description:
      'Built and maintained product experiences for an AI-powered product discovery platform using React, TypeScript, and Redux.',
    highlights: [
      'Owned authentication and onboarding workflows with complex edge-case handling',
      'Improved application performance — reduced load times by 20% and unnecessary re-renders by 30%',
      'Built integrations with Google Workspace, Slack, Jira, Intercom, HubSpot, Salesforce, and Gong',
      'Developed reusable design-system components using React, TypeScript, and Storybook',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Redux',
      'Storybook',
      'Node.js',
    ],
    needsVerification: false,
  },
  {
    id: 'infosys',
    company: 'Infosys',
    role: 'System Engineer',
    period: 'Jul 2018 – May 2022',
    description:
      'Automated workflows and built monitoring solutions for operational visibility.',
    highlights: [
      'Automated service account management workflows, reducing manual effort by 80%',
      'Built monitoring dashboards using Splunk and Power BI for operational visibility',
    ],
    technologies: [
      'Splunk',
      'Power BI',
      'Automation',
    ],
    needsVerification: false,
  },
];

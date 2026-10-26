export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  role: string;
  technologies: string[];
  featured: boolean;
  status: 'completed' | 'in-progress' | 'concept';
}

export const projects: Project[] = [
  {
    id: 'voice-ai-platform',
    slug: 'voice-ai-platform',
    title: 'Voice AI Workflow Platform',
    description:
      'Internal platform for designing, versioning, and deploying voice AI conversation flows. Features a visual Flow DSL editor, role-based access control, and configuration management.',
    role: 'Frontend Lead — Founding Software Engineer',
    technologies: ['React', 'TypeScript', 'Visual Flow Editor', 'RBAC'],
    featured: true,
    status: 'completed',
  },
  {
    id: 'advanced-data-table',
    slug: 'advanced-data-table',
    title: 'Advanced React DataTable',
    description:
      'A performant, virtualized data table component built with React and TypeScript. Handles large datasets with custom virtualization, sorting, and filtering.',
    role: 'Independent Project',
    technologies: ['React', 'TypeScript', 'Virtualization', 'Performance'],
    featured: true,
    status: 'completed',
  },
  {
    id: 'within',
    slug: 'within',
    title: 'Within',
    description:
      'A private cycle self-understanding application for tracking cycle dates, symptoms, and patterns. Focuses on privacy-conscious data handling and helpful contextual suggestions.',
    role: 'Product & Engineering',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    featured: true,
    status: 'in-progress',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

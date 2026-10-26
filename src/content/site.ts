export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  // These should be verified before deployment
  links: {
    github?: string;
    linkedin?: string;
    email?: string;
    resume?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Sinchana MS',
  title: 'Software Engineer',
  description:
    'Software Engineer building frontend experiences for complex products. React, TypeScript, Next.js, and Product Engineering.',
  links: {
    github: 'https://github.com/SinchanaMS',
    linkedin: 'https://www.linkedin.com/in/sinchana-ms/',
    email: 'sinchana.ms97@gmail.com',
    resume: '/resume.pdf',
  },
};

export const navigation = [
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
];

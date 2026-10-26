# Portfolio

A personal software engineer portfolio built with React, TypeScript, and Vite.

## Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite 5** - Build tool
- **React Router 6** - Client-side routing
- **CSS Modules** - Component-scoped styles

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/         # Header, Footer, Layout
│   └── ui/             # Reusable UI components
├── content/            # Data files (projects, experience, skills)
├── pages/
│   ├── case-studies/   # Project case study pages
│   ├── HomePage.tsx
│   └── NotFoundPage.tsx
├── styles/
│   ├── tokens.css      # Design tokens (colors, spacing, typography)
│   └── global.css      # Global styles and resets
├── App.tsx             # Router configuration
└── main.tsx            # Entry point
```

## Configuration

### Personal Information

Update `src/content/site.ts` with your information:

```typescript
export const siteConfig: SiteConfig = {
  name: 'Your Name',
  title: 'Software Engineer',
  description: 'Your professional description',
  links: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    email: 'your@email.com',
    resume: '/resume.pdf',
  },
};
```

### Experience & Projects

Edit the following files to customize content:
- `src/content/experience.ts` - Work experience
- `src/content/projects.ts` - Featured projects
- `src/content/skills.ts` - Technical skills

### Case Studies

Each case study has its own page in `src/pages/case-studies/`. Edit these files to update project details.

## Deployment

### Vercel

1. Connect your GitHub repository to Vercel
2. Set the framework preset to Vite
3. Build command: `npm run build`
4. Output directory: `dist`

For client-side routing to work with direct URL access, ensure your hosting platform is configured to serve `index.html` for all routes. Vercel handles this automatically.

### SPA Fallback Configuration

Create a `vercel.json` in the project root if needed:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Design System

The portfolio uses CSS custom properties for consistent styling:

- **Colors**: Warm, editorial palette with subtle accents
- **Typography**: Playfair Display (headings), Inter (body), JetBrains Mono (code)
- **Spacing**: Consistent spacing scale
- **Responsive**: Mobile-first design with tablet/desktop breakpoints

See `src/styles/tokens.css` for all design tokens.

## Content Review

Before publishing, review `CONTENT_REVIEW.md` for:
- Missing personal information
- Unverified employment details
- Content requiring approval
- Missing project assets

## License

Private repository. All rights reserved.

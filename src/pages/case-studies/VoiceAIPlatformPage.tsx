import { Link } from 'react-router-dom';
import { getProjectBySlug } from '../../content/projects';
import styles from './CaseStudy.module.css';

export function VoiceAIPlatformPage() {
  const project = getProjectBySlug('voice-ai-platform');

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <article className={styles.article}>
      {/* Header */}
      <header className={styles.header}>
        <Link to="/#work" className={styles.backLink}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          All projects
        </Link>
        <span className={styles.role}>{project.role}</span>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.meta}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>
      </header>

      {/* Hero Visual */}
      <div className={styles.heroVisual}>
        <div className={styles.visualPlaceholder}>
          <span>Project visual to be added</span>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Context & Problem</h2>
          <p>
            Arrowhead needed an internal platform for designing voice AI
            conversation flows. The platform required a visual editor that
            allowed technical users to author, version, and deploy conversation
            scripts without writing code directly.
          </p>
          <p>
            The challenge was building an interface that could represent complex
            conversation logic visually while maintaining the precision and
            version control capabilities that production deployments require.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Role & Responsibilities</h2>
          <p>
            As the founding software engineer with ownership of frontend
            development, I led the design and implementation of the visual Flow
            DSL editor and related platform features.
          </p>
          <ul>
            <li>Designed and built the visual flow editor interface</li>
            <li>Implemented versioning and diff comparison features</li>
            <li>Built role-based access control for multi-user workflows</li>
            <li>Developed configurable campaign and billing settings</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Technical Implementation</h2>
          <p>
            The visual editor represents conversation flows as a directed graph,
            where each node corresponds to a step in the conversation (prompts,
            decisions, API calls, etc.) and edges represent transitions between
            steps.
          </p>

          <h3>Flow Editor Architecture</h3>
          <ul>
            <li>
              <strong>Canvas rendering:</strong> Custom rendering layer for
              nodes and connections with zoom/pan controls
            </li>
            <li>
              <strong>State management:</strong> Centralized flow state with
              undo/redo support and validation
            </li>
            <li>
              <strong>DSL serialization:</strong> Bidirectional conversion
              between visual representation and deployable DSL format
            </li>
          </ul>

          <h3>Versioning System</h3>
          <p>
            The platform tracks changes to flows with full version history,
            enabling comparison between versions and safe promotion to
            production environments.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Key Decisions & Trade-offs</h2>
          <ul>
            <li>
              <strong>Custom canvas vs. library:</strong> Built a custom
              rendering solution to maintain full control over interaction
              patterns specific to conversation flows
            </li>
            <li>
              <strong>Optimistic updates:</strong> Local state updates with
              server reconciliation for responsive editing experience
            </li>
            <li>
              <strong>Role-based access:</strong> Granular permissions to
              separate editing from deployment responsibilities
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Outcomes</h2>
          <p>
            <em>
              Specific metrics and adoption figures to be verified before
              publication.
            </em>
          </p>
          <ul>
            <li>Platform used for authoring production voice AI campaigns</li>
            <li>Reduced deployment errors through visual validation</li>
            <li>
              Enabled non-engineers to participate in conversation design
            </li>
          </ul>
        </section>
      </div>

      {/* Navigation */}
      <nav className={styles.caseStudyNav}>
        <Link to="/work/advanced-data-table" className={styles.nextProject}>
          <span className={styles.navLabel}>Next project</span>
          <span className={styles.navTitle}>Advanced React DataTable</span>
        </Link>
      </nav>
    </article>
  );
}

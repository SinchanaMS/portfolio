import { Link } from 'react-router-dom';
import { getProjectBySlug } from '../../content/projects';
import styles from './CaseStudy.module.css';

export function WithinPage() {
  const project = getProjectBySlug('within');

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
          <span className={styles.tag}>In Progress</span>
        </div>
      </header>

      {/* Hero Visual */}
      <div className={styles.heroVisual}>
        <div className={styles.visualPlaceholder}>
          <span>App screenshots to be added</span>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Project Overview</h2>
          <p>
            Within is a personal project exploring how to build a thoughtful,
            privacy-focused cycle tracking application. The goal is to help
            users understand their patterns through simple daily check-ins and
            visualizations, without the complexity or questionable data
            practices of many existing apps.
          </p>
          <p>
            <em>
              This project is currently in development. The following describes
              the intended design and implementation approach.
            </em>
          </p>
        </section>

        <section className={styles.section}>
          <h2>Product Thinking</h2>

          <h3>Target User</h3>
          <p>
            Someone who wants to track their cycle for personal awareness, not
            for fertility planning or medical diagnosis. They value simplicity
            and privacy over feature count.
          </p>

          <h3>Core Experience</h3>
          <ul>
            <li>
              <strong>Quick daily check-in:</strong> Log how you're feeling
              without overwhelming forms
            </li>
            <li>
              <strong>Calendar view:</strong> See cycle history and patterns at
              a glance
            </li>
            <li>
              <strong>Pattern insights:</strong> Understand your typical cycle
              length and phase timing
            </li>
            <li>
              <strong>Contextual suggestions:</strong> Phase-aware tips for
              self-care (not medical advice)
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Technical Implementation</h2>

          <h3>Stack</h3>
          <ul>
            <li>
              <strong>Next.js:</strong> Server-side rendering for fast initial
              loads
            </li>
            <li>
              <strong>TypeScript:</strong> Type safety for domain models
            </li>
            <li>
              <strong>Firebase:</strong> Authentication and data persistence
            </li>
            <li>
              <strong>Tailwind CSS:</strong> Utility-first styling
            </li>
          </ul>

          <h3>Data Model</h3>
          <p>
            The application tracks periods, daily symptom logs, and derives
            cycle phases from this data. All calculations happen client-side
            from stored observations.
          </p>

          <h3>Privacy Approach</h3>
          <ul>
            <li>All data owned by the user, scoped to their account</li>
            <li>No analytics that collect health data</li>
            <li>Firebase Security Rules enforce data isolation</li>
            <li>No sharing of data with third parties</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Design Decisions</h2>

          <h3>Predictions as Estimates</h3>
          <p>
            Phase predictions are labeled as estimates, not certainties. The app
            doesn't claim to know when ovulation occurred or provide fertility
            information.
          </p>

          <h3>Gentle Suggestions</h3>
          <p>
            Contextual suggestions are framed as ideas to consider, not
            prescriptions. They acknowledge that everyone experiences their
            cycle differently.
          </p>

          <h3>Missing Data Handling</h3>
          <p>
            Days without logs aren't treated as symptom-free. The interface
            distinguishes between "no symptoms logged" and "no data for this
            day."
          </p>
        </section>

        <section className={styles.section}>
          <h2>Current Status</h2>
          <p>The project is in active development. Completed features include:</p>
          <ul>
            <li>User authentication with Firebase</li>
            <li>Basic daily logging interface</li>
            <li>Calendar view with period tracking</li>
            <li>Firestore security rules</li>
          </ul>
          <p>Planned features:</p>
          <ul>
            <li>Pattern analysis and insights</li>
            <li>Contextual suggestions based on cycle phase</li>
            <li>Data export</li>
            <li>Account deletion</li>
          </ul>
        </section>
      </div>

      {/* Navigation */}
      <nav className={styles.caseStudyNav}>
        <Link to="/work/advanced-data-table" className={`${styles.nextProject} ${styles.prevProject}`}>
          <span className={styles.navLabel}>Previous project</span>
          <span className={styles.navTitle}>Advanced React DataTable</span>
        </Link>
      </nav>
    </article>
  );
}

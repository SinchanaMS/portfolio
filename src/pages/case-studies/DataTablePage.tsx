import { Link } from 'react-router-dom';
import { getProjectBySlug } from '../../content/projects';
import styles from './CaseStudy.module.css';

export function DataTablePage() {
  const project = getProjectBySlug('advanced-data-table');

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
          <span>DataTable demo or screenshot to be added</span>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Problem</h2>
          <p>
            Rendering large datasets in a table format presents significant
            performance challenges in React applications. Naive implementations
            that render all rows simultaneously cause sluggish interfaces, slow
            initial loads, and poor scroll performance.
          </p>
          <p>
            This project explores virtualization techniques to render only
            visible rows while maintaining smooth scrolling and standard table
            interactions.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Technical Approach</h2>

          <h3>Virtualization Strategy</h3>
          <p>
            The table renders only rows that are currently visible in the
            viewport, plus a small overscan buffer for smooth scrolling. As the
            user scrolls, rows are dynamically added and removed from the DOM.
          </p>
          <ul>
            <li>
              <strong>Viewport calculation:</strong> Determine visible row range
              based on scroll position and container height
            </li>
            <li>
              <strong>Overscan:</strong> Render additional rows above and below
              the visible area to prevent blank areas during fast scrolling
            </li>
            <li>
              <strong>Positioning:</strong> Absolutely position rows within a
              container that maintains total list height for accurate scrollbar
              behavior
            </li>
          </ul>

          <h3>TypeScript Architecture</h3>
          <p>
            The component uses generic type parameters for row data and column
            definitions, enabling type-safe column accessors and cell renderers.
          </p>
          <pre className={styles.codeBlock}>
{`interface Column<T> {
  key: keyof T | string;
  header: string;
  width?: number;
  render?: (value: unknown, row: T) => ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  rowHeight: number;
  height: number;
}`}
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Implementation Details</h2>

          <h3>Scroll Handling</h3>
          <p>
            The scroll handler calculates which rows should be visible based on
            the current scroll offset. Using <code>requestAnimationFrame</code>{' '}
            or scroll event throttling prevents excessive re-renders during
            rapid scrolling.
          </p>

          <h3>Row Rendering</h3>
          <p>
            Each visible row is positioned using CSS transforms, which avoids
            layout thrashing and enables GPU acceleration for smooth scrolling.
          </p>

          <h3>Features</h3>
          <ul>
            <li>Virtual scrolling for large datasets</li>
            <li>Generic TypeScript column and row definitions</li>
            <li>Configurable row height and overscan</li>
            <li>Sorting support (when implemented)</li>
            <li>Accessible keyboard navigation patterns</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Performance Considerations</h2>
          <p>
            <em>
              Specific performance measurements to be added after benchmarking.
            </em>
          </p>
          <ul>
            <li>
              DOM node count remains constant regardless of dataset size
            </li>
            <li>
              Memory usage is proportional to visible rows, not total rows
            </li>
            <li>
              Scroll performance maintained even with thousands of rows
            </li>
          </ul>

          <h3>Measurement Approach</h3>
          <p>
            Performance can be measured using React DevTools Profiler to compare
            render times and DOM node counts between virtualized and
            non-virtualized implementations.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Lessons Learned</h2>
          <ul>
            <li>
              Scroll event handling requires careful throttling to balance
              responsiveness with performance
            </li>
            <li>
              CSS transforms for row positioning outperform top/left positioning
            </li>
            <li>
              Overscan buffer size is a trade-off between smooth scrolling and
              render cost
            </li>
          </ul>
        </section>
      </div>

      {/* Navigation */}
      <nav className={styles.caseStudyNav}>
        <div className={styles.dualNav}>
          <Link to="/work/voice-ai-platform" className={`${styles.nextProject} ${styles.prevProject}`}>
            <span className={styles.navLabel}>Previous project</span>
            <span className={styles.navTitle}>Voice AI Platform</span>
          </Link>
          <Link to="/work/within" className={styles.nextProject}>
            <span className={styles.navLabel}>Next project</span>
            <span className={styles.navTitle}>Within</span>
          </Link>
        </div>
      </nav>
    </article>
  );
}

import { siteConfig } from '../../content/site';
import styles from './Footer.module.css';

export function Footer() {
  const { links } = siteConfig;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'GitHub', href: links.github },
    { label: 'LinkedIn', href: links.linkedin },
    { label: 'Email', href: links.email ? `mailto:${links.email}` : undefined },
  ].filter((link) => link.href);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.copyright}>
            {currentYear}
          </p>

          {socialLinks.length > 0 && (
            <nav aria-label="Social links">
              <ul className={styles.links}>
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={styles.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation, siteConfig } from '../../content/site';
import styles from './Header.module.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const isScrollingRef = useRef(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Track active section on scroll
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sectionIds = ['work', 'experience', 'skills', 'contact'];

    const handleScroll = () => {
      if (isScrollingRef.current) return;

      // Check if at bottom of page
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 100;
      if (atBottom) {
        setActiveSection('contact');
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight * 0.3;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    setIsMenuOpen(false);

    // Handle hash navigation for same-page links
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        // Disable observer while scrolling
        isScrollingRef.current = true;
        setActiveSection(targetId);
        element.scrollIntoView({ behavior: 'smooth' });

        // Re-enable observer after scroll completes
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 1000);
      }
    }
  };

  const isActive = (href: string) => {
    const sectionId = href.replace('/#', '');
    return activeSection === sectionId;
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          {siteConfig.name !== 'FULL_NAME_NEEDED' ? siteConfig.name : 'Portfolio'}
        </Link>

        <nav className={styles.desktopNav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {navigation.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={`${styles.navLink} ${isActive(item.href) ? styles.navLinkActive : ''}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={styles.menuIcon} data-open={isMenuOpen}>
            <span></span>
            <span></span>
          </span>
        </button>

        {isMenuOpen && (
          <nav
            id="mobile-menu"
            className={styles.mobileNav}
            aria-label="Mobile navigation"
          >
            <ul className={styles.mobileNavList}>
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className={`${styles.mobileNavLink} ${isActive(item.href) ? styles.mobileNavLinkActive : ''}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

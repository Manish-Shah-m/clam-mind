'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🌿</span>
          <span className={styles.logoText}>Calm Mind</span>
        </Link>
        
        <button
          className={`${styles.menuButton} ${menuOpen ? styles.menuOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
        </button>
        
        <Navigation isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </header>
  );
}
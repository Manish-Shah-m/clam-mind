'use client';

import Link from 'next/link';
import { useState } from 'react';
import Navigation from './Navigation';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Calm Mind
        </Link>
        
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={styles.menuIcon}></span>
        </button>
        
        <Navigation isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </header>
  );
}
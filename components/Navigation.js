'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/understanding', label: 'Understanding' },
  { href: '/depression-vs', label: 'Comparisons' },
  { href: '/support-others', label: 'Support' },
  { href: '/reflect', label: 'Reflect' },
  { href: '/mood-tracker', label: 'Mood' },
  { href: '/journal', label: 'Journal' },
  { href: '/wellbeing', label: 'Resources' },
];

export default function Navigation({ isOpen, onClose }) {
  const pathname = usePathname();

  return (
    <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
      <ul className={styles.navList}>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={pathname === link.href ? styles.active : ''}
              onClick={onClose}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
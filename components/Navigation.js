'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

const links = [
  { href: '/understanding', label: 'Understanding' },
  { href: '/depression-vs', label: 'Comparisons' },
  { href: '/misconceptions', label: 'Misconceptions' },
  { href: '/support-others', label: 'Support Others' },
  { href: '/reflect', label: 'Reflect' },
  { href: '/mood-tracker', label: 'Mood' },
  { href: '/journal', label: 'Journal' },
  { href: '/letters', label: 'Letters' },
  { href: '/wellbeing', label: 'Well-Being' },
  { href: '/community', label: 'Community' },
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
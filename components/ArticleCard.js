import Link from 'next/link';
import styles from './ArticleCard.module.css';

export default function ArticleCard({ title, description, href, theme = 'calm' }) {
  return (
    <Link href={href} className={`${styles.card} ${styles[theme]}`}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <span className={styles.arrow}>→</span>
    </Link>
  );
}
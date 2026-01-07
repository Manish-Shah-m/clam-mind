import styles from './ContentSection.module.css';

export default function ContentSection({ title, children, variant = 'default' }) {
  return (
    <section className={`${styles.section} ${styles[variant]}`}>
      <div className="container-narrow">
        {title && <h2 className={styles.title}>{title}</h2>}
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </section>
  );
}
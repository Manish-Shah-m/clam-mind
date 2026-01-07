import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          © {currentYear} Calm Mind
        </div>
        
        <div className={styles.center}>
          Mess creates magic
        </div>
        
        <div className={styles.right}>
          <a 
            href="https://manishshah.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.designerLink}
          >
            Designed & Developed by Manish Shah
          </a>
        </div>
      </div>
    </footer>
  );
}
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      
      {/* Main Footer Content */}
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          
          {/* About Section */}
          <div className={styles.about}>
            <h3 className={styles.footerBrand}>Calm Mind</h3>
            <p className={styles.aboutText}>
              A gentle space for understanding depression, reflecting on emotions, 
              and finding support—without pressure, without judgment.
            </p>
          </div>

          {/* Navigation Links */}
          <div className={styles.columns}>
            
            {/* Learn Column */}
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Learn</h4>
              <ul className={styles.columnLinks}>
                <li><Link href="/understanding">Understanding Depression</Link></li>
                <li><Link href="/depression-vs">Depression vs Others</Link></li>
                <li><Link href="/misconceptions">Misconceptions</Link></li>
                <li><Link href="/support-others">Support Others</Link></li>
              </ul>
            </div>

            {/* Reflect Column */}
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Reflect</h4>
              <ul className={styles.columnLinks}>
                <li><Link href="/reflect">Daily Reflection</Link></li>
                <li><Link href="/mood-tracker">Mood Tracker</Link></li>
                <li><Link href="/journal">Journal</Link></li>
                <li><Link href="/letters">Letters</Link></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Resources</h4>
              <ul className={styles.columnLinks}>
                <li><Link href="/wellbeing">Well-Being Tools</Link></li>
                <li><Link href="/community">Community</Link></li>
              </ul>
            </div>

            {/* Crisis Support Column */}
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Crisis Support</h4>
              <div className={styles.crisisLinks}>
                <div className={styles.crisisItem}>
                  <span className={styles.crisisLabel}>US</span>
                  <a href="tel:988">988</a>
                </div>
                <div className={styles.crisisItem}>
                  <span className={styles.crisisLabel}>UK</span>
                  <a href="tel:116123">116 123</a>
                </div>
                <div className={styles.crisisItem}>
                  <span className={styles.crisisLabel}>Global</span>
                  <a href="https://findahelpline.com" target="_blank" rel="noopener noreferrer">
                    Find Helpline
                  </a>
                </div>
              </div>
              <p className={styles.available}>Available 24/7</p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <div className={styles.bottomGrid}>
            
            <div className={styles.bottomLeft}>
              <p>© {currentYear} Calm Mind</p>
            </div>

            <div className={styles.bottomCenter}>
              <p className={styles.motto}>Mess creates magic</p>
            </div>

            <div className={styles.bottomRight}>
              <p>
                Designed & Developed by{' '}
                <a 
                  href="https://manishshah.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Manish Shah
                </a>
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className={styles.disclaimer}>
        <div className={styles.container}>
          <p>
            <strong>Disclaimer:</strong> This website provides educational information and support tools. 
            It does not provide medical advice, diagnosis, or treatment. 
            If you're experiencing a mental health crisis, please contact a professional immediately.
          </p>
        </div>
      </div>

    </footer>
  );
}
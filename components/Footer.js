import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const sections = [
    {
      title: 'Learn',
      links: [
        { href: '/understanding', label: 'Understanding Depression' },
        { href: '/depression-vs', label: 'Depression vs Others' },
        { href: '/misconceptions', label: 'Misconceptions' },
        { href: '/support-others', label: 'Support Others' },
      ]
    },
    {
      title: 'Reflect',
      links: [
        { href: '/reflect', label: 'Daily Reflection' },
        { href: '/mood-tracker', label: 'Mood Tracker' },
        { href: '/journal', label: 'Journal' },
        { href: '/letters', label: 'Letters' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { href: '/wellbeing', label: 'Well-Being Tools' },
        { href: '/community', label: 'Community' },
      ]
    },
  ];
  
  return (
    <footer className={styles.footer}>
      {/* Main Footer */}
      <div className={styles.main}>
        <div className={styles.container}>
          
          {/* Brand Section */}
          <div className={styles.brand}>
            <h3 className={styles.brandName}>Calm Mind</h3>
            <p className={styles.brandTagline}>
              A gentle space for understanding, reflection, and support.
            </p>
            <div className={styles.principles}>
              <span>Private</span>
              <span className={styles.dot}>·</span>
              <span>Safe</span>
              <span className={styles.dot}>·</span>
              <span>Non-judgmental</span>
            </div>
          </div>

          {/* Link Sections */}
          {sections.map((section) => (
            <div key={section.title} className={styles.section}>
              <h4 className={styles.sectionTitle}>{section.title}</h4>
              <ul className={styles.linkList}>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Crisis Section */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Crisis Support</h4>
            <ul className={styles.crisisList}>
              <li>
                <span className={styles.country}>US</span>
                <a href="tel:988">988</a>
              </li>
              <li>
                <span className={styles.country}>UK</span>
                <a href="tel:116123">116 123</a>
              </li>
              <li>
                <span className={styles.country}>Global</span>
                <a href="https://findahelpline.com" target="_blank" rel="noopener noreferrer">
                  Find a Helpline
                </a>
              </li>
            </ul>
            <p className={styles.crisisNote}>Available 24/7</p>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              © {currentYear} Calm Mind
            </div>
            
            <div className={styles.tagline}>
              Mess creates magic
            </div>
            
            <div className={styles.credit}>
              <span>Designed & Developed by</span>
              <a 
                href="https://manishshah.dev" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Manish Shah
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className={styles.disclaimer}>
        <div className={styles.container}>
          <p>
            This website provides educational information and support tools. 
            It does not provide medical advice, diagnosis, or treatment. 
            If you're experiencing a mental health crisis, please contact a professional immediately.
          </p>
        </div>
      </div>
    </footer>
  );
}
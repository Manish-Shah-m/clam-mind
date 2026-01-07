import Link from 'next/link';
import styles from './page.module.css';
import ArticleCard from '@/components/ArticleCard';

export default function HomePage() {
  return (
    <>
      {/* Premium Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb1}></div>
          <div className={styles.gradientOrb2}></div>
          <div className={styles.gradientOrb3}></div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroContainer}>
            {/* Badge */}
            <div className={styles.heroBadge}>
              <span className={styles.badgeDot}></span>
              A safe, non-judgmental space
            </div>

            {/* Main Heading */}
            <h1 className={styles.heroTitle}>
              You're not alone in
              <span className={styles.heroTitleAccent}> how you feel</span>
            </h1>

            {/* Subtitle */}
            <p className={styles.heroSubtitle}>
              A gentle space for understanding depression, reflecting on emotions, 
              and finding clarity—without pressure, without judgment.
            </p>

            {/* CTA Buttons */}
            <div className={styles.heroActions}>
              <Link href="/understanding" className={styles.heroCta}>
                <span>Start Understanding</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              
              <Link href="/reflect" className={styles.heroCtaSecondary}>
                <span>Begin Reflecting</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className={styles.heroTrust}>
              <div className={styles.trustItem}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 1L12.5 6.5L18.5 7L14 11.5L15.5 17.5L10 14.5L4.5 17.5L6 11.5L1.5 7L7.5 6.5L10 1Z" fill="var(--accent-calm)" stroke="var(--accent-calm)" strokeWidth="1.5"/>
                </svg>
                <span>100% Private</span>
              </div>
              <div className={styles.trustItem}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="var(--accent-calm)" strokeWidth="1.5"/>
                  <path d="M6 10L9 13L14 7" stroke="var(--accent-calm)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>No Diagnosis</span>
              </div>
              <div className={styles.trustItem}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2C10 2 4 4 4 8C4 12 7 16 10 18C13 16 16 12 16 8C16 4 10 2 10 2Z" stroke="var(--accent-calm)" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                <span>Always Safe</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollDot}></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>Educational Topics</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>4</div>
              <div className={styles.statLabel}>Reflection Tools</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Private & Local</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>0</div>
              <div className={styles.statLabel}>Judgment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn & Understand Section */}
      <section className={styles.sectionContainer}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Education</span>
            <h2>Learn & Understand</h2>
            <p>Educational content written with care and clarity</p>
          </div>
          
          <div className={styles.grid}>
            <ArticleCard
              title="Understanding Depression"
              description="What it is, what it isn't, and why it matters to understand the difference."
              href="/understanding"
              theme="calm"
            />
            
            <ArticleCard
              title="Depression vs Other States"
              description="How depression differs from burnout, grief, loneliness, and sadness."
              href="/depression-vs"
              theme="warm"
            />
            
            <ArticleCard
              title="Misconceptions & Harm"
              description="Why 'just be positive' doesn't work and what actually helps."
              href="/misconceptions"
              theme="gentle"
            />
            
            <ArticleCard
              title="Supporting Someone Else"
              description="How to listen, what to say, and when to encourage help."
              href="/support-others"
              theme="safe"
            />
          </div>
        </div>
      </section>

      {/* Reflect & Process Section */}
      <section className={styles.sectionContainer} style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Tools</span>
            <h2>Reflect & Process</h2>
            <p>Private, judgment-free tools for self-reflection</p>
          </div>
          
          <div className={styles.grid}>
            <ArticleCard
              title="Gentle Reflection"
              description="End-of-day prompts to notice what felt heavy and what brought ease."
              href="/reflect"
              theme="calm"
            />
            
            <ArticleCard
              title="Mood Tracker"
              description="A simple, private way to track how you're feeling over time."
              href="/mood-tracker"
              theme="warm"
            />
            
            <ArticleCard
              title="Journaling Space"
              description="Write freely in a private, judgment-free space. Nothing is shared."
              href="/journal"
              theme="gentle"
            />
            
            <ArticleCard
              title="Letters to Yourself"
              description="Write letters you never sent, or messages to your future self."
              href="/letters"
              theme="safe"
            />
          </div>
        </div>
      </section>

      {/* Support & Connection Section */}
      <section className={styles.sectionContainer}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Community</span>
            <h2>Support & Connection</h2>
            <p>Tools, practices, and safe spaces for community</p>
          </div>
          
          <div className={styles.grid}>
            <ArticleCard
              title="Well-Being Tools"
              description="Affirmations, art prompts, sleep tips, and calming practices."
              href="/wellbeing"
              theme="calm"
            />
            
            <ArticleCard
              title="Community Spaces"
              description="Safe, moderated discussions on stress, school, motivation, and more."
              href="/community"
              theme="warm"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className="container-narrow">
          <h3 className={styles.finalCtaTitle}>Take your time</h3>
          <p className={styles.finalCtaText}>
            There's no right way to use this space. Explore what feels right, 
            skip what doesn't, and remember—healing isn't linear.
          </p>
          <Link href="/understanding" className={styles.finalCtaButton}>
            Explore All Resources
          </Link>
        </div>
      </section>
    </>
  );
}
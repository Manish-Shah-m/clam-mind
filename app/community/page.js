import ContentSection from '@/components/ContentSection';

export const metadata = {
  title: 'Community Spaces — Calm Mind',
  description: 'Safe, moderated discussion spaces for mental health topics.',
};

export default function CommunityPage() {
  return (
    <>
      <ContentSection title="Community Spaces">
        <p>
          Safe, moderated spaces to share experiences, ask questions, and connect 
          with others who understand. All discussions are anonymous and judgment-free.
        </p>
        <p>
          <strong>Important:</strong> These spaces are for peer support, not crisis intervention. 
          If you're in crisis, please contact a professional helpline.
        </p>
      </ContentSection>

      <ContentSection title="Discussion Rooms" variant="alternate">
        <div style={{ display: 'grid', gap: 'var(--spacing-lg)', marginTop: 'var(--spacing-lg)' }}>
          
          <div style={{ padding: 'var(--spacing-md)', background: 'var(--bg-card)', borderLeft: '3px solid var(--accent-calm)', borderRadius: '4px' }}>
            <h3>General Support</h3>
            <p>A space to share what you're going through and find understanding.</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>Coming soon</p>
          </div>

          <div style={{ padding: 'var(--spacing-md)', background: 'var(--bg-card)', borderLeft: '3px solid var(--accent-warm)', borderRadius: '4px' }}>
            <h3>School & Academic Stress</h3>
            <p>Discuss pressure, burnout, and finding balance in academic life.</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>Coming soon</p>
          </div>

          <div style={{ padding: 'var(--spacing-md)', background: 'var(--bg-card)', borderLeft: '3px solid var(--accent-gentle)', borderRadius: '4px' }}>
            <h3>Work & Career</h3>
            <p>Navigate workplace stress, imposter syndrome, and career uncertainty.</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>Coming soon</p>
          </div>

          <div style={{ padding: 'var(--spacing-md)', background: 'var(--bg-card)', borderLeft: '3px solid var(--safe)', borderRadius: '4px' }}>
            <h3>Finding Motivation</h3>
            <p>When getting out of bed feels impossible—share strategies and support.</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>Coming soon</p>
          </div>

          <div style={{ padding: 'var(--spacing-md)', background: 'var(--bg-card)', borderLeft: '3px solid var(--accent-calm)', borderRadius: '4px' }}>
            <h3>Relationships & Loneliness</h3>
            <p>Discuss connection, isolation, and navigating relationships while struggling.</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>Coming soon</p>
          </div>

        </div>
      </ContentSection>

      <ContentSection title="Community Guidelines">
        <h3>Our Values</h3>
        <ul>
          <li>Be kind and compassionate</li>
          <li>No judgment or criticism</li>
          <li>Respect privacy and anonymity</li>
          <li>No giving medical advice</li>
          <li>Content warnings for triggering topics</li>
        </ul>

        <h3>What's Not Allowed</h3>
        <ul>
          <li>Graphic descriptions of self-harm or suicide methods</li>
          <li>Promoting harmful behaviors</li>
          <li>Shaming or invalidating others</li>
          <li>Spam or promotional content</li>
        </ul>

        <p>
          All discussions are moderated. If you see something concerning, 
          please report it to our moderation team.
        </p>
      </ContentSection>
    </>
  );
}
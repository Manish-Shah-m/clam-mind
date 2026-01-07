import ContentSection from '@/components/ContentSection';

export const metadata = {
  title: 'Well-Being Tools — Calm Mind',
  description: 'Gentle practices, affirmations, and tools for emotional well-being.',
};

export default function WellbeingPage() {
  return (
    <>
      <ContentSection title="Well-Being Tools">
        <p>
          These are gentle practices and tools to support your emotional well-being. 
          Take what resonates, leave what doesn't. There's no pressure to do everything.
        </p>
      </ContentSection>

      <ContentSection title="Daily Affirmations" variant="alternate">
        <p>
          Affirmations that feel realistic and grounding—not toxic positivity.
        </p>
        <ul>
          <li>You are allowed to take up space</li>
          <li>Rest is not weakness</li>
          <li>Your feelings are valid</li>
          <li>Healing is not linear</li>
          <li>You don't have to earn your worth</li>
          <li>You're doing the best you can</li>
          <li>It's okay to not be okay</li>
          <li>You deserve care and compassion</li>
        </ul>
      </ContentSection>

      <ContentSection title="Creative Expression">
        <h3>Art Prompts</h3>
        <ul>
          <li>Draw how your day felt using only colors</li>
          <li>Create something ugly on purpose</li>
          <li>Collage images that represent peace to you</li>
          <li>Doodle without lifting your pen</li>
        </ul>

        <h3>Writing Prompts</h3>
        <ul>
          <li>Write a letter to your younger self</li>
          <li>Describe a place where you feel safe</li>
          <li>List things you're carrying that aren't yours</li>
          <li>Write about a moment that felt gentle</li>
        </ul>
      </ContentSection>

      <ContentSection title="Sleep & Rest" variant="alternate">
        <h3>Sleep Hygiene Tips</h3>
        <ul>
          <li>Keep your bedroom cool and dark</li>
          <li>Limit screens 1 hour before bed</li>
          <li>Try a consistent bedtime routine</li>
          <li>Use white noise or calming sounds</li>
          <li>Write down worries before bed to clear your mind</li>
        </ul>

        <h3>Rest Without Sleep</h3>
        <p>
          Rest isn't just sleep. It can be:
        </p>
        <ul>
          <li>Lying down with calming music</li>
          <li>Sitting in a quiet space</li>
          <li>Doing nothing without guilt</li>
          <li>Gentle stretching or breathing</li>
        </ul>
      </ContentSection>

      <ContentSection title="Calming Practices">
        <h3>Breathing Techniques</h3>
        <ul>
          <li><strong>4-7-8 Breathing:</strong> Inhale for 4, hold for 7, exhale for 8</li>
          <li><strong>Box Breathing:</strong> Inhale 4, hold 4, exhale 4, hold 4</li>
          <li><strong>Natural Breathing:</strong> Just notice your breath without changing it</li>
        </ul>

        <h3>Grounding Techniques</h3>
        <ul>
          <li><strong>5-4-3-2-1:</strong> Name 5 things you see, 4 you hear, 3 you feel, 2 you smell, 1 you taste</li>
          <li><strong>Cold water:</strong> Splash cold water on your face</li>
          <li><strong>Textures:</strong> Hold something soft or textured</li>
        </ul>
      </ContentSection>
    </>
  );
}
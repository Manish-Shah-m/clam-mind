import ContentSection from '@/components/ContentSection';

export const metadata = {
  title: 'Misconceptions & Harmful Advice — Calm Mind',
  description: 'Why "just be positive" doesn\'t help and what actually supports mental health.',
};

export default function MisconceptionsPage() {
  return (
    <>
      <ContentSection title="Misconceptions & Harmful Advice">
        <p>
          People often mean well, but some of the most common advice around depression 
          can actually do more harm than good. These messages dismiss real pain, 
          create guilt, and make people feel even more alone.
        </p>
        <p>
          This section isn't about blame—it's about understanding why certain phrases 
          hurt and what would be more helpful instead.
        </p>
      </ContentSection>

      <ContentSection title="Why 'Just Be Positive' Doesn't Help" variant="alternate">
        <h3>What it sounds like:</h3>
        <ul>
          <li>"Just think positive thoughts!"</li>
          <li>"Focus on the good things"</li>
          <li>"You have so much to be grateful for"</li>
          <li>"Choose happiness"</li>
        </ul>

        <h3>Why it's harmful:</h3>
        <p>
          Depression isn't a mindset you can think your way out of. Telling someone 
          to "just be positive" dismisses the real, chemical, and emotional weight 
          they're carrying. It suggests their suffering is a choice, which creates 
          guilt and shame.
        </p>

        <h3>What would help instead:</h3>
        <ul>
          <li>"I'm here if you want to talk"</li>
          <li>"You don't have to feel better right now"</li>
          <li>"It's okay to not be okay"</li>
          <li>"What do you need right now?"</li>
        </ul>
      </ContentSection>

      <ContentSection title="Why Comparison Makes Things Worse">
        <h3>What it sounds like:</h3>
        <ul>
          <li>"Other people have it worse"</li>
          <li>"At least you have [job/family/health]"</li>
          <li>"You should be grateful"</li>
          <li>"Think about people who don't have what you have"</li>
        </ul>

        <h3>Why it's harmful:</h3>
        <p>
          Pain isn't a competition. Comparing suffering invalidates real emotions and 
          makes people feel guilty for how they feel. Depression doesn't care about 
          privilege or circumstances—it affects anyone.
        </p>

        <h3>What would help instead:</h3>
        <ul>
          <li>"Your feelings are valid"</li>
          <li>"It's okay to struggle even when things look okay on the outside"</li>
          <li>"You don't have to justify how you feel"</li>
        </ul>
      </ContentSection>

      <ContentSection title="Why Productivity Culture Can Harm Mental Health" variant="alternate">
        <h3>What it sounds like:</h3>
        <ul>
          <li>"Just stay busy"</li>
          <li>"Keep yourself distracted"</li>
          <li>"You'll feel better if you accomplish something"</li>
          <li>"Use this time to be productive"</li>
        </ul>

        <h3>Why it's harmful:</h3>
        <p>
          Productivity culture equates worth with output. When you're depressed, 
          even small tasks feel impossible. Being told to "just do something" creates 
          shame around rest and reinforces the idea that you're only valuable when 
          you're producing.
        </p>
        <p>
          Rest is not laziness. Healing is not wasted time.
        </p>

        <h3>What would help instead:</h3>
        <ul>
          <li>"It's okay to rest"</li>
          <li>"You don't have to earn your worth"</li>
          <li>"Small steps count, even if they don't feel like enough"</li>
          <li>"You're allowed to just exist today"</li>
        </ul>
      </ContentSection>

      <ContentSection title="Other Harmful Phrases">
        <h3>"Everyone feels sad sometimes"</h3>
        <p>
          Depression is not the same as occasional sadness. This minimizes the experience 
          and suggests it's not serious.
        </p>

        <h3>"You just need to get out more"</h3>
        <p>
          Socializing can help, but depression makes even leaving the house feel overwhelming. 
          This advice places blame on the person for not "trying hard enough."
        </p>

        <h3>"Have you tried yoga/meditation/exercise?"</h3>
        <p>
          These can be helpful tools, but they're not cures. Suggesting them as fixes 
          dismisses the complexity of depression and implies the person isn't doing enough.
        </p>

        <h3>"It's all in your head"</h3>
        <p>
          Depression involves the brain, yes—but it also affects the body, emotions, 
          and entire lived experience. This phrase dismisses the reality of the condition.
        </p>

        <h3>"Just pray/meditate/manifest"</h3>
        <p>
          Spiritual practices can be supportive, but they're not substitutes for 
          professional care. Depression is a medical condition that may require therapy 
          or medication.
        </p>
      </ContentSection>

      <ContentSection title="What Actually Helps" variant="alternate">
        <ul>
          <li>Listening without trying to fix</li>
          <li>Validating feelings without judgment</li>
          <li>Offering specific, small support ("Can I bring you food?")</li>
          <li>Being patient and present</li>
          <li>Encouraging professional help when appropriate</li>
          <li>Checking in consistently, even if there's no response</li>
          <li>Saying "I believe you" or "I'm here"</li>
        </ul>
      </ContentSection>
    </>
  );
}
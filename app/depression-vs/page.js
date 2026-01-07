import ContentSection from '@/components/ContentSection';

export const metadata = {
  title: 'Depression vs Other States — Calm Mind',
  description: 'Understanding how depression differs from burnout, grief, loneliness, and sadness.',
};

export default function DepressionVsPage() {
  return (
    <>
      <ContentSection title="Depression vs Other Emotional States">
        <p>
          It's easy to confuse depression with other difficult emotions—burnout, grief, 
          loneliness, or sadness. They can overlap, but understanding the differences 
          helps you identify what you're experiencing and what kind of support might help.
        </p>
        <p>
          This isn't about self-diagnosing. It's about clarity.
        </p>
      </ContentSection>

      <ContentSection title="Depression vs Burnout" variant="alternate">
        <h3>Burnout</h3>
        <ul>
          <li>Caused by prolonged stress, overwork, or lack of boundaries</li>
          <li>Feeling exhausted, cynical, or detached from work/responsibilities</li>
          <li>Sense of ineffectiveness or lack of accomplishment</li>
          <li>Often improves with rest, time off, or change in environment</li>
          <li>Tied to specific contexts (work, school, caregiving)</li>
        </ul>

        <h3>Depression</h3>
        <ul>
          <li>Not necessarily tied to external circumstances</li>
          <li>Affects all areas of life, not just work or school</li>
          <li>Persistent low mood, hopelessness, or emptiness</li>
          <li>Doesn't lift easily with rest or time off</li>
          <li>May require therapy, medication, or other treatment</li>
        </ul>

        <p>
          <strong>Key difference:</strong> Burnout is situational; depression is pervasive.
        </p>
      </ContentSection>

      <ContentSection title="Depression vs Grief">
        <h3>Grief</h3>
        <ul>
          <li>Response to a specific loss (death, breakup, change)</li>
          <li>Comes in waves—intense at times, lighter at others</li>
          <li>Sadness is mixed with memories, love, or longing</li>
          <li>Ability to feel joy or connection still exists</li>
          <li>Gradually softens over time, though it may never fully disappear</li>
        </ul>

        <h3>Depression</h3>
        <ul>
          <li>May not have a clear cause or trigger</li>
          <li>Persistent, heavy, and unrelenting</li>
          <li>Feeling empty, numb, or disconnected</li>
          <li>Loss of interest in things that used to bring joy</li>
          <li>Doesn't naturally soften with time alone</li>
        </ul>

        <p>
          <strong>Key difference:</strong> Grief is tied to love and loss; 
          depression is a pervasive sense of emptiness.
        </p>
        <p>
          <em>Note: Grief and depression can coexist, and prolonged or complicated 
          grief may develop into depression.</em>
        </p>
      </ContentSection>

      <ContentSection title="Depression vs Loneliness" variant="alternate">
        <h3>Loneliness</h3>
        <ul>
          <li>Feeling disconnected, isolated, or unseen</li>
          <li>Desire for connection, but difficulty finding or maintaining it</li>
          <li>Can improve with meaningful social interaction</li>
          <li>Often situational (moving, losing friends, life changes)</li>
        </ul>

        <h3>Depression</h3>
        <ul>
          <li>May feel isolated even when surrounded by people</li>
          <li>Lack of desire or energy to connect</li>
          <li>Withdrawing from others feels safer or easier</li>
          <li>Social interaction doesn't necessarily improve mood</li>
        </ul>

        <p>
          <strong>Key difference:</strong> Loneliness is about disconnection from others; 
          depression is disconnection from yourself and the world.
        </p>
      </ContentSection>

      <ContentSection title="Depression vs Sadness">
        <h3>Sadness</h3>
        <ul>
          <li>A normal, temporary emotional response</li>
          <li>Tied to a specific event or situation</li>
          <li>Doesn't interfere with daily functioning</li>
          <li>Lifts naturally over time</li>
          <li>You can still experience joy, hope, or lightness</li>
        </ul>

        <h3>Depression</h3>
        <ul>
          <li>Persistent and pervasive</li>
          <li>May not have a clear cause</li>
          <li>Affects sleep, appetite, energy, and concentration</li>
          <li>Doesn't lift on its own</li>
          <li>Feels like a fog you can't see through</li>
        </ul>

        <p>
          <strong>Key difference:</strong> Sadness is a feeling; depression is a condition.
        </p>
      </ContentSection>

      <ContentSection title="What If It's More Than One?">
        <p>
          You can experience depression <em>and</em> burnout. You can be grieving <em>and</em> 
          depressed. You can feel lonely <em>and</em> sad. These states often overlap and 
          interact with one another.
        </p>
        <p>
          The goal isn't to pick one label. The goal is to understand what you're feeling 
          so you can find the right kind of support—whether that's rest, connection, 
          therapy, or something else.
        </p>
      </ContentSection>
    </>
  );
}
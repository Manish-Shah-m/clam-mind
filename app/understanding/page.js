import ContentSection from '@/components/ContentSection';
import { understandingContent } from '@/lib/content.json';

export const metadata = {
  title: 'Understanding Depression — Calm Mind',
  description: 'What depression is, types of depression, common signs, myths, and when to seek help.',
};

export default function UnderstandingPage() {
  return (
    <>
      <ContentSection title="Understanding Depression">
        <p>
          Depression isn't just feeling sad. It's a persistent, heavy state that affects 
          how you think, feel, and move through the world. It can make everything feel 
          harder—getting out of bed, connecting with others, finding meaning in things 
          that once mattered.
        </p>
        <p>
          Understanding depression isn't about labeling yourself. It's about making sense 
          of what you're experiencing, recognizing patterns, and knowing you're not alone.
        </p>
      </ContentSection>

      <ContentSection title="What Depression Is" variant="alternate">
        <p>
          Depression is a mental health condition characterized by:
        </p>
        <ul>
          <li>Persistent low mood or emptiness</li>
          <li>Loss of interest in activities you used to enjoy</li>
          <li>Changes in sleep, appetite, or energy</li>
          <li>Difficulty concentrating or making decisions</li>
          <li>Feelings of worthlessness or excessive guilt</li>
          <li>Physical heaviness or restlessness</li>
          <li>Thoughts of death or self-harm</li>
        </ul>
        <p>
          It's not a choice, a weakness, or something you can "snap out of." 
          It's a real condition that deserves real care and support.
        </p>
      </ContentSection>

      <ContentSection title="Types of Depression">
        <h3>Major Depressive Disorder (MDD)</h3>
        <p>
          Persistent feelings of sadness, hopelessness, or emptiness that last for weeks or months.
        </p>

        <h3>Persistent Depressive Disorder (Dysthymia)</h3>
        <p>
          A chronic, lower-grade depression that lasts for years. It may feel like "just how you are," 
          but it's still treatable.
        </p>

        <h3>Seasonal Affective Disorder (SAD)</h3>
        <p>
          Depression that occurs during specific seasons, often fall and winter, 
          linked to reduced sunlight.
        </p>

        <h3>Postpartum Depression</h3>
        <p>
          Depression after childbirth, affecting mood, energy, and ability to care for oneself or the baby.
        </p>

        <h3>Atypical Depression</h3>
        <p>
          Depression with mood reactivity—your mood can improve temporarily in response to positive events, 
          but the underlying heaviness remains.
        </p>
      </ContentSection>

      <ContentSection title="Common Signs" variant="alternate">
        <p>
          Depression shows up differently for everyone, but common signs include:
        </p>
        <ul>
          <li>Feeling empty, numb, or detached</li>
          <li>Losing interest in hobbies, friends, or daily activities</li>
          <li>Sleeping too much or too little</li>
          <li>Overeating or loss of appetite</li>
          <li>Feeling exhausted even after rest</li>
          <li>Struggling to focus or remember things</li>
          <li>Feeling hopeless, worthless, or like a burden</li>
          <li>Withdrawing from others</li>
          <li>Physical aches without clear cause</li>
        </ul>
        <p>
          If several of these have been present for more than two weeks, it may be worth 
          reaching out to someone you trust or a mental health professional.
        </p>
      </ContentSection>

      <ContentSection title="Common Myths">
        <h3>Myth: "Depression is just sadness"</h3>
        <p>
          Depression is more than sadness. It's a pervasive feeling of emptiness, 
          hopelessness, or numbness that doesn't lift easily.
        </p>

        <h3>Myth: "It's all in your head"</h3>
        <p>
          Depression affects the brain, body, and emotions. It's a medical condition, 
          not something you're imagining.
        </p>

        <h3>Myth: "You just need to try harder"</h3>
        <p>
          Depression isn't a lack of effort. It's a condition that makes even small 
          tasks feel overwhelming.
        </p>

        <h3>Myth: "Talking about it makes it worse"</h3>
        <p>
          Talking about depression in a safe, supportive space can be one of the most 
          healing things you can do.
        </p>
      </ContentSection>

      <ContentSection title="Sadness vs Depression" variant="alternate">
        <p>
          <strong>Sadness</strong> is a normal emotional response to loss, disappointment, 
          or difficult events. It comes and goes, and while it can be intense, it typically 
          lifts with time, support, or positive experiences.
        </p>
        <p>
          <strong>Depression</strong> is persistent and doesn't require a specific trigger. 
          It affects your ability to function, enjoy life, and connect with others. 
          It doesn't just "go away" on its own.
        </p>
      </ContentSection>

      <ContentSection title="When to Seek Help">
        <p>
          You don't have to wait until things are unbearable to reach out for help. 
          Consider talking to someone if:
        </p>
        <ul>
          <li>Your feelings are affecting your daily life, work, or relationships</li>
          <li>You've felt this way for more than two weeks</li>
          <li>You're withdrawing from people or activities</li>
          <li>You're having thoughts of self-harm or suicide</li>
          <li>You feel stuck and don't know what to do</li>
        </ul>
        <p>
          Reaching out isn't giving up—it's taking care of yourself. You can talk to:
        </p>
        <ul>
          <li>A trusted friend or family member</li>
          <li>A school counselor or therapist</li>
          <li>A doctor or mental health professional</li>
          <li>A crisis helpline (available 24/7)</li>
        </ul>
      </ContentSection>
    </>
  );
}
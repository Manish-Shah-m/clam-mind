import ContentSection from '@/components/ContentSection';

export const metadata = {
  title: 'How to Support Someone Else — Calm Mind',
  description: 'What to say, what not to say, and how to help someone struggling with depression.',
};

export default function SupportOthersPage() {
  return (
    <>
      <ContentSection title="How to Support Someone with Depression">
        <p>
          When someone you care about is struggling with depression, it's natural to want 
          to help. But knowing what to say or do can feel confusing—especially when nothing 
          seems to make things better.
        </p>
        <p>
          The truth is, you don't have to fix it. You just have to show up.
        </p>
      </ContentSection>

      <ContentSection title="What to Say" variant="alternate">
        <ul>
          <li>"I'm here for you"</li>
          <li>"You're not alone in this"</li>
          <li>"It's okay to not be okay"</li>
          <li>"You don't have to explain or justify how you feel"</li>
          <li>"I believe you"</li>
          <li>"This isn't your fault"</li>
          <li>"What do you need right now?"</li>
          <li>"Would it help if I just sat with you?"</li>
          <li>"I'm not going anywhere"</li>
          <li>"Take all the time you need"</li>
        </ul>
      </ContentSection>

      <ContentSection title="What Not to Say">
        <ul>
          <li>"Just be positive"</li>
          <li>"Everyone feels sad sometimes"</li>
          <li>"You have so much to be grateful for"</li>
          <li>"Have you tried exercising/meditating/etc.?"</li>
          <li>"It could be worse"</li>
          <li>"You just need to get out more"</li>
          <li>"Snap out of it"</li>
          <li>"I know exactly how you feel"</li>
          <li>"You'll be fine"</li>
          <li>"This is just a phase"</li>
        </ul>
        <p>
          These phrases, even when well-meaning, can dismiss pain, create guilt, 
          or make someone feel more isolated.
        </p>
      </ContentSection>

      <ContentSection title="How to Listen Without Trying to Fix" variant="alternate">
        <p>
          The urge to solve or fix is strong, but depression isn't a problem that 
          can be solved with advice. Sometimes, the most powerful thing you can do 
          is simply listen.
        </p>

        <h3>How to listen well:</h3>
        <ul>
          <li>Put away distractions—give your full attention</li>
          <li>Don't interrupt or offer solutions unless asked</li>
          <li>Reflect back what you hear ("It sounds like you're feeling...")</li>
          <li>Ask open-ended questions ("How are you holding up?")</li>
          <li>Sit with silence—don't rush to fill it</li>
          <li>Validate their feelings ("That sounds really hard")</li>
          <li>Don't compare their experience to yours or someone else's</li>
        </ul>

        <p>
          You don't need the right words. Your presence is enough.
        </p>
      </ContentSection>

      <ContentSection title="How to Offer Practical Support">
        <p>
          Depression can make daily tasks feel impossible. Offering specific, 
          concrete help can be more meaningful than general statements like 
          "Let me know if you need anything."
        </p>

        <h3>Specific ways to help:</h3>
        <ul>
          <li>"Can I bring you dinner tonight?"</li>
          <li>"I'm going to the store—what can I pick up for you?"</li>
          <li>"Would it help if I sat with you while you do laundry?"</li>
          <li>"I'm free this afternoon—can I come over and just be there?"</li>
          <li>"Would you like me to help you tidy up a bit?"</li>
          <li>"I'm going for a walk—want to come, or should I just check in after?"</li>
          <li>Send a text: "No need to reply—just want you to know I'm thinking of you"</li>
        </ul>
      </ContentSection>

      <ContentSection title="When and How to Encourage Professional Help" variant="alternate">
        <p>
          You can be supportive and still recognize when professional help is needed. 
          Encouraging therapy or medical support isn't giving up—it's caring deeply.
        </p>

        <h3>When to encourage help:</h3>
        <ul>
          <li>They've been struggling for weeks or months</li>
          <li>Their daily functioning is significantly impaired</li>
          <li>They're withdrawing completely from people and activities</li>
          <li>They express hopelessness or thoughts of self-harm</li>
          <li>They've mentioned wanting help but don't know how to start</li>
        </ul>

        <h3>How to bring it up gently:</h3>
        <ul>
          <li>"I care about you, and I think talking to a professional might help"</li>
          <li>"Would you be open to seeing a therapist? I can help you find one"</li>
          <li>"You don't have to go through this alone—there are people trained to help"</li>
          <li>"I'll support you no matter what, but I think you deserve professional care"</li>
        </ul>

        <h3>How to help them take action:</h3>
        <ul>
          <li>Offer to research therapists or hotlines together</li>
          <li>Help them make an appointment</li>
          <li>Offer to drive them or go with them to the first session</li>
          <li>Check in after appointments</li>
        </ul>
      </ContentSection>

      <ContentSection title="When to Seek Emergency Help">
        <p>
          If someone is in immediate danger, don't wait. Trust your instincts.
        </p>

        <h3>Warning signs of crisis:</h3>
        <ul>
          <li>Talking about wanting to die or hurt themselves</li>
          <li>Looking for ways to end their life</li>
          <li>Talking about feeling hopeless or having no reason to live</li>
          <li>Acting recklessly or saying goodbye as if for the last time</li>
          <li>Withdrawing completely and not responding</li>
        </ul>

        <h3>What to do:</h3>
        <ul>
          <li>Don't leave them alone</li>
          <li>Call a crisis helpline or emergency services</li>
          <li>Remove any means of self-harm if it's safe to do so</li>
          <li>Stay calm, listen, and reassure them help is available</li>
          <li>Let a trusted adult, family member, or professional know</li>
        </ul>
      </ContentSection>

      <ContentSection title="Taking Care of Yourself" variant="alternate">
        <p>
          Supporting someone with depression can be emotionally draining. 
          You can't pour from an empty cup.
        </p>

        <h3>How to care for yourself while supporting others:</h3>
        <ul>
          <li>Set boundaries—you can care without taking on all their pain</li>
          <li>Talk to someone you trust about how you're feeling</li>
          <li>Take breaks when you need them</li>
          <li>Remember you're not responsible for fixing them</li>
          <li>Seek support for yourself if needed</li>
        </ul>
        <p>
          Compassion for others starts with compassion for yourself.
        </p>
      </ContentSection>
    </>
  );
}
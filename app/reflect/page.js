'use client';

import { useState, useEffect } from 'react';
import ContentSection from '@/components/ContentSection';
import ReflectionPrompt from '@/components/ReflectionPrompt';
import { saveToStorage, loadFromStorage } from '@/lib/storage';

const prompts = [
  "What felt heavy today?",
  "What gave even a small sense of ease?",
  "What did you need today that you didn't get?",
  "What's one thing you did today, no matter how small?",
  "What would you tell a friend who felt the way you do right now?",
];

export default function ReflectPage() {
  const [reflections, setReflections] = useState([]);

  useEffect(() => {
    const saved = loadFromStorage('reflections');
    if (saved) setReflections(saved);
  }, []);

  const handleSave = (reflection) => {
    const updated = [reflection, ...reflections];
    setReflections(updated);
    saveToStorage('reflections', updated);
  };

  return (
    <>
      <ContentSection title="Gentle End-of-Day Reflection">
        <p>
          These prompts are not about productivity, progress, or fixing anything. 
          They're simply invitations to notice—what felt hard, what felt okay, 
          what you needed.
        </p>
        <p>
          There are no right answers. No scoring. No judgment.
        </p>
      </ContentSection>

      <ContentSection variant="alternate">
        {prompts.map((prompt, index) => (
          <ReflectionPrompt key={index} question={prompt} onSave={handleSave} />
        ))}
      </ContentSection>

      {reflections.length > 0 && (
        <ContentSection title="Your Recent Reflections">
          <div style={{ opacity: 0.7, fontSize: '0.9rem', fontStyle: 'italic' }}>
            <p>Your reflections are stored privately on your device only.</p>
          </div>
        </ContentSection>
      )}
    </>
  );
}
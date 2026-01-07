'use client';

import { useState, useEffect } from 'react';
import ContentSection from '@/components/ContentSection';
import JournalEntry from '@/components/JournalEntry';
import { saveToStorage, loadFromStorage } from '@/lib/storage';

const prompts = [
  "What's on your mind right now?",
  "What would you say if no one was listening?",
  "What do you need to let go of?",
  "What are you carrying that isn't yours?",
  "If you could tell your past self one thing, what would it be?",
];

export default function JournalPage() {
  const [entries, setEntries] = useState([]);
  const [currentPrompt, setCurrentPrompt] = useState(null);

  useEffect(() => {
    const saved = loadFromStorage('journal');
    if (saved) setEntries(saved);
  }, []);

  const handleSave = (entry) => {
    const updated = [entry, ...entries];
    setEntries(updated);
    saveToStorage('journal', updated);
  };

  const getRandomPrompt = () => {
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    setCurrentPrompt(randomPrompt);
  };

  return (
    <>
      <ContentSection title="Private Journaling Space">
        <p>
          This is a safe, private space for your thoughts. Nothing you write here 
          is shared or analyzed. It's just for you.
        </p>
        <p>
          You can write freely, or use a prompt to get started.
        </p>
        <button
          onClick={getRandomPrompt}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--accent-calm)',
            textDecoration: 'underline',
            cursor: 'pointer',
            fontSize: '1rem',
            padding: 0,
          }}
        >
          Get a writing prompt
        </button>
      </ContentSection>

      <ContentSection variant="alternate">
        <JournalEntry onSave={handleSave} prompt={currentPrompt} />
      </ContentSection>

      {entries.length > 0 && (
        <ContentSection title="Your Recent Entries">
          <p style={{ fontSize: '0.9rem', fontStyle: 'italic', opacity: 0.7 }}>
            You have {entries.length} journal {entries.length === 1 ? 'entry' : 'entries'}. 
            They're stored privately on your device.
          </p>
        </ContentSection>
      )}
    </>
  );
}
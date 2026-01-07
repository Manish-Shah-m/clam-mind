'use client';

import { useState, useEffect } from 'react';
import ContentSection from '@/components/ContentSection';
import LetterWriter from '@/components/LetterWriter';
import { saveToStorage, loadFromStorage } from '@/lib/storage';
import styles from './letters.module.css';

export default function LettersPage() {
  const [letters, setLetters] = useState([]);
  const [letterType, setLetterType] = useState('unsent');

  useEffect(() => {
    const saved = loadFromStorage('letters');
    if (saved) setLetters(saved);
  }, []);

  const handleSave = (letter) => {
    const updated = [letter, ...letters];
    setLetters(updated);
    saveToStorage('letters', updated);
  };

  return (
    <>
      <ContentSection title="Letters You Never Sent">
        <p>
          Sometimes we carry words we never said. Things we wish we could tell someone, 
          or messages we want to send to our past or future selves.
        </p>
        <p>
          This space holds those letters. You can write them, save them, lock them away, 
          or just release them into the quiet.
        </p>
      </ContentSection>

      <ContentSection variant="alternate">
        <div className={styles.typeSelector}>
          <button
            className={letterType === 'unsent' ? styles.active : ''}
            onClick={() => setLetterType('unsent')}
          >
            Letter to Someone
          </button>
          <button
            className={letterType === 'self' ? styles.active : ''}
            onClick={() => setLetterType('self')}
          >
            Letter to Yourself
          </button>
        </div>

        <LetterWriter onSave={handleSave} type={letterType} />
      </ContentSection>

      {letters.filter(l => !l.locked).length > 0 && (
        <ContentSection title="Your Saved Letters">
          <p style={{ fontSize: '0.9rem', fontStyle: 'italic', opacity: 0.7 }}>
            You have {letters.filter(l => !l.locked).length} saved letter(s). 
            Locked letters are archived and won't appear here.
          </p>
        </ContentSection>
      )}
    </>
  );
}
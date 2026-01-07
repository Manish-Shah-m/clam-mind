'use client';

import { useState, useEffect } from 'react';
import ContentSection from '@/components/ContentSection';
import MoodSelector from '@/components/MoodSelector';
import QuietButton from '@/components/QuietButton';
import { saveToStorage, loadFromStorage } from '@/lib/storage';
import styles from './mood-tracker.module.css';

export default function MoodTrackerPage() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodHistory, setMoodHistory] = useState([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const history = loadFromStorage('moodHistory');
    if (history) setMoodHistory(history);
  }, []);

  const handleSave = () => {
    if (!selectedMood) return;

    const entry = {
      mood: selectedMood,
      date: new Date().toISOString(),
    };

    const updated = [entry, ...moodHistory];
    setMoodHistory(updated);
    saveToStorage('moodHistory', updated);
    
    setSaved(true);
    setTimeout(() => {
      setSelectedMood(null);
      setSaved(false);
    }, 2000);
  };

  return (
    <>
      <ContentSection title="Mood Tracker">
        <p>
          This is a simple, private way to track how you're feeling over time. 
          No labels, no diagnosis—just a gentle way to notice patterns.
        </p>
        <p>
          Your data stays on your device. Nothing is shared.
        </p>
      </ContentSection>

      <ContentSection variant="alternate">
        <MoodSelector selectedMood={selectedMood} onSelect={setSelectedMood} />
        <QuietButton 
          onClick={handleSave} 
          variant="primary" 
          disabled={!selectedMood}
        >
          {saved ? 'Saved ✓' : 'Save Today\'s Mood'}
        </QuietButton>
      </ContentSection>

      {moodHistory.length > 0 && (
        <ContentSection title="Your Mood History">
          <div className={styles.history}>
            {moodHistory.slice(0, 30).map((entry, index) => (
              <div key={index} className={styles.entry}>
                <span className={styles.date}>
                  {new Date(entry.date).toLocaleDateString()}
                </span>
                <span className={styles.mood}>{entry.mood}</span>
              </div>
            ))}
          </div>
        </ContentSection>
      )}
    </>
  );
}
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  if (!mounted) {
    return null;
  }

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
        
        <div className={styles.buttonContainer}>
          <QuietButton 
            onClick={handleSave} 
            variant="primary" 
            disabled={!selectedMood}
          >
            {saved ? 'Saved ✓' : 'Save Today\'s Mood'}
          </QuietButton>
        </div>
      </ContentSection>

      {moodHistory.length > 0 && (
        <ContentSection title="Your Mood History">
          <p className={styles.historyIntro}>
            You've tracked your mood {moodHistory.length} {moodHistory.length === 1 ? 'time' : 'times'}.
          </p>
          <div className={styles.history}>
            {moodHistory.slice(0, 30).map((entry, index) => (
              <div key={index} className={styles.entry}>
                <div className={styles.entryDate}>
                  {new Date(entry.date).toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
                <div className={styles.entryMood}>
                  <span className={`${styles.moodBadge} ${styles[entry.mood]}`}>
                    {entry.mood}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ContentSection>
      )}
    </>
  );
}
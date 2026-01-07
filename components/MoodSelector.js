'use client';

import styles from './MoodSelector.module.css';

const moods = [
  { 
    label: 'Peaceful', 
    value: 'peaceful', 
    color: '#5a8c6f',
    description: 'Calm and centered'
  },
  { 
    label: 'Okay', 
    value: 'okay', 
    color: '#7a9d8a',
    description: 'Getting through'
  },
  { 
    label: 'Low', 
    value: 'low', 
    color: '#a89384',
    description: 'Feeling down'
  },
  { 
    label: 'Heavy', 
    value: 'heavy', 
    color: '#b8956f',
    description: 'Struggling today'
  },
  { 
    label: 'Numb', 
    value: 'numb', 
    color: '#6b635b',
    description: 'Not feeling much'
  },
];

export default function MoodSelector({ onSelect, selectedMood }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.question}>How are you feeling today?</h3>
        <p className={styles.subtitle}>
          Choose what feels closest to how you're feeling right now
        </p>
      </div>

      <div className={styles.moodGrid}>
        {moods.map((mood) => {
          const isSelected = selectedMood === mood.value;
          
          return (
            <button
              key={mood.value}
              className={`${styles.moodCard} ${isSelected ? styles.selected : ''}`}
              onClick={() => onSelect(mood.value)}
              aria-pressed={isSelected}
              aria-label={`${mood.label}: ${mood.description}`}
            >
              <div 
                className={styles.moodIndicator}
                style={{ backgroundColor: mood.color }}
              >
                <div className={styles.moodDot}></div>
              </div>
              
              <div className={styles.moodContent}>
                <span className={styles.moodLabel}>{mood.label}</span>
                <span className={styles.moodDescription}>{mood.description}</span>
              </div>
              
              {isSelected && (
                <div className={styles.checkmark}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
                    <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
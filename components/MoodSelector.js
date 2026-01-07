'use client';

import { useState } from 'react';
import styles from './MoodSelector.module.css';

const moods = [
  { label: 'Peaceful', value: 'peaceful', color: '#9ba89f' },
  { label: 'Okay', value: 'okay', color: '#b8a99a' },
  { label: 'Low', value: 'low', color: '#c4a690' },
  { label: 'Heavy', value: 'heavy', color: '#847b73' },
  { label: 'Numb', value: 'numb', color: '#a8a09a' },
];

export default function MoodSelector({ onSelect, selectedMood }) {
  return (
    <div className={styles.container}>
      <p className={styles.label}>How are you feeling today?</p>
      <div className={styles.moodGrid}>
        {moods.map((mood) => (
          <button
            key={mood.value}
            className={`${styles.moodButton} ${selectedMood === mood.value ? styles.selected : ''}`}
            onClick={() => onSelect(mood.value)}
            style={{ '--mood-color': mood.color }}
          >
            {mood.label}
          </button>
        ))}
      </div>
    </div>
  );
}
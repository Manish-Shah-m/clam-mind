'use client';

import { useState } from 'react';
import styles from './ReflectionPrompt.module.css';
import QuietButton from './QuietButton';

export default function ReflectionPrompt({ question, onSave }) {
  const [answer, setAnswer] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (answer.trim()) {
      onSave({ question, answer, date: new Date().toISOString() });
      setSaved(true);
      setTimeout(() => {
        setAnswer('');
        setSaved(false);
      }, 2000);
    }
  };

  return (
    <div className={styles.prompt}>
      <h3 className={styles.question}>{question}</h3>
      <textarea
        className={styles.textarea}
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Take your time..."
        rows={6}
      />
      <div className={styles.actions}>
        <QuietButton onClick={handleSave} variant="primary" disabled={!answer.trim()}>
          {saved ? 'Saved ✓' : 'Save Reflection'}
        </QuietButton>
      </div>
    </div>
  );
}
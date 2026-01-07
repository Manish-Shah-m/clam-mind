'use client';

import { useState } from 'react';
import styles from './JournalEntry.module.css';
import QuietButton from './QuietButton';

export default function JournalEntry({ onSave, prompt }) {
  const [content, setContent] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (content.trim()) {
      onSave({
        content,
        prompt,
        date: new Date().toISOString(),
      });
      setSaved(true);
      setTimeout(() => {
        setContent('');
        setSaved(false);
      }, 2000);
    }
  };

  return (
    <div className={styles.container}>
      {prompt && <p className={styles.prompt}>{prompt}</p>}
      <textarea
        className={styles.textarea}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write whatever comes to mind..."
        rows={12}
      />
      <div className={styles.actions}>
        <QuietButton onClick={handleSave} variant="primary" disabled={!content.trim()}>
          {saved ? 'Saved ✓' : 'Save Entry'}
        </QuietButton>
        <QuietButton onClick={() => setContent('')} variant="secondary">
          Clear
        </QuietButton>
      </div>
    </div>
  );
}
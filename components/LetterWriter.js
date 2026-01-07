'use client';

import { useState } from 'react';
import styles from './LetterWriter.module.css';
import QuietButton from './QuietButton';

export default function LetterWriter({ onSave, type = 'unsent' }) {
  const [to, setTo] = useState('');
  const [content, setContent] = useState('');
  const [locked, setLocked] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (content.trim()) {
      onSave({
        type,
        to,
        content,
        locked,
        date: new Date().toISOString(),
      });
      setSaved(true);
      setTimeout(() => {
        setTo('');
        setContent('');
        setLocked(false);
        setSaved(false);
      }, 2000);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <label className={styles.label}>
          To:
          <input
            type="text"
            className={styles.input}
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder={type === 'self' ? 'Future me' : 'Someone you never sent this to'}
          />
        </label>
      </div>

      <textarea
        className={styles.textarea}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your letter here..."
        rows={14}
      />

      <div className={styles.actions}>
        <label className={styles.lockLabel}>
          <input
            type="checkbox"
            checked={locked}
            onChange={(e) => setLocked(e.target.checked)}
          />
          Lock this letter (you can archive it and not see it again)
        </label>

        <div className={styles.buttons}>
          <QuietButton onClick={handleSave} variant="primary" disabled={!content.trim()}>
            {saved ? 'Saved ✓' : 'Save Letter'}
          </QuietButton>
          <QuietButton onClick={() => { setTo(''); setContent(''); }} variant="secondary">
            Clear
          </QuietButton>
        </div>
      </div>
    </div>
  );
}
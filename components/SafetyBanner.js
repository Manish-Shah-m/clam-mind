'use client';

import { useState } from 'react';
import styles from './SafetyBanner.module.css';

export default function SafetyBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <p className={styles.text}>
          <strong>Important:</strong> This site offers support and understanding, 
          not diagnosis or treatment. If you're in crisis, please reach out to a 
          professional helpline or trusted person immediately.
        </p>
        <button 
          className={styles.closeButton}
          onClick={() => setVisible(false)}
          aria-label="Close banner"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
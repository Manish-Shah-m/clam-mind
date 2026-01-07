import styles from './QuietButton.module.css';

export default function QuietButton({ 
  children, 
  onClick, 
  variant = 'primary', 
  type = 'button',
  disabled = false,
  fullWidth = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles[variant]} ${fullWidth ? styles.fullWidth : ''}`}
    >
      {children}
    </button>
  );
}
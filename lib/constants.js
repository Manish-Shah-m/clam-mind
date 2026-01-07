export const COLORS = {
  // Backgrounds - Warmer, less washed out
  bg: {
    primary: '#faf8f5',      // Warmer off-white
    secondary: '#f5f1eb',    // Warm beige
    card: '#ffffff',
    overlay: 'rgba(0, 0, 0, 0.03)',
  },
  
  // Text - Higher contrast, more readable
  text: {
    primary: '#2d2a26',      // Rich dark brown (was too light)
    secondary: '#6b635b',    // Medium brown-gray (more contrast)
    tertiary: '#9a8f85',     // Soft gray-brown
  },
  
  // Accents - More saturated, still calm
  accent: {
    calm: '#7a9d8a',         // Stronger sage green (was too faded)
    warm: '#b8956f',         // Richer warm tan
    gentle: '#a89384',       // Warm taupe
    muted: '#d1c4b8',        // Soft beige
    lavender: '#9d8fa8',     // New: Soft lavender
    clay: '#c17a6b',         // New: Terracotta/clay
  },
  
  // Semantic - More noticeable
  semantic: {
    safe: '#6b9470',         // Deeper green
    caution: '#c4935a',      // Warmer amber
    border: '#e5ddd4',       // Warmer border
    focus: '#7a9d8a',        // Same as calm accent
  }
};

export const SPACING = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2.5rem',
  xl: '4rem',
  xxl: '6rem',
};

export const TYPOGRAPHY = {
  fontFamily: {
    body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    heading: "'Newsreader', 'Georgia', serif",
  },
  fontSize: {
    xs: '0.875rem',
    sm: '0.9375rem',
    base: '1.0625rem',
    lg: '1.25rem',
    xl: '1.75rem',
    xxl: '2.5rem',
    xxxl: '3.5rem',
  },
  lineHeight: {
    tight: '1.3',
    normal: '1.6',
    relaxed: '1.8',
  },
};
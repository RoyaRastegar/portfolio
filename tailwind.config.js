/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          base:      '#080C14',
          surface:   '#0E1420',
          elevated:  '#141B2D',
          highlight: '#1A2235',
        },
        border: {
          DEFAULT: '#1E2A40',
          bright:  '#2A3A58',
        },
        accent: {
          DEFAULT: '#38BDF8',
          dim:     '#0EA5E9',
        },
        amber: '#F59E0B',
        text: {
          primary:   '#E2E8F4',
          secondary: '#7A8BAD',
          muted:     '#3D4F6E',
        },
        success: '#34D399',
        danger:  '#F87171',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['Newsreader', 'serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
        ui:      ['"DM Sans"', 'sans-serif'],
      },
      maxWidth: { container: '1280px' },
      keyframes: {
        pulse:  { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.4' } },
        blink:  { '0%,100%': { opacity: '1' }, '50%': { opacity: '0'   } },
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        pulse:    'pulse 2s ease-in-out infinite',
        blink:    'blink 1s step-end infinite',
        'fade-up':'fadeUp 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}


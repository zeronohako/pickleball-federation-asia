// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'var(--brand)',
          600: 'var(--brand-600)'
        },
        accent: 'var(--accent)',
        muted: 'var(--muted)',
        surface: 'var(--surface)',
        bg: 'var(--bg)',
        text: 'var(--text)'
      }
    }
  },
  plugins: [],
}

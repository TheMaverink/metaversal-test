/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--text-primary)',
        primary_pink: '#FF0073',
        primary_purple: '#811AB8',
        primary_blue: '#4426D9',
        background_light: '#ECE9FB',
        background_peach: '#FDEDE7',
      },
    },
  },
  plugins: [],
};



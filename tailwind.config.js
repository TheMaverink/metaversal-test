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
        primary_black: '#141C24',
        primary_pink: '#FF0073',
        primary_purple: '#811AB8',
        primary_blue: '#4426D9',
        background_light: '#ECE9FB',
        background_peach: '#FDEDE7',
      },
      fontFamily: {
        roboto: ['Roboto Flex', 'sans-serif'],
      },
      fontWeight: {
        '800': '800',
      },
      fontSize: {
        h1: ['30px', { lineHeight: '1', fontWeight: '800',fontStretch: '151%',color:'red' }],
        h2: ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        h3: ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        h4: ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
      },
      
    },
    
  },
  plugins: [],
};

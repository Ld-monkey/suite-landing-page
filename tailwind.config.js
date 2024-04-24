/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#172339',
        grey: '#49566D',
        'cream-white': '#FAF8F6',
      },
      backgroundImage: {
        'hero-portrait': "url('./src/assets/images/image-hero-portrait.webp')",
        'hero-landscape':
          "url('./src/assets/images/image-hero-landscape.webp')",
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bike-red': '#dc143c',
        'bike-dark': '#000',
        'bike-light': '#f5f5f5',
      },
    },
  },
  plugins: [],
};
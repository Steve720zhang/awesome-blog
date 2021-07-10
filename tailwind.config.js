module.exports = {
  purge: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '768px',
      md: '1024px',
    },
    borderRadius: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      full: '9999px',
    },
    maxWidth: {
      '1/2': '50%',
      '1/3': '33.33%',
      '2/3': '66.66%',
      '1/4': '25%',
      '3/4': '75%',
      sm: '768px', //  768 - 24 - 24 = 720
      md: '1024px', // 1024 - 24 - 24 = 976
    },
    spacing: {
      px: '1px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

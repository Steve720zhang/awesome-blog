module.exports = {
  purge: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '768px',
      md: '1024px',
    },
    colors: {
      bg1: '#ECECE9',
      white: '#FFF',
      gray: {
        gray1: '#FEFEF1',
        gray2: '#ECECE1',
        gray3: '#DBDBCB',
        gray4: '#CCCCCC',
        gray5: '#A1A199',
      },
      dark: {
        1: '#333',
        2: '#444',
        3: '#666',
        4: '#888',
      },
      red: '#FE1c5b',
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
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      none: 'none',
    },
    opacity: {
      0: '0',
      75: '0.75',
      100: '1',
    },
    maxWidth: {
      '1/2': '50%',
      '1/3': '33.33%',
      '2/3': '66.66%',
      '1/4': '25%',
      '3/4': '75%',
      sm: '768px',
      md: '1024px',
    },
    flex: {
      1: '1 1 0%',
      2: '2 2 0%',
      3: '3 3 0%',
      4: '4 4 0%',
      5: '5 5 0%',
    },
    inset: {
      0: '0px',
      '1/2': '50%',
      '3/4': '75%',
      '2/3': '66.66%',
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
      '1/2': '50%',
      full: '100%',
      'full-height': '100vh',
      'full-width': '100vw',
    },
  },
  variants: {
    extend: {
      opacity: ['active'],
    },
  },
  corePlugins: {
    // ...
    inset: true,
  },
  plugins: [],
  corePlugins: {
    float: false,
    objectFit: false,
    objectPosition: false,
    clear: false,
    animation: false,
    appearance: false,
    divider: false,
    fill: false,
    gap: false,
    gradientColorStops: false,
    grid: false,
    objectFit: false,
    objectPosition: false,
    order: false,
    outline: false,
    overscrollBehavior: false,
    placeContent: false,
    placeholder: false,
    placeItems: false,
    placeSelf: false,
    resize: false,
    ring: false,
    scale: false,
    rotate: false,
    skew: false,
    stroke: false,
    tableLayout: false,
    textDecoration: false,
    textTransform: false,
    transform: false,
    translate: false,
    verticalAlign: false,
    visibility: false,
    whitespace: false,
  },
};

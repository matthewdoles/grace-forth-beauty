module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '420px',
      md: '700px',
      lg: '900px',
      xl: '1200px'
    }
  },
  daisyui: {
    themes: [
      {
        primaryTheme: {
          primary: 'rgb(240,141,159)',
          secondary: 'rgb(34, 40, 49)',
          accent: 'rgb(57, 62, 70)',
          neutral: 'rgb(238, 238, 238)',
          'base-100': '#ffffff'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
};

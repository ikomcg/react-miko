/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
      'viol': '#3A395D',
      'bgviol': '#7050EF',
      'fb': '#4267B2',
      'kodego': '#F5F4FF'
      
     },
      spacing: {
        '.1': '.1rem'
      },
      height: {
        '3/4': '90%',
        '480': '480px',
        'wfa': '-webkit-fill-available',
      },
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;',
        'md': 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;'
      },
      margin: {
        '5': '75px',
      },
      maxWidth: {
        'xxs': '25px',
        'xs': '70px',
      },
      width: {
        '95': '95%',
        '70': '70%'
      },
    },
  },
  plugins: [],
}

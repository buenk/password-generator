/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/App.jsx',
    './src/main.jsx',
    './src/PasswordGenerator.jsx'
  ],
  theme: {
    extend: {
      colors: {
        'thunderbird': {
          '50': '#fff0f0',
          '100': '#ffdedf',
          '200': '#ffc2c3',
          '300': '#ff989a',
          '400': '#ff5d61',
          '500': '#ff2b30',
          '600': '#f70b10',
          '700': '#e2050a',
          '800': '#ac080c',
          '900': '#8e0e11',
          '950': '#4e0103',
      },
      'shocking-pink': {
        '50': '#fef1fb',
        '100': '#fee5f9',
        '200': '#ffcaf5',
        '300': '#ff9fec',
        '400': '#ff63dc',
        '500': '#ff21c3',
        '600': '#f012a9',
        '700': '#d1058a',
        '800': '#ad0771',
        '900': '#8f0c60',
        '950': '#580037',
    },
    
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}


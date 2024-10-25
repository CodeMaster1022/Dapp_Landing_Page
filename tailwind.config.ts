import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, #FFA700 0%, #ffffff00 100%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-blue': 'var(--color-dark-blue)',
        'thick-dark-blue': 'var(--color-thick-dark-blue)',
        'light-blue': 'var(--color-light-blue)',
        'light-cyan': 'var(--color-light-cyan)',
        'cyan': 'var(--color-cyan)',
        'dark-green': 'var(--color-dark-green)',
      },
      boxShadow: {
        'inner-top': 'inset 0 10px 3px rgba(0, 0, 0, 0.3)',
        'inner-bottom': 'inset 0 10px 3px rgba(255, 255, 255, 0.1)'
      },
      screens: {
        xs: '480px',
      },
      gridTemplateColumns: {
        '15': 'repeat(15, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
};
export default config;

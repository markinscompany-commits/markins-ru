import { defineConfig, presetUno, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/',
    }),
  ],

  theme: {
    colors: {
      mk: {
        // Core
        black: '#101010',
        dark: '#1A1A1A',
        white: '#FAFAFA',
        bg: '#F5F0EB',
        // Neutrals
        gray: {
          100: '#F0EBE6',
          200: '#E5E0DB',
          300: '#D4CFC9',
          400: '#A3A3A2',
          500: '#757575',
          600: '#525252',
          700: '#3D3D3D',
          800: '#262626',
          900: '#171717',
        },
        // Brand accents
        beige: '#D5CDBA',
        'beige-light': '#E5D4AD',
        rust: '#BC6A56',
        'rust-dark': '#793E32',
        green: '#91BD57',
        violet: '#7757BD',
        lavender: '#EDE4FF',
      },
    },

    fontFamily: {
      display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },

    breakpoints: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },

  shortcuts: {
    'container': 'max-w-1200px mx-auto px-5 md:px-8',
  },

  rules: [
    ['will-transform', { 'will-change': 'transform' }],
    ['gpu', { transform: 'translateZ(0)' }],
  ],
})

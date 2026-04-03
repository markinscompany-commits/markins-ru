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
      // Markins Dark palette
      mk: {
        black: '#09090B',
        dark: '#101010',
        gray: '#757575',
        beige: '#D5CDBA',
        'beige-light': '#E5D4AD',
        light: '#ECEBE4',
        rust: '#BC6A56',
        'rust-dark': '#793E32',
        green: '#91BD57',
        violet: '#7757BD',
        lavender: '#EDE4FF',
      },
    },

    fontFamily: {
      display: ['Unbounded', 'system-ui', 'sans-serif'],
      body: ['Commissioner', 'system-ui', 'sans-serif'],
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
    'container': 'max-w-1100px mx-auto px-5 md:px-8',
  },

  rules: [
    ['will-transform', { 'will-change': 'transform' }],
    ['gpu', { transform: 'translateZ(0)' }],
  ],
})

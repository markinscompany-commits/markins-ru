export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@unocss/nuxt'],

  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      title: 'Markins — На стыке технологий и здравого смысла',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Markins — технологическая компания. На стыке технологий и здравого смысла. Разработка сайтов, автоматизация, AI-решения.' },
        { property: 'og:title', content: 'Markins — На стыке технологий и здравого смысла' },
        { property: 'og:description', content: 'Технологическая компания. Разработка сайтов, автоматизация, AI-решения.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://markins.ru' },
        { property: 'og:locale', content: 'ru_RU' },
        { property: 'og:site_name', content: 'Markins' },
        { name: 'theme-color', content: '#09090B' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Markins' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: 'https://markins.ru' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Commissioner:wght@300;400;500;600;700&family=Unbounded:wght@300;400;500;600;700;800;900&display=swap' },
      ],
    },
  },

  css: ['@/assets/css/global.css'],
})

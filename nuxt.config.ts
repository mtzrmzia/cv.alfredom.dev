// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: true,
  app: {
    head: {
      bodyAttrs: {
        class: 'antialiased h-full',
      },
    },
  },
  devtools: {
    enabled: true,
  },
  modules: [
    // https://nuxt.com/modules/ui
    '@nuxt/ui',
    // https://nuxt.com/modules/i18n
    '@nuxtjs/i18n',
    // https://nuxt.com/modules/og-image
    'nuxt-og-image',
    // https://nuxt.com/modules/sitemap
    '@nuxtjs/sitemap',
    // https://nuxt.com/modules/robots
    '@nuxtjs/robots',
    // https://nuxt.com/modules/image
    '@nuxt/image',
  ],
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    disableTransition: false,
  },
  i18n: {
    lazy: false,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        file: 'en.json',
        dir: 'ltr',
      },
      {
        code: 'es',
        language: 'es-MX',
        name: 'Español',
        file: 'es.json',
        dir: 'ltr',
      },
    ],
    defaultLocale: 'es',
    detectBrowserLanguage: {
      useCookie: false,
      redirectOn: 'root',
    },
    vueI18n: './i18n.config.ts',
    baseUrl: 'https://cv.alfredom.dev/',
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  site: {
    url: 'https://cv.alfredom.dev/',
    name: 'Cv | Alfredo Martínez',
  },
  image: {
    provider: 'imagekit',
    imagekit: {
      baseURL: process.env.IMAGEKIT_BASE_URL,
    },
  },
});

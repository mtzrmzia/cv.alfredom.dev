// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    head: {
      bodyAttrs: {
        class: 'antialiased h-full',
      },
    },
  },
  devtools: {
    enabled: false,
  },
  modules: [
    // https://nuxt.com/modules/eslint
    '@nuxt/eslint',
    // https://nuxt.com/modules/ui
    '@nuxt/ui',
    // https://nuxt.com/modules/image
    '@nuxt/image',
    // https://nuxt.com/modules/i18n
    '@nuxtjs/i18n',
    // https://nuxt.com/modules/og-image
    'nuxt-og-image',
    // https://nuxt.com/modules/sitemap
    '@nuxtjs/sitemap',
    // https://nuxt.com/modules/robots
    '@nuxtjs/robots',
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
    baseUrl: process.env.SITE_URL,
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  site: {
    url: process.env.SITE_URL,
    name: 'Cv | Alfredo Martínez',
  },
  image: {
    provider: 'imagekit',
    imagekit: {
      baseURL: process.env.IMAGEKIT_URL,
    },
  },
});

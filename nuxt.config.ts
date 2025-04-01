// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  experimental: {
    typedPages: true,
  },
  ssr: true,
  app: {
    head: {
      bodyAttrs: {
        class: 'antialiased h-full',
      },
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' },
  },
  devtools: {
    enabled: true,
  },
  modules: [
    // https://nuxt.com/modules/ui
    '@nuxt/ui',
    // https://nuxt.com/modules/i18n
    '@nuxtjs/i18n',
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
});

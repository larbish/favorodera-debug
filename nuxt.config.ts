// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxthq/studio',
    '@nuxtjs/color-mode',
  ],
  components: [
    {
      path: '~/components/content-components',
      global: true,
      pathPrefix: true,
      prefix: 'Component',
    },
    {
      path: '~/components/content-home',
      global: true,
      pathPrefix: true,
      prefix: 'Home',
    },
    {
      path: '~/components/content-projects',
      global: true,
      pathPrefix: true,
      prefix: 'Projects',
    },
  ],
  devtools: { enabled: false },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Favour Emeka - Frontend Web Developer' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    rootTag: 'main',
    rootAttrs: {
      id: 'app',
    },
  },
  css: ['~/assets/scss/index.scss'],
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    storage: 'localStorage',
    storageKey: 'color-mode',
    classPrefix: '',
    classSuffix: '',
  },
  content: {
    documentDriven: true,
    highlight: {
      langs: [
        // ...
      ],
      theme: {
        default: 'github-dark',
        dark: 'github-dark',
        light: 'github-light',
      },
    },
  },
  compatibilityDate: '2024-11-01',
  typescript: {
    strict: true,
    typeCheck: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  studio: {
    enabled: true,
  },
  unocss: {
    nuxtLayers: true,
  },
})
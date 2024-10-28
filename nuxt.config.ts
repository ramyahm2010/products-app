// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-10-28',
  modules: ['vuetify-nuxt-module', '@nuxt/fonts'],
  vuetify: {
    vuetifyOptions: './vuetify.config.ts',
  },
});

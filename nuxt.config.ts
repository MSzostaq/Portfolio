export default defineNuxtConfig({
  modules: [
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "nuxt-svgo",
  ],
  colorMode: {
    classSuffix: "",
  },
  devtools: { enabled: true },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
});

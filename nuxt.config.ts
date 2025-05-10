// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Rock+Salt&family=Righteous&family=Acme&display=swap",
        },
      ],
    },
  },
  css: ["@/assets/css/tailwind.css"],
  modules: ["@nuxtjs/tailwindcss"],
});

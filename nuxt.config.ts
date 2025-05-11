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
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase"],
  supabase: {
    redirect: true,
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      include: undefined,
      exclude: [],
      saveRedirectToCookie: false,
    },
  },
  resolutions: {
    cookie: "0.7.2",
  },
});

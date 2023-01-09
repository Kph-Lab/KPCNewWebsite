// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiKey: "",
      serviceDomain: ""
    }
  },
  app: {
    head: {
      title: "海城中高物理部",
      meta: [
        {charset: "utf-8"},
        {name: "viewport", content: "width=device-width,initial-scale=1"},
        {name: "description", content: "海城中高物理部の公式ホームページです。記事や作品などの情報を発信しています。"},
        {property: "og:title", content: "海城中高物理部"},
        {property: "og:description", content: "海城中高物理部の公式ホームページです。記事や作品などの情報を発信しています。"},
        {property: "og:image", content: "https://images.microcms-assets.io/assets/5ff6d04dc95341adae4d92105745e972/3da61f9535f841d393cd443047137ed5/OGP_image.png"},
        {property: "twitter:card", content: "summary_large_image"},
        {property: "twitter:site", content: "@kaijo_physics"},
        {property: "og:locale", content: "ja_JP"}
      ],
      script: [
        {src:"https://kit.fontawesome.com/9f3463b573.js", crossorigin:"anonymous"}
      ],
      link: [
        {rel: "icon", href: "/image/favicon/256.png", sizes: "any", type: "image/png"}
      ]
    }
  }
})
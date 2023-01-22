<template>
  <div class="max-w-2xl mx-auto px-4">
    <h1 class="text-6xl font-bold text-center mt-32 drop-shadow-lg">Articles</h1>
    <p class="text-center">部員が書いた幅広い分野の記事です</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      <NuxtLink
        class="bg-white/40 border-white/20 border-2 p-2 rounded-xl flex flex-col gap-2"
        v-for="article in articles"
        :key="article.key"
        :to="`article/${article.id}`"
      >
        <div
          class="relative bg-center bg-cover before:pt-[60%] before:block rounded-md"
          :style="`background-image: url(${article.eyecatch.url})`"
        />
        <div class="align-bottom">
          <h2 class="text-2xl font-bold">{{article.title}}</h2>
          <p class="text-sm text-black/30 float-left">{{article.updatedAt}}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
  <Footer/>
</template>
<script>
import { createClient } from "microcms-js-sdk"
export default {
  data(){return{
    articles: []
  }},
  mounted(){
    const config = useRuntimeConfig()
    const client = createClient({
      serviceDomain: config.public.serviceDomain,
      apiKey: config.public.apiKey
    })
    client
    .get({
      endpoint: 'blogs'
    })
    .then((res) => {
      this.articles = res.contents
    });
  }
}
</script>
<template>
  <div class="max-w-2xl mx-auto px-4">
    <h1 class="text-6xl font-bold text-center mt-32 drop-shadow-lg">Works</h1>
    <p class="text-center">部員が作成したさまざまな作品の紹介ページです</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      <div
        class="p-2 bg-white/40 border-2 border-white/20 rounded-2xl flex flex-col gap-2"
         v-for="work in works"
        :key="work.key"
      >
        <div class="relative bg-center bg-cover before:pt-[60%] before:block rounded-md" :style="`background-image:url(${work.image.url})`"/>
        <div>
          <h1 class="font-bold text-2xl">{{work.name}}</h1>
          <p class="text-sm">{{work.description}}</p>
          <p class="text-black/40 text-[12px]">作成者:{{work.creator}}</p>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>
<script>
import { createClient } from "microcms-js-sdk"
export default {
  data(){return{
    works: []
  }},
  mounted(){
    const config = useRuntimeConfig()
    const client = createClient({
      serviceDomain: config.public.serviceDomain,
      apiKey: config.public.apiKey
    })
    client
    .get({
      endpoint: 'works'
    })
    .then((res) => {
      this.works = res.contents
    });
  }
}
</script>
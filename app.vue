<template>
  <div class="relative snap-y snap-proximity overflow-y-auto h-screen w-screen">
    <IndexTop class="snap-center h-screen"/>
    <IndexAbout class="snap-center h-screen"/>
    <IndexWorks class="snap-center h-screen"/>
    <IndexArticles class="snap-start h-screen"/>
    <IndexAchivements class="snap-center h-screen"/>
    <Footer class="snap-end"/>
  </div>
  <div class="fixed bottom-14 -right-6 rotate-90">
    <p class="text-sm tracking-[0.25rem] -mb-1 ml-5 text-black/30">scroll</p>
    <div
      class="h-[8px] w-[100px] border-black/30 border-b-[1px] border-r-[1px]"
      style="transform:skew(45deg)"
    />
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Seymour+One&display=swap');
body {
  background: #e2e8f0;
  font-family: 'Noto Sans JP', sans-serif;
}
/*LOGO CSS*/
.cls-1{fill:url(#main_gradient); fill-opacity: 0.8; opacity: 0.8; stroke: #57C0EC; stroke-opacity: 1; stroke-width: 6px;}
.cls-2{fill:rgb(255, 255, 255); stroke: #FFF; opacity: 0.8; stroke-width: 6px; stroke-opacity: 1;}
</style>
<script>
import anime from "animejs/lib/anime.es.js"

export default {
  mounted(){
    anime({
      targets: '#kpcLogo .cls-1',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500
    });
    anime({
      targets: '#kpcLogo .cls-2',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 3000
    });
    anime({
      targets: '#kpcLogo .cls-1',
      "fill-opacity": [0, anime["fill-opacity"]],
      "stroke-opacity": [1, 0],
      easing: 'easeInOutSine',
      duration: 500,
      delay: 1500
    })
    anime({
      targets: '#kpcLogo .cls-2',
      "fill-opacity": [0, anime["fill-opacity"]],
      "stroke-opacity": [1, 0],
      easing: 'easeInOutSine',
      duration: 500,
      delay: 1500
    })
  }
}
</script>
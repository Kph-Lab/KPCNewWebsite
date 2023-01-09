<template>
  <div>
    <div class="fixed h-screen w-screen grid place-content-center">
      <div class="bg-circle opacity-0 w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-300 to-purple-300"/>
      <div class="bg-circle opacity-0 w-24 h-24 rounded-full bg-gradient-to-tr from-purple-300 to-rose-200 -mt-24"/>
      <div class="bg-circle opacity-0 w-24 h-24 rounded-full bg-gradient-to-tr from-blue-300 to-teal-200 -mt-24"/>
      <div class="bg-circle opacity-0 w-24 h-24 rounded-full bg-red-300 -mt-24"/>
    </div>
    <div class="relative snap-y snap-mandatory overflow-y-auto h-screen w-screen" id="main" @scroll="moveBgAnime">
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
  </div>
</template>
<style>
/*LOGO CSS*/
.cls-1{fill:url(#main_gradient); fill-opacity: 0.8; opacity: 0.8; stroke: #57C0EC; stroke-opacity: 1; stroke-width: 6px;}
.cls-2{fill:rgb(255, 255, 255); stroke: #FFF; opacity: 0.8; stroke-width: 6px; stroke-opacity: 1;}
</style>
<script>
import anime from "animejs/lib/anime.es.js"
export default {
  data(){return{
  }},

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
  },

  methods: {
    moveBgAnime(e){
      var bgAnime = anime({
        targets: ".bg-circle",
        autoplay: false,
        keyframes: [
          {
            translateX:0,
            translateY:0,
            duration:100,
            opacity: 0,
            scale: 0
          },
          {
            translateX: function(el, i){
              return (i%2)*100 + (i < 2 ? -250 : 250) - 50
            },
            translateY: function(el, i){
              return (i%2)*400 + (i < 2 ? 50: -50) - 200
            },
            scale: function(el, i){
              return (i%2)*0.5 + (i < 2 ? -0.2: 1.2) + 0.5
            },
            opacity:1,
          },
          {
            translateX: function(el, i){
              return (i%2)*400 + (i < 2 ? 50: -50) - 200
            },
            translateY: function(el, i){
              return (i%2)*100 + (i < 2 ? -250 : 250) - 50
            },
            scale: function(el, i){
              i+=1
              return (i%2)*0.5 + (i < 2 ? -0.2: 1.2) + 0.5
            },
            rotate: "0deg",
            "border-radius": "50%"
          },
          {
            translateX: function(el, i){
              return ((i+1)%2)*400 + (i < 2 ? 50: -50) - 200
            },
            translateY: function(el, i){
              return (i%2)*100 + (!(i < 2) ? -150 : 150) - 50
            },
            scale: 2,
            "border-radius": "30%",
            rotate: function (el, i){
              return (i+1)*(-20)
            }
          },
          {
            translateX: function(el, i){
              return (i%2)*100 + (i < 2 ? -250 : 250) - 50
            },
            translateY: function(el, i){
              return (i%2)*400 + (i < 2 ? 50: -50) - 200
            },
            scale: function(el, i){
              return -(i%2-0.5)*1.2 + (!(i < 2) ? -0.3: 1.3) + 1
            },
            rotate: "0deg",
            "border-radius": "50%"
          }
        ],
        duration: 1000
      })
      const main = e.target
      let mainHeight = 0
      main.childNodes.forEach(element => {
        mainHeight += element.clientHeight
      });
      bgAnime.seek(Math.round(main.scrollTop / (mainHeight - 81) * bgAnime.duration))
    }
  }
}
</script>
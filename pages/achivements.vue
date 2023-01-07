<template>
  <div class="max-w-2xl mx-auto px-4">
    <h1 class="text-6xl font-bold text-center mt-32 drop-shadow-lg">Achivements</h1>
    <p class="text-center">ぶつりぶのさくひんしょうかいぺーじだよ</p>
    <div class="grid grid-cols-1 gap-4 mt-4">
      <div
        v-for="achivement in achivements"
        :key="achivement.key"
        class="p-4 bg-white/40 border-2 border-white/20 rounded-2xl flex flex-row items-center gap-2"
      >
        <i class="fa-solid fa-trophy text-4xl"></i>
        <div>
          <h1 class="font-bold text-2xl">{{achivement.name}}</h1>
          <p class="text-black/60 text-[12px]">{{achivement.who}}</p>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>
<script>
export default {
  data(){return{
    achivements: [
      {
        name: "なんかの大会",
        who: "受賞者A・受賞者B"
      }
    ]
  }}
}
</script>
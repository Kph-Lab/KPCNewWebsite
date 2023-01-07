<template>
  <div class="grid place-content-center relative">
    <div class="h-[560px] w-[400px] absolute top-[calc(50%-300px)] left-[calc(50%-200px)] z-0 opacity-50">
      <div class="w-[320px] h-[240px] rounded-md bg-slate-300 absolute z-0"/>
      <div class="w-[320px] h-[240px] top-[160px] right-0 rounded-md bg-slate-500 absolute z-10"/>
      <div class="w-[320px] h-[240px] bottom-0 left-5 rounded-md bg-slate-700 absolute z-0"/>
    </div>
    <div class="mx-8 z-10">
      <h1 class="text-6xl font-bold text-black/20 -ml-5">02</h1>
      <h1 class="text-6xl font-bold -mt-8">Works</h1>
      <p class="mt-2">かいじょうちゅうこうぶつりぶすごいよ！<br>いえーい！！<br>ここに書く文章何も思いつかないぜ！<br>誰か代わりにかいてくれよおおおお</p>
      <NuxtLink
        class="p-3 my-4 hover:p-2.5 text-sm transition-all duration-150 bg-white hover:bg-white/40 hover:border-2 hover:border-white/20 backdrop-blur-md rounded-full flex flex-row items-baseline gap-2 float-left"
        to="/works"
      >
        <p>作品一覧を見る</p>
        <i class="fa-solid fa-angle-right"></i>
      </NuxtLink>
    </div>
  </div>
</template>
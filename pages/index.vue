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
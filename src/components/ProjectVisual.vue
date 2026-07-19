<script setup lang="ts">
defineProps<{
  type: string
}>()
</script>

<template>
  <div
    v-if="type === 'map'"
    class="relative flex size-full items-center justify-center overflow-hidden bg-[#d77a5c]"
  >
    <div class="absolute inset-5 border border-[#20201d]/60" />
    <div class="relative h-[64%] w-[54%] rotate-[-7deg] border-2 border-[#20201d] bg-[#f0d49c] p-3 shadow-[11px_11px_0_#20201d]">
      <span class="font-[Noto_Serif_TC] text-3xl font-black">小封神</span>
      <div class="mt-4 h-10 border-y border-[#20201d] border-dashed" />
      <div class="mt-3 flex justify-between font-mono text-[9px]">
        <span>北 24°</span>
        <span>寶圖 01</span>
      </div>
    </div>
  </div>
  <div
    v-else-if="type === 'score'"
    class="grid size-full place-items-center bg-[#272a2f]"
  >
    <div class="grid w-[78%] grid-cols-2 border-4 border-[#e7e2d6] p-1 text-center font-[Space_Grotesk] text-5xl font-bold leading-none text-[#e7e2d6] shadow-[10px_10px_0_#cf664b] sm:text-7xl">
      <span class="border-r border-[#e7e2d6] p-4">02</span>
      <span class="p-4">01</span>
      <span class="col-span-2 border-t border-[#e7e2d6] p-2 font-mono text-[10px] tracking-[.2em]">KENDO / MATCH 12</span>
    </div>
  </div>
  <div
    v-else-if="type === 'machine'"
    class="relative grid size-full place-items-center overflow-hidden bg-[#aeb2ac]"
  >
    <div class="absolute left-0 top-[24%] h-px w-full bg-[#20201d]/30" />
    <div class="relative h-[58%] w-[68%] border-[10px] border-[#20201d] bg-[#e1e0d8] shadow-[14px_14px_0_#cf664b]">
      <div class="absolute left-[20%] top-[18%] size-[35%] rounded-full border-[9px] border-[#20201d] bg-[#8a9695]" />
      <div class="absolute bottom-0 left-[12%] h-5 w-[23%] bg-[#20201d]" />
      <div class="absolute bottom-0 right-[12%] h-5 w-[23%] bg-[#20201d]" />
    </div>
  </div>
  <div
    v-else
    class="relative grid size-full place-items-center overflow-hidden bg-[#6e7785]"
  >
    <div class="absolute size-[125%] rotate-45 border border-[#e9e5d9]/40" />
    <div class="relative h-[55%] w-[72%] rounded-[50%] border-[10px] border-[#20201d] bg-[#e9e5d9] shadow-[12px_12px_0_#cf664b]">
      <div class="absolute left-[18%] top-[32%] size-7 rounded-full border-2 border-[#20201d]" />
      <div class="absolute right-[18%] top-[32%] size-7 rounded-full border-2 border-[#20201d]" />
      <span class="absolute bottom-[-24px] left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] text-[#e9e5d9]">IMMERSIVE CONTROL</span>
    </div>
  </div>
</template>

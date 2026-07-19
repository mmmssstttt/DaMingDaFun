<script setup lang="ts">
import content from '@/data/content.json'
</script>

<template>
  <div class="flex h-9 items-center border-b border-border px-3 font-mono text-[9px] tracking-[.08em] text-muted-foreground sm:px-4">
    <div class="flex gap-1.5">
      <i class="size-2 rounded-full bg-[#c75d4a]" />
      <i class="size-2 rounded-full bg-[#cba85d]" />
      <i class="size-2 rounded-full bg-[#82937f]" />
    </div>
    <span class="mx-auto border border-border bg-card px-12 py-0.5">dm-df.studio / {{ content.site.year }}</span>
    <span class="hidden sm:block">{{ content.site.coordinates }}</span>
  </div>
</template>

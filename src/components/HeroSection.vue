<script setup lang="ts">
import { ArrowDownRight } from 'lucide-vue-next'
import Label from './Label.vue'
import content from '@/data/content.json'
</script>

<template>
  <section id="top" class="border-b border-border px-4 pb-10 pt-6 sm:px-6 md:px-8 md:pb-16">
    <div class="mb-12 flex justify-between">
      <Label>01 — DMD F, DESIGN COLLECTIVE</Label>
      <Label>{{ content.site.location }}</Label>
    </div>
    <h1 class="font-[Space_Grotesk] text-[clamp(4.1rem,15vw,14rem)] font-bold leading-[.76] tracking-[-.105em]">
      大<span class="font-[Noto_Serif_TC] text-[#cf664b]">明</span>大放<span class="ml-[.12em] text-[.29em] tracking-[-.065em]">{{ content.site.subtitle }}</span>
    </h1>
    <div class="mt-5 flex items-end justify-between border-t border-border pt-3">
      <p class="font-[Space_Grotesk] text-xl font-medium tracking-[-.055em] sm:text-3xl">{{ content.site.titleEn }}</p>
      <ArrowDownRight :size="28" :stroke-width="1.25" />
    </div>
    <div class="mt-12 grid gap-6 sm:grid-cols-12">
      <p class="font-mono text-[11px] leading-relaxed text-muted-foreground sm:col-span-4">{{ content.site.tagline }}</p>
      <p class="font-mono text-[11px] leading-relaxed text-muted-foreground sm:col-span-5 sm:col-start-8">{{ content.site.services }}</p>
    </div>
  </section>
</template>

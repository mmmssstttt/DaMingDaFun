<script setup lang="ts">
import { CircleUserRound, Plus } from 'lucide-vue-next'
import Label from './Label.vue'
import content from '@/data/content.json'
</script>

<template>
  <footer id="contact" class="border-t border-border">
    <div class="grid border-b border-border md:grid-cols-[auto_1fr]">
      <div class="flex min-h-40 w-full items-end justify-center border-b border-border pb-5 md:w-20 md:border-b-0 md:border-r">
        <CircleUserRound :size="25" :stroke-width="1.3" />
      </div>
      <div class="p-5 sm:p-7 md:p-9">
        <Label>CONTACT / 委託合作</Label>
        <a
          class="mt-5 block w-fit font-[Space_Grotesk] text-[clamp(1.8rem,5vw,4.6rem)] font-bold leading-none tracking-[-.075em] underline decoration-[#cf664b] decoration-[.12em] underline-offset-[.18em] transition-colors hover:text-[#cf664b]"
          :href="`mailto:${content.site.email}`"
        >
          {{ content.site.email }}
        </a>
      </div>
    </div>
    <div class="border-b border-border px-5 py-7 sm:px-7 md:px-9 md:py-10">
      <Label>LONG-TERM COLLABORATORS / 長期合作對象</Label>
      <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <span
          v-for="collab in content.collaborators"
          :key="collab.name"
          :class="[
            'text-3xl font-bold tracking-[-.04em] sm:text-5xl',
            collab.font === 'serif' ? 'font-[Noto_Serif_TC]' : 'font-[Space_Grotesk] tracking-[-.075em]',
          ]"
        >
          {{ collab.name }}
        </span>
        <span class="grid size-8 place-items-center rounded-full bg-foreground text-background">
          <Plus :size="17" />
        </span>
      </div>
    </div>
    <div class="flex items-center justify-between px-5 py-4 sm:px-7 md:px-9">
      <span class="font-[Space_Grotesk] text-xl font-bold tracking-[-.075em]">{{ content.site.title }}</span>
      <span class="font-mono text-[10px] text-muted-foreground">{{ content.site.copyright }}</span>
    </div>
  </footer>
</template>

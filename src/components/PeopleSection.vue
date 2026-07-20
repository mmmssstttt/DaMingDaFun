<script setup lang="ts">
import { ref } from 'vue'
import { ArrowUpRight } from 'lucide-vue-next'
import Label from './Label.vue'
import content from '@/data/content.json'

const activeDot = ref(0)

function handlePersonLink(event: MouseEvent, link: string) {
  if (link.startsWith('http')) {
    const confirmRedirect = window.confirm(`您即將離開本站，前往外部網站：\n${link}\n\n是否繼續前往？`)
    if (!confirmRedirect) {
      event.preventDefault()
    }
  }
}
</script>

<template>
  <section id="people" class="border-b border-border py-12 md:py-20">
    <div class="mb-9 flex items-end justify-between px-4 sm:px-6 md:px-8">
      <div>
        <Label>02 — THE STUDIO</Label>
        <h2 class="mt-1 text-xl font-bold tracking-[-.04em]">各自專精，一起完成</h2>
      </div>
      <span class="font-mono text-[10px]">01—0{{ content.people.length }}</span>
    </div>
    <div class="grid grid-cols-1 gap-12 px-4 sm:px-6 md:grid-cols-12 md:gap-x-4 md:gap-y-0 md:px-8">
      <article
        v-for="(person, i) in content.people"
        :key="person.name"
        :class="person.position"
      >
        <!-- Image: clickable if link exists -->
        <component
          :is="person.link ? 'a' : 'div'"
          :href="person.link || undefined"
          :target="person.link?.startsWith('http') ? '_blank' : undefined"
          :rel="person.link?.startsWith('http') ? 'noopener noreferrer' : undefined"
          :class="person.link ? 'block cursor-pointer' : 'block'"
          @click="person.link ? handlePersonLink($event, person.link) : undefined"
        >
          <div class="relative aspect-[3/4] overflow-hidden bg-muted">
            <img
              :src="person.image"
              :alt="`${person.name} ${person.role}`"
              class="size-full object-cover grayscale-[22%] sepia-[11%] contrast-[.92] transition duration-700 hover:scale-[1.03]"
            />
            <span class="absolute bottom-2 left-2 bg-background px-1.5 py-1 font-mono text-[10px]">0{{ i + 1 }}</span>
          </div>
        </component>
        <!-- Info row: clickable if link exists -->
        <component
          :is="person.link ? 'a' : 'div'"
          :href="person.link || undefined"
          :target="person.link?.startsWith('http') ? '_blank' : undefined"
          :rel="person.link?.startsWith('http') ? 'noopener noreferrer' : undefined"
          :class="['mt-2 flex justify-between border-t border-foreground pt-2', person.link ? 'cursor-pointer' : '']"
          @click="person.link ? handlePersonLink($event, person.link) : undefined"
        >
          <div>
            <p class="font-bold tracking-[-.035em]">{{ person.name }}</p>
            <p class="mt-1 font-mono text-[10px] tracking-[.06em] text-muted-foreground">{{ person.role }}</p>
          </div>
          <ArrowUpRight :size="16" :stroke-width="1.3" />
        </component>
      </article>
    </div>
    <div class="mt-14 flex justify-center gap-2 md:mt-20">
      <button
        v-for="(_, dot) in content.people"
        :key="dot"
        :aria-label="`第${dot + 1}位成員`"
        :class="[
          'size-2 rounded-full border border-foreground',
          activeDot === dot ? 'bg-foreground' : 'bg-transparent',
        ]"
        @click="activeDot = dot"
      />
    </div>
  </section>
</template>

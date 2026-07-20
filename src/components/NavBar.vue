<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import content from '@/data/content.json'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="relative flex h-16 items-center justify-between border-b border-border px-4 sm:px-6 md:px-8">
    <router-link to="/" class="font-mono text-[11px] tracking-[.12em]">DMDF®</router-link>
    <nav class="hidden gap-7 font-mono text-[10px] tracking-[.12em] md:flex">
      <a
        v-for="link in content.nav"
        :key="link.href"
        :href="link.href"
        :target="link.href.startsWith('http') ? '_blank' : undefined"
        :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
      >{{ link.label }}</a>
    </nav>
    <button
      class="grid size-8 place-items-center border border-border md:hidden"
      aria-label="開啟選單"
      @click="toggleMenu"
    >
      <X v-if="menuOpen" :size="17" />
      <Menu v-else :size="17" />
    </button>
    <nav
      v-if="menuOpen"
      class="absolute left-0 top-full z-20 flex w-full flex-col border-b border-border bg-background px-4 py-3 font-mono text-xs tracking-[.1em] shadow-[0_12px_0_rgba(32,32,29,.12)] md:hidden"
    >
      <a
        v-for="link in content.nav"
        :key="link.href"
        :href="link.href"
        class="border-t border-border py-3"
        :target="link.href.startsWith('http') ? '_blank' : undefined"
        :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
        @click="closeMenu"
      >
        {{ link.label }}
      </a>
    </nav>
  </header>
</template>

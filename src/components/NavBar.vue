<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'
import content from '@/data/content.json'

const route = useRoute()
const router = useRouter()
const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

function handleExternalLink(event: MouseEvent, href: string) {
  const confirmRedirect = window.confirm(`您即將離開本站，前往外部網站：\n${href}\n\n是否繼續前往？`)
  if (!confirmRedirect) {
    event.preventDefault()
  } else {
    closeMenu()
  }
}

function handleAnchorClick(event: MouseEvent, href: string) {
  closeMenu()
  // If already on home page, manually scroll to the element
  if (route.path === '/') {
    event.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    // Update the hash in the URL without triggering navigation
    router.replace({ path: '/', hash: href })
  }
  // If on another page, router-link will navigate to { path: '/', hash: href }
  // and scrollBehavior will handle smooth scrolling
}
</script>

<template>
  <header class="relative flex h-16 items-center justify-between border-b border-border px-4 sm:px-6 md:px-8">
    <router-link to="/" class="font-mono text-[11px] tracking-[.12em]">DMDF®</router-link>
    <nav class="hidden gap-7 font-mono text-[10px] tracking-[.12em] md:flex">
      <template v-for="link in content.nav" :key="link.href">
        <a
          v-if="link.href.startsWith('http')"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          @click="handleExternalLink($event, link.href)"
        >
          {{ link.label }}
        </a>
        <router-link
          v-else
          :to="link.href.startsWith('#') ? { path: '/', hash: link.href } : link.href"
          @click="link.href.startsWith('#') ? handleAnchorClick($event, link.href) : undefined"
        >
          {{ link.label }}
        </router-link>
      </template>
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
      <template v-for="link in content.nav" :key="link.href">
        <a
          v-if="link.href.startsWith('http')"
          :href="link.href"
          class="border-t border-border py-3"
          target="_blank"
          rel="noopener noreferrer"
          @click="handleExternalLink($event, link.href)"
        >
          {{ link.label }}
        </a>
        <router-link
          v-else
          :to="link.href.startsWith('#') ? { path: '/', hash: link.href } : link.href"
          class="border-t border-border py-3"
          @click="link.href.startsWith('#') ? handleAnchorClick($event, link.href) : closeMenu()"
        >
          {{ link.label }}
        </router-link>
      </template>
    </nav>
  </header>
</template>

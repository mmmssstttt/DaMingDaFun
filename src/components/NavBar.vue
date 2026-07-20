<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'
import { smoothScrollTo } from '@/utils/scroll'
import content from '@/data/content.json'

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

/**
 * Smooth-scroll to a section anchor (#id).
 * Fully bypasses Vue Router — no scrollBehavior conflict.
 */
function handleAnchorClick(event: MouseEvent, hash: string) {
  event.preventDefault()
  closeMenu()

  const scrollToHash = () => {
    const el = document.querySelector(hash)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY
    smoothScrollTo(top, 400) // 0.4 seconds smooth animation
  }

  // If not on home page, navigate first, then scroll after render
  const currentPath = router.currentRoute.value.path
  if (currentPath !== '/') {
    router.push('/').then(() => {
      // Wait for next tick so the DOM is ready
      requestAnimationFrame(scrollToHash)
    })
  } else {
    scrollToHash()
  }
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
        <a
          v-else-if="link.href.startsWith('#')"
          :href="link.href"
          @click="handleAnchorClick($event, link.href)"
        >
          {{ link.label }}
        </a>
        <router-link v-else :to="link.href">
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
        <a
          v-else-if="link.href.startsWith('#')"
          :href="link.href"
          class="border-t border-border py-3"
          @click="handleAnchorClick($event, link.href)"
        >
          {{ link.label }}
        </a>
        <router-link v-else :to="link.href" class="border-t border-border py-3" @click="closeMenu">
          {{ link.label }}
        </router-link>
      </template>
    </nav>
  </header>
</template>

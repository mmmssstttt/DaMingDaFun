<script setup lang="ts">
import Background3D from './components/Background3D.vue'
import ScrollToTop from './components/ScrollToTop.vue'
</script>

<template>
  <div class="relative min-h-screen">
    <Background3D />
    <main class="relative z-10 min-h-screen bg-background font-[Noto_Sans_TC] text-foreground">
      <router-view />
    </main>
    <ScrollToTop />
  </div>
</template>

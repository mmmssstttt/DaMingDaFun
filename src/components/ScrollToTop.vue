<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUp } from 'lucide-vue-next'

const visible = ref(false)
const THRESHOLD = 400

function checkScroll() {
  visible.value = window.scrollY > THRESHOLD
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll, { passive: true })
  checkScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <Transition name="fade-up">
    <button
      v-if="visible"
      aria-label="回到頂端"
      class="fixed right-4 top-20 z-50 grid size-9 place-items-center rounded-full border border-border bg-background/80 backdrop-blur-sm transition-colors duration-200 hover:bg-foreground hover:text-background"
      @click="scrollToTop"
    >
      <ArrowUp :size="15" :stroke-width="1.5" />
    </button>
  </Transition>
</template>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>

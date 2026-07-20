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
      class="fixed bottom-6 right-6 z-50 grid size-10 place-items-center border border-border bg-background/80 backdrop-blur-sm transition-colors duration-200 hover:bg-foreground hover:text-background"
      @click="scrollToTop"
    >
      <ArrowUp :size="16" :stroke-width="1.5" />
    </button>
  </Transition>
</template>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>

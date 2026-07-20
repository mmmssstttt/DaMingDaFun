<script setup lang="ts">
import { computed } from 'vue'
import { ArrowLeft } from 'lucide-vue-next'
import { marked } from 'marked'
import Label from '@/components/Label.vue'
import StatusBar from '@/components/StatusBar.vue'
import NavBar from '@/components/NavBar.vue'
import FooterSection from '@/components/FooterSection.vue'
import content from '@/data/content.json'

const props = defineProps<{
  id: string
}>()

const member = computed(() =>
  content.people.find((p) => p.id === props.id)
)

const parsedBio = computed(() => {
  if (member.value && member.value.bio) {
    return marked.parse(member.value.bio) as string
  }
  return ''
})
</script>

<template>
  <div class="mx-auto max-w-[1600px] overflow-hidden border-x border-border bg-background">
    <StatusBar />
    <NavBar />

    <article v-if="member" class="px-4 py-12 sm:px-6 md:px-8 md:py-20">
      <router-link to="/" class="mb-8 inline-flex items-center gap-2 font-mono text-[11px] tracking-[.1em] text-muted-foreground transition-colors hover:text-foreground">
        <ArrowLeft :size="14" />
        返回首頁 BACK
      </router-link>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
        <!-- Photo -->
        <div class="md:col-span-5">
          <div class="aspect-[3/4] overflow-hidden bg-muted">
            <img
              :src="member.image"
              :alt="member.name"
              class="size-full object-cover grayscale-[22%] sepia-[11%] contrast-[.92]"
            />
          </div>
        </div>
        <!-- Info -->
        <div class="md:col-span-7 md:pt-8">
          <Label>MEMBER</Label>
          <h1 class="mt-3 font-[Space_Grotesk] text-[clamp(2rem,5vw,4rem)] font-bold leading-[.95] tracking-[-.06em]">
            {{ member.name }}
          </h1>
          <div class="mt-4 border-t border-border pt-3">
            <span class="font-mono text-[11px] text-muted-foreground">{{ member.role }}</span>
          </div>
          <div
            v-if="parsedBio"
            class="markdown-content mt-8 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground"
            v-html="parsedBio"
          />
          <p v-else class="mt-8 font-mono text-sm text-muted-foreground">
            更多介紹即將更新。
          </p>
        </div>
      </div>
    </article>

    <div v-else class="flex min-h-[50vh] items-center justify-center px-4">
      <div class="text-center">
        <h1 class="font-[Space_Grotesk] text-4xl font-bold tracking-[-.06em]">找不到此成員</h1>
        <p class="mt-3 font-mono text-sm text-muted-foreground">Member not found</p>
        <router-link to="/" class="mt-6 inline-block font-mono text-sm underline decoration-[#cf664b] underline-offset-4">
          返回首頁
        </router-link>
      </div>
    </div>

    <FooterSection />
  </div>
</template>

<style scoped>
:deep(.markdown-content h1),
:deep(.markdown-content h2),
:deep(.markdown-content h3) {
  color: var(--foreground);
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}
:deep(.markdown-content p) {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
:deep(.markdown-content a) {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 4px;
}
:deep(.markdown-content a:hover) {
  color: var(--foreground);
}
:deep(.markdown-content strong) {
  font-weight: 700;
  color: var(--foreground);
}
:deep(.markdown-content img) {
  max-width: 100%;
  height: auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
</style>

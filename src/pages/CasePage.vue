<script setup lang="ts">
import { computed } from 'vue'
import { ArrowLeft } from 'lucide-vue-next'
import Label from '@/components/Label.vue'
import ProjectVisual from '@/components/ProjectVisual.vue'
import StatusBar from '@/components/StatusBar.vue'
import NavBar from '@/components/NavBar.vue'
import FooterSection from '@/components/FooterSection.vue'
import content from '@/data/content.json'

const props = defineProps<{
  id: string
}>()

const project = computed(() =>
  content.projects.find((p) => p.id === props.id)
)
</script>

<template>
  <div class="mx-auto max-w-[1600px] overflow-hidden border-x border-border bg-background">
    <StatusBar />
    <NavBar />

    <article v-if="project" class="px-4 py-12 sm:px-6 md:px-8 md:py-20">
      <router-link to="/" class="mb-8 inline-flex items-center gap-2 font-mono text-[11px] tracking-[.1em] text-muted-foreground transition-colors hover:text-foreground">
        <ArrowLeft :size="14" />
        返回首頁 BACK
      </router-link>

      <div class="mb-4 flex items-end justify-between">
        <Label>{{ project.type }}</Label>
        <span class="font-mono text-[10px]">{{ project.id }}</span>
      </div>

      <h1 class="font-[Space_Grotesk] text-[clamp(2rem,6vw,5rem)] font-bold leading-[.92] tracking-[-.07em]">
        {{ project.title }}
      </h1>

      <div class="mt-4 border-t border-border pt-3">
        <span class="font-mono text-[11px] text-muted-foreground">{{ project.date }}</span>
      </div>

      <div class="mt-10 aspect-[16/9] overflow-hidden">
        <ProjectVisual :type="project.visual" />
      </div>

      <div v-if="project.description" class="mt-10 max-w-2xl">
        <Label>ABOUT THIS PROJECT</Label>
        <p class="mt-3 font-mono text-sm leading-relaxed text-muted-foreground">
          {{ project.description }}
        </p>
      </div>

      <div v-if="project.body" class="mt-10 max-w-2xl" v-html="project.body" />

      <div v-if="project.gallery && project.gallery.length" class="mt-10">
        <Label>GALLERY</Label>
        <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <img
            v-for="(img, i) in project.gallery"
            :key="i"
            :src="img"
            :alt="`${project.title} gallery ${i + 1}`"
            class="aspect-[4/3] w-full object-cover"
          />
        </div>
      </div>
    </article>

    <div v-else class="flex min-h-[50vh] items-center justify-center px-4">
      <div class="text-center">
        <h1 class="font-[Space_Grotesk] text-4xl font-bold tracking-[-.06em]">找不到此作品</h1>
        <p class="mt-3 font-mono text-sm text-muted-foreground">Project not found</p>
        <router-link to="/" class="mt-6 inline-block font-mono text-sm underline decoration-[#cf664b] underline-offset-4">
          返回首頁
        </router-link>
      </div>
    </div>

    <FooterSection />
  </div>
</template>

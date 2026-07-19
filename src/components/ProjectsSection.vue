<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import Label from './Label.vue'
import ProjectVisual from './ProjectVisual.vue'
import content from '@/data/content.json'
</script>

<template>
  <section id="projects" class="py-12 md:py-20">
    <div class="flex items-end justify-between px-4 sm:px-6 md:px-8">
      <div>
        <Label>03 — SELECTED PROJECTS</Label>
        <h2 class="mt-1 text-xl font-bold tracking-[-.04em]">商業作品</h2>
      </div>
      <span class="font-mono text-[10px]">2025—26</span>
    </div>
    <div class="mt-8 grid grid-cols-1 gap-x-4 gap-y-10 px-4 sm:px-6 md:grid-cols-12 md:px-8">
      <article
        v-for="project in content.projects"
        :key="project.id"
        :class="['group', project.position]"
      >
        <router-link :to="`/case/${project.id}`" class="block">
          <div class="aspect-[4/3] overflow-hidden">
            <ProjectVisual :type="project.visual" />
          </div>
          <div class="mt-2 border-t border-foreground pt-2">
            <div class="flex justify-between">
              <Label>{{ project.type }}</Label>
              <span class="font-mono text-[10px]">{{ project.id }}</span>
            </div>
            <h3 class="mt-7 font-[Space_Grotesk] text-2xl font-bold leading-[.98] tracking-[-.055em] sm:text-3xl">{{ project.title }}</h3>
            <div class="mt-7 flex items-end justify-between border-t border-border pt-2">
              <span class="font-mono text-[10px] text-muted-foreground">{{ project.date }}</span>
              <ArrowUpRight :size="18" />
            </div>
          </div>
        </router-link>
      </article>
    </div>
  </section>
</template>

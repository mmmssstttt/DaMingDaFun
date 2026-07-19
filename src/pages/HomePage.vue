<script setup lang="ts">
import StatusBar from '@/components/StatusBar.vue'
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import PeopleSection from '@/components/PeopleSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>

<template>
  <div class="mx-auto max-w-[1600px] overflow-hidden border-x border-border bg-background">
    <StatusBar />
    <NavBar />
    <HeroSection />
    <PeopleSection />
    <ProjectsSection />
    <FooterSection />
  </div>
</template>

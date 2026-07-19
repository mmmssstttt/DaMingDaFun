<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
</script>

<template>
  <div class="pointer-events-none fixed inset-0 z-0">
    <TresCanvas clear-color="#e9e5d9">
      <TresPerspectiveCamera :position="[0, 0, 5]" />
      <TresAmbientLight :intensity="0.6" />
      <TresDirectionalLight :position="[3, 4, 5]" :intensity="0.8" />
    </TresCanvas>
  </div>
</template>

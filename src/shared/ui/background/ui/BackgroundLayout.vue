<script setup lang="ts">
import { defineProps } from 'vue'

import type { BackgroundProps } from '@/shared/ui/background'

const { className, procentOpacity } = defineProps<BackgroundProps>()
</script>

<template>
  <div class="background" :class="className" :style="`opacity: ${procentOpacity}`">
    <slot />
  </div>
</template>

<style scoped>
.background {
  background-color: var(--bg-element-color);
  border: 1px solid var(--black-border-color);
  padding: 10px 25px;
  border-radius: 10px;
}
</style>

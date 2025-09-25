<script setup lang="ts">
import { defineProps } from 'vue'

import { type CTABlock } from '@/shared/types'

const props = defineProps<CTABlock>()
</script>

<template>
  <a :href="props.url" target="_blank" class="cta-element">{{ props.text }}</a>
</template>

<style scoped>
.cta-element {
  background: var(--gradient-color-primary);
  border-radius: 25px;
  padding: 5px 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  color: var(--main-text-color);
}
</style>

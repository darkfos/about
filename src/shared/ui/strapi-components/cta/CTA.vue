<script setup lang="ts">
import { defineProps } from 'vue'

import { type CTABlock } from '@/shared/types'

const props = defineProps<CTABlock>()
</script>

<template>
  <div class="cta-element">
    <a :href="props.url" target="_blank" class="cta-element__btn">{{ props.text }}</a>
  </div>
</template>

<style scoped>
.cta-element {
  margin-top: 8px;
  margin-bottom: 20px;
}

.cta-element__btn {
  background: var(--gradient-color-primary);
  border-radius: 10px;
  padding: 5px 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  color: var(--main-text-color);
}
</style>

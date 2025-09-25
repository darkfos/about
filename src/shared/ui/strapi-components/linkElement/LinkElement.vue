<script setup lang="ts">
import { defineProps } from 'vue'

import { type LinkBlock } from '@/shared/types'

const props = defineProps<LinkBlock>()
</script>

<template>
  <template v-if="props.icon">
    <button class="link-block" type="button">
      <img
        :src="import.meta.env.VITE_BACKEND_SHORT_URL + props.icon.path"
        :alt="props.alt"
        width="40"
        height="40"
      />
      <p v-if="props.text">{{ text }}</p>
    </button>
  </template>
  <template v-else>
    <button type="button" class="link-block">
      <a :href="props.href">{{ props.text }}</a>
    </button>
  </template>
</template>

<style scoped>
img {
  width: 40px;
  height: 40px;
}

.link-block {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  row-gap: 5px;
}

.link-block button {
  padding: 5px 8px;
  border-radius: 25px;
  background: var(--gradient-color-primary);
  color: var(--main-text-color);
}
</style>

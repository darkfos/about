<script setup lang="ts">
import { defineProps } from 'vue'

import { StrapiBlocks } from 'vue-strapi-blocks-renderer'

const { content } = defineProps(['content'])
</script>

<template>
  <div class="rich-text">
    <StrapiBlocks :content="content" />
  </div>
</template>

<style>
.rich-text h1 {
  color: var(--pink-text-color);
  font-weight: 700;
}

.rich-text h2 {
  color: var(--pink-text-color);
  font-weight: 600;
}

.rich-text h3 {
  color: var(--main-text-color);
  font-weight: 500;
}
</style>

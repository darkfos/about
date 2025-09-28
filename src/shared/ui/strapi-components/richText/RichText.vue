<script setup lang="ts">
import { defineProps } from 'vue'

import { StrapiBlocks } from 'vue-strapi-blocks-renderer'

const { content } = defineProps(['content'])
</script>

<template>
  <StrapiBlocks :content="content" />
</template>

<style scoped>
h1, h2, h3, h4, h5, h6 {
  color: var(--pink-text-color);
  font-weight: 700;
}
</style>

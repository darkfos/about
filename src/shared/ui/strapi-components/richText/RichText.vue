<script setup lang="ts">
import { defineProps } from 'vue'

import { StrapiBlocks } from 'vue-strapi-blocks-renderer'

const { content } = defineProps(['content'])
</script>

<template>
  <StrapiBlocks :content="content" />
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { ImageBlock } from '@/shared/types'

const props = defineProps<ImageBlock>()
</script>

<template>
  <img :src="props?.img?.url" :alt="props.alt" />
</template>

<style scoped>
img {
  width: 100%;
  border-radius: 10px;
}
</style>

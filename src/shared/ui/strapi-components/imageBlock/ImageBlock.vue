<script setup lang="ts">
import { defineProps, inject, ref } from 'vue'
import type { ImageBlock } from '@/shared/types'

const props = defineProps<ImageBlock>()
const imgUrl = inject('KEY_GENERAL_SHORT_BACKEND_URL', ref<string>(''))
</script>

<template>
  <img :src="imgUrl + props?.img?.url" :alt="props.alt" />
</template>

<style scoped>
img {
  width: 100%;
  border-radius: 10px;
}
</style>

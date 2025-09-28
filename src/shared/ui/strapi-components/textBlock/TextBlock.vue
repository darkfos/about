<script setup lang="ts">
import type { TextBlock } from '@/shared/types'

import { RichText } from '@/shared/ui'

const { header, text } = defineProps<TextBlock>()
</script>

<template>
  <h1>{{ header }}</h1>
  <RichText :content="text" />
</template>

<style scoped>
</style>

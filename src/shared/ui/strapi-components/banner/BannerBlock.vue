<script setup lang="ts">
import { defineProps } from 'vue'

import { type BannerBlock } from '@/shared/types'

const props = defineProps<BannerBlock>()
</script>

<template>
  <section class="banner-block">
    <img
      :src="import.meta.env.VITE_BACKEND_SHORT_URL + props.image.path"
      :alt="props.image.caption"
      width="500"
      height="500"
    />
    <h3>{{ props.text }}</h3>
  </section>
</template>

<style scoped>
.banner-block {
  width: 100%;
  display: flex;
  flex-direction: column;
  column-gap: 15px;
}

.banner-block img {
  border-radius: 25%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>

<script setup lang="ts">
import { defineProps } from 'vue'

import type { GalleryBlock as GalleryBlockProps } from '@/shared/types'

const props = defineProps<GalleryBlockProps>()
</script>

<template>
  <section class="gallery-block">
    <a-carousel arrows>
      <template #prevArrow>
        <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
          <left-circle-outlined />
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-slick-arrow" style="right: 10px">
          <right-circle-outlined />
        </div>
      </template>
      <img v-for="image in props.images" :src="image.url" :alt="image.caption" :key="image.id" />
    </a-carousel>
  </section>
</template>

<style scoped>
.gallery-block {
  padding: 20px 0px;
  width: 90%;
  margin: auto;
}

.gallery-block img {
  border-radius: 10px;
}
</style>

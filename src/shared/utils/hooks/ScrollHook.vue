<script setup lang="ts">
import { inject, ref, onMounted, onUnmounted, defineProps } from 'vue'

import { ARTICLE_END } from '@/shared/utils/consts.ts'
import { END_ARTICLE } from '@/shared/utils/providers.ts'

const endArticle = inject(END_ARTICLE, ref<boolean>(false))
const { func } = defineProps(['func'])

const handleScrollDocument = () => {
  const innerHeight = window.innerHeight

  if (window.scrollY > ARTICLE_END(innerHeight)) {
    endArticle.value = true
    func()
  } else {
    endArticle.value = false
  }
}

onMounted(() => {
  document.addEventListener('scroll', handleScrollDocument)
})

onUnmounted(() => {
  document.removeEventListener('scroll', handleScrollDocument)
})
</script>

<template>
  <div></div>
</template>

<style scoped>
div {
  display: none;
  visibility: hidden;
}
</style>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import { ComponentStrapiFabric } from '@/widgets/components-fabric'

import { getBlog } from '@/entities/blog'

import type { Article } from '@/shared/types'

const route = useRoute()
const articleData = ref<Article>({} as Article)
const notFoundArticles = ref(false)

onMounted(() => {
  getBlog(route.params.id as string).then((data) => {
    articleData.value = data
  }).catch(() => {
    notFoundArticles.value = true
  })
})

watch(
  () => route.params.id,
  () => {
    getBlog(route.params.id as string).then((data) => {
      articleData.value = data
    })
  },
)
</script>

<template>
  <ComponentStrapiFabric
    :sections="articleData.section"
    :not-found="notFoundArticles"
    :views="articleData.views"
    :themes="articleData.themes"
    :author="articleData.author"
  />
</template>

<style scoped></style>

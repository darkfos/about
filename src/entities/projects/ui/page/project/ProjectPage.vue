<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { ComponentStrapiFabric } from '@/widgets/components-fabric'

import { getProject } from '@/entities/projects/api'

import type { Article } from '@/shared/types'

const route = useRoute()
const articleData = ref<Article>({} as Article)
const notFound = ref(false)

onMounted(() => {
  getProject(route.params.id as string)
    .then((data) => {
      articleData.value = data
    })
    .catch(() => {
      notFound.value = true
    })
})
</script>

<template>
  <ComponentStrapiFabric
    :sections="articleData.section"
    :views="articleData.views"
    :themes="articleData.themes"
    :author="articleData.author"
    :not-found="notFound"
  />
</template>

<style scoped></style>

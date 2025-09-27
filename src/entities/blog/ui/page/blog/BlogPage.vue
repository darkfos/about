<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { ComponentStrapiFabric } from '@/widgets/components-fabric'
import type { Blog } from '@/entities/blog'
import { getBlog } from '@/entities/blog'

const route = useRoute()
const blogData = ref<Blog>({} as Blog)

onMounted(() => {
  getBlog(route.params.id as string).then((data) => {
    blogData.value = data
  })
})
</script>

<template>
  <ComponentStrapiFabric
    :sections="blogData.section"
    :themes="blogData.themes"
    :author="blogData.author"
  />
</template>

<style scoped></style>

<script setup lang="ts">
import { provide } from 'vue'

import { SearchComponent } from '@/widgets/search'

import { getBlogs, BLOG_TITLE_SEARCH_VALUE, BLOG_TITLE_SEARCH_KEY } from '@/entities/blog'

provide(BLOG_TITLE_SEARCH_KEY, BLOG_TITLE_SEARCH_VALUE)
</script>

<template>
  <SearchComponent
    title="Давай-ка поищем..."
    not-found-text="Не удалось найти блоги"
    :func-to-find-elements="getBlogs"
    :key-ref-provide="BLOG_TITLE_SEARCH_KEY"
  />
</template>

<style scoped></style>

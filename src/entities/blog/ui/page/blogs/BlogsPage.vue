<script setup lang="ts">
import { provide } from 'vue'

import { SearchComponent } from '@/features/search'

import { getBlogs, SEARCH_TITLE_SEARCH_VALUE, SEARCH_TITLE_SEARCH_KEY } from '@/entities/blog'

provide(SEARCH_TITLE_SEARCH_KEY, SEARCH_TITLE_SEARCH_VALUE)
</script>

<template>
  <SearchComponent
    title="Давай-ка поищем..."
    not-found-text="Не удалось найти блоги"
    :func-to-find-elements="getBlogs"
    :key-ref-provide="SEARCH_TITLE_SEARCH_KEY"
  />
</template>

<style scoped></style>

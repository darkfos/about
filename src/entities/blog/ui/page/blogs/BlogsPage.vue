<script setup lang="ts">
import { provide } from 'vue'

import { SearchComponent } from '@/features/search'

import { getBlogs } from '@/entities/blog'
import { SEARCH_TITLE_SEARCH_VALUE, SEARCH_TITLE_SEARCH_KEY } from '@/shared/utils'

const randomTitles = [
  'Давай-ка поищем...',
  'Что тут у нас...',
  'Поиск по блогам',
  'Давай-же нажми на поиск!',
]

provide(SEARCH_TITLE_SEARCH_KEY, SEARCH_TITLE_SEARCH_VALUE)
</script>

<template>
  <SearchComponent
    :title="randomTitles[Math.floor(Math.random() * randomTitles.length)]"
    :func-to-find-elements="getBlogs"
    :key-ref-provide="SEARCH_TITLE_SEARCH_KEY"
  />
</template>

<style scoped></style>

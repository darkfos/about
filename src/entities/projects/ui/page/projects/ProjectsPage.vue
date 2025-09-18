<script setup lang="ts">
import { provide } from 'vue'

import { SearchComponent } from '@/widgets/search'
import { SEARCH_TITLE_SEARCH_KEY, SEARCH_TITLE_SEARCH_VALUE} from '@/entities/blog'

const randomTitles = ['Давай-ка поищем...', 'Что тут у нас...', 'Поиск по проектам', 'Давай-же нажми на поиск!']

provide(SEARCH_TITLE_SEARCH_KEY, SEARCH_TITLE_SEARCH_VALUE)
</script>

<template>
  <SearchComponent
    :title="randomTitles[Math.floor(Math.random() * 5)]"
    :key-ref-provide="SEARCH_TITLE_SEARCH_KEY"
    :func-to-find-elements="() => {}"
    not-found-text="Не удалось найти проекты">

  </SearchComponent>
</template>

<style scoped></style>

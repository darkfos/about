<script setup lang="ts">
import { defineProps } from 'vue'
import type { HorizontalCardProps } from '@/shared/ui'

const { titleText, titleIcon, descriptionText } = defineProps<HorizontalCardProps>()
</script>

<template>
  <article class="h-card">
    <div class="h-card__header">
      <img :src="titleIcon" :alt="titleIconAlt ?? 'Иконка заголовка карточки'" />
      {{ titleText }}
    </div>
    <div class="h-card__content">
      {{ descriptionText }}
    </div>
  </article>
</template>

<style scoped>
.h-card {
  max-width: 519px;
  border-radius: 20px;
  box-sizing: border-box;

  background: linear-gradient(205.91deg, rgba(202, 10, 158, 0.3) -297.84%, #242121 83.65%);
  border: 1px solid #3b3737;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  color: var(--main-text-color);
  padding: 5px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 24px;
  font-size: var(--font-size);
}

.h-card__header {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 14px;
  text-align: left;
}

.h-card__header img {
  width: 80px;
}

.h-card__content {
  word-break: break-word;
  padding-bottom: 15px;
}
</style>

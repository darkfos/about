<script setup lang="ts">
import { defineProps } from 'vue'

import type { BannerBlockI, DynamicSectionAdditionalData } from '@/shared/types'
import { LinkElementWidget } from '@/shared/ui'

const props = defineProps<BannerBlockI & DynamicSectionAdditionalData>()
const imgUrl = import.meta.env.VITE_BACKEND_SHORT_URL + props.image.path

const urlAvatarUser = import.meta.env.VITE_BACKEND_SHORT_URL + props.account.avatar.path
</script>

<template>
  <section class="banner-block">
    <header>
      <img :src="imgUrl" :alt="props.image.caption" width="500" height="500" />
      <h3>{{ props.text }}</h3>
      <LinkElementWidget v-for="theme in props.themes" :key="theme.documentId" :alt="theme.name" :active="false" />
    </header>
    <main>
      <div class="banner-block__content">
        <img :src="urlAvatarUser"/>
        <p>{{ props.account.name }}</p>
      </div>
    </main>
  </section>
</template>

<style scoped>
.banner-block {
  width: 100%;
  display: flex;
  flex-direction: column;
  column-gap: 15px;
}

.banner-block img {
  border-radius: 25%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.banner-block__content {
  display: flex;
  flex-direction: row;
  row-gap: 15px;
  justify-content: left;
  align-items: flex-start;
  align-content: flex-start;
}
</style>

<script setup lang="ts">
import { defineProps } from 'vue'

import type { BannerBlockI, DynamicSectionAdditionalData } from '@/shared/types'
import { LinkElementWidget } from '@/shared/ui'

const props = defineProps<BannerBlockI & DynamicSectionAdditionalData>()
const imgUrl = import.meta.env.VITE_BACKEND_SHORT_URL + props.image.img.url

const urlAvatarUser = import.meta.env.VITE_BACKEND_SHORT_URL + props.author.avatar.url
</script>

<template>
  <section class="banner-block">
    <header>
      <img :src="imgUrl" :alt="props.image.img.caption" />
      <h3>{{ props.text }}</h3>
    </header>
    <main>
      <div class="banner-block__content">
        <LinkElementWidget
          id="banner-link"
          v-for="theme in props.themes"
          :key="theme.documentId"
          :text="theme.name"
          :active="false"
        />
        <div class="content__avatar">
          <a-avatar size="large" shape="square">
            <template #icon>
              <img :src="urlAvatarUser" />
            </template>
          </a-avatar>
          <p>{{ props.author.username }}</p>
        </div>
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
  border-radius: 25px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.banner-block__content {
  display: flex;
  flex-direction: row;
  column-gap: 15px;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}

.content__avatar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

h3 {
  font-size: var(--h3-size);
}

header div {
  width: 8%;
  text-align: center;
}

header img {
  width: 100%;
}
</style>

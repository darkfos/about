<script setup lang="ts">
import { ref, defineProps, inject } from 'vue'

import type { BannerBlockI, DynamicSectionAdditionalData } from '@/shared/types'
import { LinkElementWidget } from '@/shared/ui'
import { KEY_GENERAL_SHORT_BACKEND_URL } from '@/shared/utils'

const props = defineProps<BannerBlockI & DynamicSectionAdditionalData>()
const imgUrl = inject(KEY_GENERAL_SHORT_BACKEND_URL, ref()).value + props.image.img.url

const urlAvatarUser = inject(KEY_GENERAL_SHORT_BACKEND_URL, ref()).value + props.author.avatar.url
</script>

<template>
  <section class="banner-block">
    <header>
      <img :src="imgUrl" :alt="props.image.img.caption" />
      <h2>{{ props.text }}</h2>
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
          <LinkElementWidget :text="props.views" class="view">
            <template #img>
              <img src="/img/view.png" alt="Просмотр" />
            </template>
          </LinkElementWidget>
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

h2 {
  font-size: var(--h2-size);
  font-weight: 700;
}

header div {
  width: 8%;
  text-align: center;
}

header img {
  width: 100%;
}

.view {
  display: flex;
  align-content: center;
  column-gap: 8px;
  border-radius: 10px;
  padding: 8px;
}
</style>

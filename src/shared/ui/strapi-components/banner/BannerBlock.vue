<script setup lang="ts">
import { defineProps } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue'

import type { BannerBlockI, DynamicSectionAdditionalData } from '@/shared/types'
import { LinkElementWidget } from '@/shared/ui'

const props = defineProps<BannerBlockI & DynamicSectionAdditionalData>()
const imgUrl = props?.image?.img?.url

const urlAvatarUser = props?.author?.avatar?.url
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
              <template v-if="props?.author?.avatar?.url">
                <img :src="urlAvatarUser" />
              </template>
              <template v-else>
                <UserOutlined />
              </template>
            </template>
          </a-avatar>
          <p>{{ props?.author?.username ?? 'Инкогнито' }}</p>
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
  height: 100% !important;
  transform: scaleX(150%);
  border-radius: 0 !important;
}

.view {
  display: flex;
  align-content: center;
  column-gap: 8px;
  border-radius: 10px;
  padding: 8px;
}

@media screen and (max-width: 950px) {
  .banner-block__content {
    flex-direction: column;
    align-content: flex-start;
    align-items: flex-start;
    row-gap: 20px;
  }
}

@media screen and (max-width: 660px) {
  h2 {
    font-size: var(--h3-size);
  }
}
</style>

<script setup lang="ts">
import { defineProps, inject, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { LinkElementWidget } from '@/shared/ui'
import { KEY_GENERAL_SHORT_BACKEND_URL } from '@/shared/utils'

const { id, image, imageAlt, title, shortDescription, themes } = defineProps([
  'image',
  'id',
  'imageAlt',
  'title',
  'shortDescription',
  'themes',
  'avatarName',
  'avatarImage',
])
const router = useRouter()
const route = useRoute()

const handleContinueClick = (): void => {
  router.push({ name: route.path.split('/')[1], params: { id: id } })
}

const urlBack = inject(KEY_GENERAL_SHORT_BACKEND_URL, ref<string>(''))
</script>

<template>
  <a-card hoverable style="width: 370px" class="blog-card">
    <template #cover>
      <img :src="image" :alt="imageAlt" class="card-avatar" />
      <div id="continue-icon" @click="handleContinueClick">
        <img src="/img/continue-icon.png" alt="Перейти" />
      </div>
    </template>
    <a-card-meta :title="title">
      <template #description>
        {{ shortDescription }}
      </template>
    </a-card-meta>
    <div class="blog-card__footer">
      <LinkElementWidget
        v-for="(linkElement, key) in themes"
        :text="linkElement"
        :key="key"
        id="link-theme"
      />
    </div>
    <div class="blog-card__avatar">
      <p>{{ avatarName }}</p>
      <a-avatar :src="urlBack + avatarImage" />
    </div>
  </a-card>
</template>

<style>
.blog-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  word-break: break-word;
  overflow: hidden;
  box-shadow: 2px 4px 4px 3px rgba(244, 247, 249, 0.1);
}

.card-avatar {
  z-index: 1 !important;
}

.blog-card:hover .card-avatar {
  transform: scale(1.1);
  filter: blur(4px);
  transition: all 0.4s ease-in-out;
}

.blog-card:hover #continue-icon {
  opacity: 1 !important;
}

.blog-card p {
  font-size: 9pt !important;
}

.blog-card__footer {
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  row-gap: 10px;
  flex-wrap: wrap;
  padding-top: 40px;
  padding-bottom: 10px;
}

.blog-card__footer div {
  width: auto;
}

.blog-card__avatar {
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 20px;
  align-items: center;
}
</style>

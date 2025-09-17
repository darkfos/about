<script setup lang="ts">
import { defineProps } from 'vue'

import { LinkElementWidget } from '@/shared/ui'

const { image, imageAlt, title, shortDescription, themes } = defineProps([
  'image',
  'imageAlt',
  'title',
  'shortDescription',
  'themes',
])
</script>

<template>
  <a-card hoverable style="width: 370px" class="blog-card">
    <template #cover>
      <img :src="image" :alt="imageAlt" />
    </template>
    <a-card-meta :title="title">
      <template #description>
        {{ shortDescription }}
      </template>
    </a-card-meta>
    <div class="blog-card-footer">
      <LinkElementWidget v-for="(linkElement, key) in themes" :text="linkElement" :key="key" />
    </div>
  </a-card>
</template>

<style>
.blog-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  word-break: break-word;
}

.blog-card p {
  font-size: 9pt !important;
}

.blog-card-footer {
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  overflow-x: scroll;
  overflow-y: hidden;
  flex-wrap: nowrap;
  padding-top: 20px;
  padding-bottom: 10px;
}

.blog-card-footer div {
  width: auto;
}
</style>

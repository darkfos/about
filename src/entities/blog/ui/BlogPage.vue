<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import { useRoute } from 'vue-router'

import { LinkElementWidget } from '@/shared/ui'

import { FormInput, TitleText } from '@/shared/ui'
import { useMainStore } from '@/shared/store'

const mainStore = useMainStore()
const route = useRoute()
const current: Ref<number> = ref(+(route.query.page ?? 1))

onMounted(async () => {})
</script>

<template>
  <div class="blog">
    <TitleText align="center" title="Давай-ка поищем..." type-title="h3" :single="true" />
    <div class="blog-themes">
      <FormInput />
      <TitleText align="left" title="Темы" type-title="h5" style="margin-top: 20px" />
      <div class="blog-themes__content">
        <LinkElementWidget
          :active="true"
          v-for="theme in mainStore.getThemes()"
          :key="theme.id"
          :text="theme?.name as string"
        ></LinkElementWidget>
      </div>
    </div>
    <div class="blog-content">
      <a-pagination v-model:current="current" :total="85" :show-size-changer="false" />
    </div>
  </div>
</template>

<style>
.blog {
  width: 90%;
  margin: auto;
}

.blog > h1 {
  text-align: center;
}

.blog-themes {
  width: 50%;
  margin: auto;
  text-align: left;
}

.blog-themes__content {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: -15px;
  flex-wrap: wrap;
}

.input-wrapper input {
  width: 100%;
  margin-top: 5px;
  border-radius: 5px;
  background: none;
  padding: 8px;
  border-color: var(--main-btn-color);
  color: var(--main-text-color);
}

.blog-content {
  width: 70%;
  margin: auto;
  margin-top: 60px;
}

.ant-pagination {
  margin: auto !important;
  text-align: center !important;
  width: 70%;
}

.ant-pagination-item a {
  color: var(--select-text) !important;
  font-weight: bold;
}

.ant-pagination-item-active {
  background-color: var(--main-text-color) !important;
  border-color: var(--select-text) !important;
  font-weight: bold;
}

.ant-pagination-item-link {
  color: var(--select-text) !important;
  font-weight: bold;
}
</style>

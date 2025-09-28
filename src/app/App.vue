<script setup lang="ts">
import { provide } from 'vue'

import { HeaderWidget } from '@/widgets/header'
import { FooterWidget } from '@/widgets/footer'

import { getThemes } from '@/entities/theme'
import type { Theme } from '@/entities/theme'

import { useMainStore } from '@/shared/store'
import { ToTop, BlurCursor } from '@/shared/ui'

import {
  KEY_GENERAL_SHORT_BACKEND_URL,
  GENERAL_SHORT_BACKEND_URL,
  END_ARTICLE,
  END_ARTICLE_VALUE,
  SCREEN_WIDTH_KEY,
  SCREEN_WIDTH_VALUE,
} from '@/shared/utils'

const mainStore = useMainStore()

if (!mainStore.getThemes().length) {
  getThemes().then((data) => {
    mainStore.addThemes(data as Theme[])
  })
}

provide(KEY_GENERAL_SHORT_BACKEND_URL, GENERAL_SHORT_BACKEND_URL)
provide(END_ARTICLE, END_ARTICLE_VALUE)
provide(SCREEN_WIDTH_KEY, SCREEN_WIDTH_VALUE)
</script>

<template>
  <div class="bodyApp">
    <HeaderWidget />
    <router-view />
    <FooterWidget />
    <ToTop />
    <BlurCursor />
  </div>
</template>

<style>
body {
  width: 100%;
}

.bodyApp {
  max-width: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin: auto;
  color: var(--main-text-color);
}
</style>

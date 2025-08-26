<script setup lang="ts">
import { HeaderWidget } from '@/widgets/header'
import { FooterWidget } from '@/widgets/footer'

import { getThemes } from '@/entities/theme'
import type { Theme } from '@/entities/theme'

import { useMainStore } from '@/shared/store'
import { ToTop } from '@/shared/ui'

const mainStore = useMainStore()

if (!mainStore.getThemes().length) {
  // Set themes
  getThemes().then((data) => {
    mainStore.addThemes(data as Theme[])
  })
}

document.body.classList.add(mainStore.appTheme)
</script>

<template>
  <div class="bodyApp">
    <HeaderWidget />
    <router-view />
    <FooterWidget />
    <ToTop />
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

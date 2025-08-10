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
  background-color: var(--main-color);
  color: var(--main-text-color);
  width: 100%;
}

.bodyApp {
  max-width: 80%;
  width: 80%;
  display: grid;
  border: 1px solid red;
  gap: 100px;
  margin: auto;
}
</style>

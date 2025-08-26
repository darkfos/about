<script setup lang="ts">
import { ref } from 'vue'

import { LightIcon, DarkIcon } from '@/shared/ui/icons'

import { useMainStore } from '@/shared/store'
import { saveOnLocalStorage } from '@/shared/utils'
import type { themeColor } from '@/shared/types'

const mainStore = useMainStore()
const themeIcon = ref(LightIcon)

const handleThemeSwitcher = () => {
  const rootElement: HTMLElement = document.body
  const [themeColorOld, themeColorNow] = [
    mainStore.appTheme,
    mainStore.appTheme === 'dark' ? 'light' : 'dark',
  ]

  mainStore.appTheme = themeColorNow as themeColor

  rootElement?.classList.remove(themeColorOld)
  rootElement?.classList.add(themeColorNow)

  saveOnLocalStorage('theme', themeColorNow)

  themeIcon.value = themeColorNow == 'dark' ? DarkIcon : LightIcon
}
</script>

<template>
  <div class="theme-icon" @click="handleThemeSwitcher">
    <component :is="themeIcon" />
  </div>
</template>

<style scoped>
.theme-icon {
  width: 20px;
  height: auto;
}

.theme-icon svg {
  width: 32px;
  height: 32px;
  fill: var(--pink-text-color);
  cursor: pointer;
  padding: 5px;
  transition: all 0.4s ease-in-out;
}

.theme-icon svg:hover {
  background-color: rgba(59, 58, 58, 0.38);
  border-radius: 20px;
}
</style>

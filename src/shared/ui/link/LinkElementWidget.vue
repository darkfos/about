<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { convertJsonToArray } from '@/shared/utils'

const { img, redirect, text, isPng, alt, active } = defineProps([
  'img',
  'redirect',
  'text',
  'isPng',
  'alt',
  'active',
])
const route = useRoute()
const router = useRouter()
const activeThemes = computed(() => convertJsonToArray<string>(route.query?.themes as string))

const redirectPage = (): void => {
  window.location.href = redirect
}

const handleClick = (): void => {
  if (active) {
    let themes: Array<string> = activeThemes.value

    if (themes.includes(text)) {
      themes = themes.filter((theme) => theme !== text)
    } else {
      themes.push(text)
    }

    router.push({ path: route.path, query: { themes: JSON.stringify(themes) } })
  }
}
</script>

<template>
  <div
    :class="[
      text ? 'link-element-text' : 'link-element',
      activeThemes.includes(text) ? 'selected-link' : '',
    ]"
    @click="handleClick"
  >
    <template v-if="text">
      <slot name="img" />
      <p>{{ text }}</p>
    </template>
    <template v-else>
      <template v-if="isPng">
        <img :src="`/about/img/${img}`" :alt="alt" @click="redirectPage" />
      </template>
      <component :is="img" @click="redirectPage"></component>
    </template>
  </div>
</template>

<style scoped>
.link-element-text {
  font-size: 11pt;
  padding-left: 5px;
  padding-right: 5px;
  color: var(--select-text);
  background-color: var(--link-element-bg-color);
  border-radius: 10px;
  cursor: pointer;
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
}

.link-element-text p {
  font-size: 12pt;
}

.link-element {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 82px;
  height: 35px;
  border-radius: 10px;
  background-color: var(--link-element-bg-color);
  cursor: pointer;
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
}

img {
  width: 22px;
  height: 22px;
}

svg {
  width: 40px;
  height: 22px;
}

.link-element:hover,
.link-element-text:hover {
  box-shadow: #ca0a9e 1px 1px 1px 2px;
  transform: rotate(3deg);
}

.selected-link {
  transform: rotate(2deg);
  box-shadow: #ca0a9e 1px 1px 2px 2px;
}
</style>

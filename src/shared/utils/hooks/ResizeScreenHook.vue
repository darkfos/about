<script setup lang="ts">
import { inject, ref, onUnmounted, onMounted } from 'vue'

import { SCREEN_WIDTH_KEY } from '@/shared/utils'

const screenWidth = inject(SCREEN_WIDTH_KEY, ref(window.innerWidth))

const changeScreenWidth = () => {
  screenWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', changeScreenWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', changeScreenWidth)
})
</script>

<template>
  <div class="hidden"></div>
</template>

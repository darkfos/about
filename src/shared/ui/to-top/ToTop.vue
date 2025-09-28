<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'

import { ArrowIconIcon } from '@/shared/ui'

const styles = ref('')
const toScroll = ref(1920)

const onScrollToTop = () => {
  if (window.scrollY > 550) {
    styles.value = 'transform: rotate(135deg)'
    toScroll.value = 0
  } else {
    styles.value = 'transform: rotate(-45deg)'
    toScroll.value = document.documentElement.scrollHeight
  }
}

const handleClick = () => {
  window.scrollTo({ top: toScroll.value, behavior: 'smooth' })
}

onMounted(() => {
  document.addEventListener('scroll', onScrollToTop)
})

onUnmounted(() => {
  document.removeEventListener('scroll', handleClick)
})
</script>

<template>
  <div id="top" @click="handleClick">
    <ArrowIconIcon :style="styles" />
  </div>
</template>

<style scoped>
#top {
  content: '';
  position: fixed;
  z-index: 99999;
  width: 64px;
  height: 64px;
  border-radius: 15px;
  background-color: var(--pink-text-color);
  right: 35px;
  top: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.6s ease;
}

#top:hover {
  background-color: var(--link-element-bg-color);
}

#top svg {
  fill: var(--white-bg-color);
  width: 28px;
  height: 28px;
  transform: rotate(-45deg);
  transition: transform 0.6s ease;
}

@media screen and (max-width: 450px) {
  #top {
    border-radius: 5px;
    width: 32px;
    height: 32px;
  }

  #top svg {
    width: 18px;
  }
}
</style>

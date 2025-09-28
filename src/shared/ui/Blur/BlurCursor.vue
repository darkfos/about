<script setup lang="ts">
import { computed, ref, onUnmounted, type CSSProperties } from 'vue'

const xPosition = ref(window.innerWidth / 2)
const yPosition = ref(window.innerHeight / 2)

const onMove = (e: MouseEvent): void => {
  xPosition.value = e.clientX
  yPosition.value = e.clientY
}

window.addEventListener('mousemove', onMove)

const styleBg = computed<CSSProperties>(() => ({
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100vw',
  height: '100vh',
  pointerEvents: 'none',
  zIndex: 0,
  background: `radial-gradient(circle 80px at ${xPosition.value}px ${yPosition.value}px, #bb0591 0%, rgba(60,100,180,.04) 50%, transparent 100%)`,
  transition: 'background 0.01s',
  willChange: 'background',
}))

onUnmounted(() => {
  window.removeEventListener('mousemove', onMove)
})
</script>

<template>
  <div id="cursor-bg" :style="styleBg"></div>
  <slot />
</template>

<style scoped>
#cursor-bg {
  filter: blur(45px);
}
</style>

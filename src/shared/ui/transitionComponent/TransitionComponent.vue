<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isVisible = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 },
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<template>
  <section ref="sectionRef" class="section" :class="isVisible ? 'is-visible' : ''">
    <slot name="component"></slot>
  </section>
</template>

<style scoped>
.section {
  transition: all 0.9s ease-in-out;
  opacity: 0;
}

.is-visible {
  opacity: 1 !important;
}
</style>

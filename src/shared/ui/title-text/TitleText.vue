<script setup lang="ts">
interface TitleProps {
  title: string
  align: 'left' | 'right' | 'center'
  typeTitle: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  closeFigure?: boolean
  single?: boolean
}

defineProps<TitleProps>()
</script>

<template>
  <template v-if="['h1', 'h2', 'h3'].includes(typeTitle) && !closeFigure">
    <div class="figure" :class="align === 'center' ? 'figure-center' : null" />
  </template>
  <template v-if="single">
    <component :is="typeTitle" :style="`text-align: ${align}`" id="single-header">
      {{ title }}
      <slot />
    </component>
  </template>
  <template v-else>
    <component :is="typeTitle" :style="`text-align: ${align}`">
      {{ title }}
      <slot />
    </component>
  </template>
</template>

<style scoped>
h1 {
  font-size: var(--h1-size);
}

h2 {
  font-size: var(--h2-size);
}

h3 {
  font-size: var(--h3-size);
}

h4 {
  font-size: var(--h4-size);
}

h5 {
  font-size: var(--h5-size);
}

h6 {
  font-size: var(--h6-size);
}

h1,
h2,
h3 {
  position: relative;
  z-index: 5;
}

.figure {
  width: 40px;
  height: 40px;
  position: relative;
  top: 80px;
  left: -5px;
  background-color: var(--main-btn-color);
  border-radius: 50%;
}

.figure-center {
  left: 41%;
  top: 65px;
}

#single-header::before {
  display: none;
}
</style>

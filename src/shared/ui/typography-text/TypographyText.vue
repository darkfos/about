<script setup lang="ts">
interface TypographyProps {
  type: 'p' | 'span' | 'a'
  href?: string
}

defineProps<TypographyProps>()
</script>

<template>
  <template v-if="type === 'a'">
    <a :href="href">
      <slot />
    </a>
  </template>
  <template v-else>
    <component :is="type">
      <slot />
    </component>
  </template>
</template>

<style scoped>
p,
span {
  font-size: var(--font-size);
}
</style>

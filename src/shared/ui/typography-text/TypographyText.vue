<script setup lang="ts">
interface TypographyProps {
  type?: 'p' | 'span' | 'a'
  href?: string
  id?: string
  isRouteLink?: boolean
}

defineProps<TypographyProps>()
</script>

<template>
  <template v-if="isRouteLink">
    <slot :id="id" />
  </template>
  <template v-else>
    <template v-if="type === 'a'">
      <a :href="href" :id="id">
        <slot />
      </a>
    </template>
    <template v-else>
      <component :is="type" :id="id">
        <slot />
      </component>
    </template>
  </template>
</template>

<style></style>

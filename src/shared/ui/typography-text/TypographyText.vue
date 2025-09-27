<script setup lang="ts">
interface TypographyProps {
  type?: 'p' | 'span' | 'a'
  className?: string
  href?: string
  id?: string
  isRouteLink?: boolean
}

defineProps<TypographyProps>()
</script>

<template>
  <template v-if="isRouteLink">
    <slot :id="id" :class="className"/>
  </template>
  <template v-else>
    <template v-if="type === 'a'">
      <a :href="href" :id="id" :class="className">
        <slot />
      </a>
    </template>
    <template v-else>
      <component :is="type" :id="id" :class="className">
        <slot />
      </component>
    </template>
  </template>
</template>

<style></style>

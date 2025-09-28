<script setup lang="ts">
import { BackgroundLayout } from '@/shared/ui'
</script>

<template>
  <div class="section-content">
    <BackgroundLayout id="background">
      <slot name="content"></slot>
    </BackgroundLayout>
  </div>
</template>

<style scoped>
.section-content {
  width: 75%;
  margin: auto;
}

.section-content > div {
  padding-bottom: 80px;
}
</style>

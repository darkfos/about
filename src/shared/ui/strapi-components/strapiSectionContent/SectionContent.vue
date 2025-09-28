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

@media screen and (max-width: 1400px) {
  .section-content {
    width: 100%;
  }
}
</style>

<script setup lang="ts">
import HeaderWidget from '@/widgets/header/HeaderWidget.vue'
</script>

<template>
  <div class="bodyApp">
    <HeaderWidget />
    <router-view />
  </div>
</template>

<style>
body {
  background-color: var(--main-color);
  color: var(--main-text-color);
}

.bodyApp {
  width: 80%;
  display: grid;
  grid-template-rows: auto;
  gap: 100px;
  margin: auto;
}
</style>

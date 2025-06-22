<script setup lang="ts">
import HeaderWidget from "@/widgets/header/HeaderWidget.vue";
</script>

<template>
  <div class="bodyApp">
    <HeaderWidget />
  </div>
</template>

<style>

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--main-color);
    color: var(--main-text-color);
  }

  .bodyApp {
    width: 80%;
    margin: auto;
  }
</style>

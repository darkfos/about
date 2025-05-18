<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderWidget from "@/widgets/Header/HeaderWidget.vue";
</script>

<template>
  <HeaderWidget />
  <div class="bodyApp">
    <RouterView />
  </div>
</template>

<style>

  body {
    background-color: var(--main-color);
    color: var(--main-text-color);
  }

  .bodyApp {
    width: 80%;
    margin: auto;
  }

</style>

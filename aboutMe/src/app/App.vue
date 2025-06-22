<script setup lang="ts">
import HeaderWidget from "@/widgets/header/HeaderWidget.vue";
import HomePage from "@/pages/home/HomePage.vue";
</script>

<template>
  <div class="bodyApp">
    <HeaderWidget />
    <HomePage />
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

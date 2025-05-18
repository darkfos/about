<script setup lang="ts">
import { RouterView } from 'vue-router'

import Anchor from "@/widgets/Aside/Anchor.vue";
import HeaderWidget from "@/widgets/Header/HeaderWidget.vue";
</script>

<template>
  <HeaderWidget />
  <div class="bodyApp">
    <Anchor :anchor-link="[
      {
        href: 'th1',
        title: 'Краткий обзор'
      },
      {
        href: 'th2',
        title: 'Тд, тп'
      }
    ]"/>
    <div class="page">
      <RouterView />
    </div>
  </div>
</template>

<style>

  body {
    background-color: var(--main-color);
    color: var(--main-text-color);
  }

  .bodyApp {
    width: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 80px;
  }

  .page {
    margin-top: 70px;
  }

</style>

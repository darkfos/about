<script setup lang="ts"></script>

<template>
  <article class="not-found">
    <img src="/img/not_found.png" alt="Не найдено" />
    <a-button type="default">Сбросить фильтры</a-button>
  </article>
</template>

<style scoped>
.not-found {
  margin: auto;
  margin-top: 50px;
  width: 50%;
}

.not-found img {
  width: 100%;
  border-radius: 20px;
}
</style>

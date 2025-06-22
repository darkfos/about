<script setup lang="ts">
  import {RouterLink} from "vue-router";
</script>

<template>
  <header>
    <div>
      <p id="select-text">darkfos</p>
    </div>
    <div>
      <nav>
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/blog">Блог</RouterLink>
        <RouterLink to="/projects">Проекты</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  header {
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: 3fr 1fr;
    justify-content: space-between;
  }

  nav {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }

  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    color: var(--select-text);
    font-weight: bold;
    transition: font-weight 200ms ease-in-out, color 200ms ease-in-out;
  }
</style>

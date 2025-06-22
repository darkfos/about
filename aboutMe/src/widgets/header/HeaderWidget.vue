<script setup lang="ts">

</script>

<template>
  <header>
    <div>
      <p id="select-text">darkfos</p>
    </div>
    <div>
      <nav>
        <ul>
          <li>Главная</li>
          <li>Блог</li>
          <li>Проекты</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  header {
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr;
    justify-content: space-between;
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }

  li {
    list-style: none;
  }
</style>

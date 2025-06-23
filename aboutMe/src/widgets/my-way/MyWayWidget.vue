<script setup lang="ts">

</script>

<template>
  <section class="my-way">
    <h2>Мой путь</h2>
  </section>
</template>

<style scoped>
  h2::before {
    position: relative;
    display: inline-block;
    z-index: -2;
    left: 20px;
    top: 5px;
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #CA0A9E;;
  }

  .my-way {
    text-align: center;
  }
</style>

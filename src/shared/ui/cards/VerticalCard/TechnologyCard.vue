<script setup lang="ts"></script>
<template>
  <article class="vertical-card">
    <div class="content">
      <slot />
    </div>
  </article>
</template>

<style scoped>
.vertical-card {
  background-color: #ffd1bd;
  border: 1px solid #d9bfb4;
  border-radius: 10px;
  filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.25));
  width: auto;
  min-height: 350px;
  flex: 1;
}

.vertical-card .content {
  padding: 50px 20px 50px 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

const current: Ref<number> = ref(1)
const themes: Array<string> = ['Фронтенд', 'Бекенд', 'Веб', 'История', 'Спорт']
</script>

<template>
  <div class="blog">
    <h1>Давай-ка поищем...</h1>
    <form class="blog-form">
      <div class="input-wrapper">
        <input type="text" />
      </div>
    </form>
    <div class="blog-themes">
      <h4>Темы</h4>
      <div class="blog-themes__content">
        <p v-for="theme in themes" :key="theme">{{ theme }}</p>
      </div>
    </div>
    <a-pagination v-model:current="current" :total="85" show-less-items />
  </div>
</template>

<style scoped>
.blog {
  width: 90%;
  margin: auto;
}

.blog > h1 {
  text-align: center;
}

.blog-form {
  margin: auto;
  width: 50%;
}

.blog-themes {
  width: 50%;
  margin: auto;
  text-align: left;
}

.blog-themes__content {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: -35px;
}

.blog-themes__content p {
  padding: 5px;
  background-color: var(--link-element-bg-color);
  color: var(--select-text);
  border-radius: 10px;
}

.input-wrapper input {
  width: 100%;
  margin-top: 5px;
  border-radius: 5px;
  background: none;
  padding: 8px;
  border-color: var(--main-btn-color);
  color: var(--main-text-color);
}

.input-wrapper {
  position: relative;
  z-index: 1;
}

.input-wrapper:before {
  content: '';
  background: url('../../../public/icons/find.png');
  background-color: var(--link-element-bg-color);
  background-repeat: no-repeat;
  background-position: center;
  padding: 8px;
  background-size: 25px 25px;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  display: inline-block;
  position: absolute;
  left: 95%;
  top: 10px;
  cursor: pointer;
  z-index: 4;
  transition: background-color 0.6s ease;
}

.input-wrapper:hover::before {
  background-color: var(--text-selected);
}
</style>

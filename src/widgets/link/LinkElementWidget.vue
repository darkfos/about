<script setup lang="ts">
import { defineProps } from 'vue'

const { img, title, redirect, text } = defineProps(['img', 'title', 'redirect', 'text'])

const redirectPage = (): void => {
  window.location.href = redirect
}
</script>

<template>
  <div :class="text ? 'link-element-text' : 'link-element'">
    <template v-if="text">
      <p>{{ text }}</p>
    </template>
    <template v-else>
      <img
        :src="'../../../public/icons/' + img"
        :alt="title ? title : 'иконка элемента'"
        @click="redirectPage"
      />
    </template>
  </div>
</template>

<style scoped>
.link-element-text {
  font-size: 11pt !important;
  padding-left: 5px;
  padding-right: 5px;
  color: var(--select-text);
  background-color: var(--link-element-bg-color);
  border-radius: 10px;
  cursor: pointer;
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
}

.link-element-text p {
  font-size: 11pt !important;
}

.link-element {
  text-align: center;
  width: 71px;
  height: 29px;
  border-radius: 10px;
  background-color: var(--link-element-bg-color);
  cursor: pointer;
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
}

img {
  width: 23px;
  height: 22px;
}

.link-element:hover,
.link-element-text:hover {
  box-shadow: #ca0a9e 1px 1px 1px 2px;
  transform: rotate(3deg);
}
</style>

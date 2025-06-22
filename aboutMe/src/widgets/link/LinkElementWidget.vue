<script setup lang="ts">
  import {defineProps} from 'vue';

  const {img, title} = defineProps(["img", "title"]);

  console.log(img, title);
</script>

<template>
  <div class="link-element">
    <img :src="'../../../public/icons/'+img" :alt="title ? title : 'иконка элемента'" />
  </div>
</template>

<style scoped>
  .link-element {
    text-align: center;
    padding: 5px;
    width: 71px;
    height: 29px;
    border-radius: 10px;
    background-color: var(--link-element-bg-color);
    cursor: pointer;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  img {
    width: 23px;
    height: 22px;
  }

  .link-element:hover {
   box-shadow: #CA0A9E 1px 1px 1px 2px;
    transform: rotate(3deg);
  }
</style>

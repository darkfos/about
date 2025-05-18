<script setup lang="ts">
import { h, ref, watch } from 'vue';
import { MenuProps } from 'ant-design-vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const current = ref();
const items = ref<MenuProps['items']>([
  {
    key: '',
    label: 'Главная',
    title: 'Главная страница',
  },
  {
    key: 'projects',
    label: 'Проекты',
    title: 'Страница проектов',
  },
  {
    key: 'blog',
    label: 'Блог',
    title: 'Страница блога',
  },
]);

watch(current, () => {
  router.push(
    {
      path: `/${current.value[0]}`
    }
  )
});

</script>

<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" class="header"/>
</template>

<style>
  .header {
    width: 100%;
    font-size: 18px;
    background-color: var(--main-color);
    color: var(--main-text-color);
    margin: auto;
    text-align: center;
    justify-content: center;
    gap: 20px;
    border-bottom: 0.1px solid rgb(54, 54, 54);
  }

  .ant-menu-item-active::after {
    border-bottom-color: var(--main-btn-color) !important;
  }

  .ant-menu-item:hover {
    color: white !important;
  }

  .ant-menu-item-selected {
    color: inherit !important;
  }

  .ant-menu-item-selected::after {
    border-bottom-color: var(--main-btn-color) !important;
  }

</style>

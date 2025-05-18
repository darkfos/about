<script setup lang="ts">
import { h, ref } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { MenuProps } from 'ant-design-vue';

const current = ref();
const items = ref<MenuProps['items']>([
  {
    key: 'home',
    icon: () => h(MailOutlined),
    label: 'Главная',
    title: 'Главная страница',
  },
  {
    key: 'projects',
    icon: () => h(AppstoreOutlined),
    label: 'Проекты',
    title: 'Страница проектов',
  },
  {
    key: 'sub1',
    icon: () => h(SettingOutlined),
    label: 'Блог',
    title: 'Страница блога',
  },
]);

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

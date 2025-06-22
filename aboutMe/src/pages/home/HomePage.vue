<script setup lang="ts">
  import {useMainStore} from "@/shared/store";

  const store = useMainStore();

  store.addPagesLink(
    [
      {
        href: "about",
        title: "Обо мне"
      },
      {
        href: "hobby",
        title: "Хобби"
      },
      {
        href: "road",
        title: "Мой путь"
      },
      {
        href: "achievements",
        title: "Достижения"
      },
      {
        href: "aim",
        title: "Цель"
      },
      {
        href: "contacts",
        title: "Контакты"
      }
    ]
  )
</script>

<template>
</template>

<style>
</style>

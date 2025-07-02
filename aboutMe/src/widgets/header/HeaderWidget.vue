<script setup lang="ts">
  import { watch } from "vue";
  import {RouterLink, useRoute} from "vue-router";

  import {useMainStore} from "@/shared/store";

  const route = useRoute();
  const mainStore = useMainStore();
  const headerLink: Array<{href: string; title: string}> = [
    {
      href: '/',
      title: "Главная"
    },
    {
      href: "/blog",
      title: "Блог"
    },
    {
      href: "/projects",
      title: "Проекты"
    }
  ];

  watch(() => route.path, (newPath: string) => {
    mainStore.addPagesLink(newPath);
  });
</script>

<template>
  <header>
    <div>
      <p id="select-text">darkfos</p>
    </div>
    <div>
      <nav v-for="hLink in headerLink">
        <RouterLink :to="hLink.href" :class="mainStore.activePage === hLink.href ? 'active' : null">{{ hLink.title }}</RouterLink>
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

  .active {
    color: var(--select-text);
  }
</style>

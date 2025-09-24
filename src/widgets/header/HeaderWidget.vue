<script setup lang="ts">
import { watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { BurgerMenu, ThemeSwitcher } from '@/shared/ui'

import { TypographyText } from '@/shared/ui'
import { useMainStore } from '@/shared/store'

const route = useRoute()
const mainStore = useMainStore()

const headerLink: Array<{ href: string; title: string }> = [
  {
    href: '/',
    title: 'Главная',
  },
  {
    href: '/blogs',
    title: 'Блог',
  },
  {
    href: '/projects',
    title: 'Проекты',
  },
]

watch(
  () => route.path,
  (newPath: string) => {
    mainStore.addPagesLink(newPath)
  },
)
</script>

<template>
  <header id="header">
    <TypographyText type="p" id="select-text-header">darkfos.io</TypographyText>
    <div class="header__items">
      <ThemeSwitcher />
      <BurgerMenu :header-link="headerLink" />
      <nav id="native-menu">
        <div v-for="(hLink, index) in headerLink" :key="index">
          <TypographyText :is-route-link="true">
            <RouterLink
              :to="hLink.href"
              :id="route.path === hLink.href ? 'router-link_active' : 'router-link_default'"
              >{{ hLink.title }}</RouterLink
            >
          </TypographyText>
        </div>
      </nav>
    </div>
  </header>
</template>

<style>
#header {
  display: flex;
  align-items: center;
  grid-template-columns: 3fr 1fr;
  justify-content: space-between;
}

#select-text-header {
  color: var(--main-text-color);
  font-weight: 800;
}

.header__items {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  gap: 50px;
}

nav {
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: 80%;
}

.active {
  color: var(--pink-text-color);
}

@media screen and (max-width: 850px) {
  #native-menu {
    display: none;
  }
}
</style>

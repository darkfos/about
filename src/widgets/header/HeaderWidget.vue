<script setup lang="ts">
import { watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { BurgerMenu } from '@/shared/ui'

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
    href: '/blog',
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
    <TypographyText type="p" id="select-text">darkfos</TypographyText>
    <div>
      <BurgerMenu :header-link="headerLink" />
      <nav id="native-menu">
        <div v-for="(hLink, index) in headerLink" :key="index">
          <RouterLink
            :to="hLink.href"
            :class="mainStore.activePage === hLink.href ? 'active' : null"
            >{{ hLink.title }}</RouterLink
          >
        </div>
      </nav>
    </div>
  </header>
</template>

<style>
#header {
  width: 100%;
  display: flex;
  align-items: center;
  grid-template-columns: 3fr 1fr;
  justify-content: space-between;
}

nav {
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: 80%;
}

a {
  text-decoration: none;
  color: white;
  font-size: var(--font-size);
}

a:hover {
  color: #bb0591;
  font-weight: bold;
  transition:
    font-weight 200ms ease-in-out,
    color 200ms ease-in-out;
}

.active {
  color: #bb0591;
}

@media screen and (max-width: 850px) {
  #header {
    max-width: 100%;
    width: 100%;
  }

  #native-menu {
    display: none;
  }
}
</style>

<script setup lang="ts">
import { watch, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { TypographyText } from '@/shared/ui'
import { useMainStore } from '@/shared/store'

const route = useRoute()
const mainStore = useMainStore()

const openBurgerMenu = ref(false)
const paddingBurgerMenu = ref('10px')

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

const handleClickBurgerMenu = () => {
  openBurgerMenu.value = !openBurgerMenu.value
}

watch(openBurgerMenu, (burgerValue) => {
  if (burgerValue) {
    paddingBurgerMenu.value = '0px'
  } else {
    paddingBurgerMenu.value = '10px'
  }
})
</script>

<template>
  <header id="header">
    <TypographyText type="p" id="select-text">darkfos</TypographyText>
    <div>
      <label id="burger-menu" :style="`padding: ${paddingBurgerMenu}`">
        <template v-if="openBurgerMenu">
          <div class="burder-menu__content">
            <template v-for="(hLink, index) in headerLink" :key="index">
              <RouterLink
                :to="hLink.href"
                :class="mainStore.activePage === hLink.href ? 'active' : null"
                >{{ hLink.title }}</RouterLink
              >
            </template>
            <TypographyText type="a" @click="handleClickBurgerMenu" style="padding-top: 20px"
              >Закрыть</TypographyText
            >
          </div>
        </template>
        <template v-else>
          <div @click="handleClickBurgerMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </template>
      </label>
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

<style scoped>
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
  color: var(--select-text);
  font-weight: bold;
  transition:
    font-weight 200ms ease-in-out,
    color 200ms ease-in-out;
}

.active {
  color: #1f1f1f;
}

#burger-menu {
  display: none;
}

@media screen and (max-width: 850px) {
  #header {
    max-width: 100%;
    width: 100%;
    border: 2px solid blue;
  }

  #burger-menu {
    float: right;
    width: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background-color: #bb0591;
    border-radius: 5px;
    top: 10px;
  }

  .burder-menu__content {
    width: 220px !important;
    display: flex;
    flex-direction: column;
    background-color: #bb0591;
    gap: 20px;
    position: relative;
    top: 0px;
    border-radius: 10px;
    padding: 10px;
    padding-top: 40px;
    padding-bottom: 20px;
  }

  #burger-menu > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    align-items: center;
  }

  #burger-menu > div span {
    width: 20px;
    height: 2px;
    background-color: black;
  }

  #native-menu {
    display: none;
  }
}
</style>

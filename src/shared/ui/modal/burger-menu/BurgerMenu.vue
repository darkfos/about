<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'

import { useMainStore } from '@/shared/store'
import { TypographyText } from '@/shared/ui'

defineProps<{ headerLink: Array<{ href: string; title: string }> }>()

const mainStore = useMainStore()
const openBurgerMenu = ref<boolean>(false)
const paddingBurgerMenu = ref('10px')

const handleClickBurgerMenu = async () => {
  openBurgerMenu.value = !openBurgerMenu.value
}

watch(openBurgerMenu, (newValue) => {
  if (newValue) {
    paddingBurgerMenu.value = '0px'
  } else {
    paddingBurgerMenu.value = '10px'
  }
})
</script>

<template>
  <label id="burger-menu" :style="`padding: ${paddingBurgerMenu}`">
    <Transition>
      <template v-if="openBurgerMenu">
        <div
          class="burder-menu__content"
          :class="openBurgerMenu ? 'active' : null"
          ref="burderMenu"
        >
          <template v-for="(hLink, index) in headerLink" :key="index">
            <RouterLink
              :to="hLink.href"
              :class="mainStore.activePage === hLink.href ? 'active' : null"
              @click="handleClickBurgerMenu"
              >{{ hLink.title }}</RouterLink
            >
          </template>
          <TypographyText type="a" @click="handleClickBurgerMenu" style="padding-top: 20px"
            >Закрыть</TypographyText
          >
        </div>
      </template>
    </Transition>
    <template v-if="!openBurgerMenu">
      <div @click="handleClickBurgerMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </template>
  </label>
</template>

<style scoped>
#burger-menu {
  display: none;
}

.active {
  color: #bb0591;
}

@keyframes burger-animation {
  0% {
    transform: translateX(600px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes burger-animation-leave {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(600px);
  }
}

a {
  font-size: var(--h3-size);
}

.v-enter-from {
  transform: translateX(600px);
}

.v-enter-active {
  transition: all 0.5s ease;
  animation: burger-animation 0.5s forwards;
}

.v-leave-active {
  animation: burger-animation-leave 0.5s forwards;
}

.v-leave-to {
  transform: translateX(600px);
}

@media screen and (max-width: 850px) {
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
    width: 70% !important;
    height: 100vh !important;
    display: flex;
    right: 0;
    top: 0;
    flex-direction: column;
    background-color: var(--hamburger-bg-color);
    border: 1px solid var(--black-border-color);
    gap: 20px;
    position: fixed;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    padding: 10px;
    z-index: 20000000;
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
}
</style>

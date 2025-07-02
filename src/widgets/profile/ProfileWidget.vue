<script setup lang="ts">
import LinkElementWidget from '@/widgets/link/LinkElementWidget.vue'

const imageLinks: Array<string> = ['github.png', 'gitlab.png', 'telegram.png']
</script>

<template>
  <div class="profile">
    <img src="../../../public/img/darkfos_profile.png" alt="Иконка darkfos" />
    <div class="profile__desc">
      <p>darkfos</p>
      <h3>Full Stack dev.</h3>
    </div>
    <div class="profile__contacts">
      <div v-for="(el, index) in imageLinks" v-bind:key="index">
        <LinkElementWidget :img="el" />
      </div>
    </div>
    <div class="profile__btns">
      <a-button :size="5" type="primary">Обо мне</a-button>
      <a-button :size="20" type="primary">Блог</a-button>
    </div>
  </div>
</template>

<style scoped>
img {
  box-shadow: #ca0a9e 2px 1px 4px 4px;
  text-align: center;
  margin: auto;
  border: 2px solid var(--select-text);
  border-radius: 100%;
}
.profile {
  margin: auto;
  width: 40%;
  display: grid;
  grid-template-rows: auto;
  gap: 10px;
  justify-content: center;
}

.profile__btns {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 10px;
}

.profile__desc,
.profile__contacts {
  text-align: center;
}

.profile__contacts {
  display: flex;
  flex-direction: row;
  gap: 15px;
}

.profile__btns button {
  background-color: var(--main-btn-color);
  color: var(--main-text-color);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

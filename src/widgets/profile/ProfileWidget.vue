<script setup lang="ts">
import { useRouter } from 'vue-router'

import { LinkElementWidget, TypographyText, TransitionComponent } from '@/shared/ui'

const router = useRouter()

const goToAboutMeBlock = () => {
  document.getElementById('my-way')?.scrollIntoView({
    behavior: 'smooth',
  })
}
</script>

<template>
  <TransitionComponent>
    <template #component>
      <section class="profile" id="profile">
        <img id="profile__avatar" src="/img/darkfos_profile.png" alt="Иконка darkfos" />
        <img id="profile__bg-sakura" src="/img/sakura.png" alt="Задний фон сакура" />
        <div class="profile__desc">
          <TypographyText type="p">darkfos</TypographyText>
          <TypographyText type="p" style="margin: 0; padding: 0">Full Stack dev.</TypographyText>
        </div>
        <div class="profile__contacts">
          <LinkElementWidget
            :img="'github.png'"
            :redirect="'https://github.com/darkfos'"
            :is-png="true"
            :alt="'github.png'"
          />
          <LinkElementWidget
            :img="'gitlab.png'"
            :redirect="'https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1'"
            :is-png="true"
            :alt="'gitlab.png'"
          />
          <LinkElementWidget
            :img="'telegram.png'"
            :redirect="'https://t.me/DarkFos99'"
            :is-png="true"
            :alt="'telegram.png'"
          />
        </div>
        <div class="profile__btns">
          <a-button :size="20" type="primary" :onclick="goToAboutMeBlock">Обо мне</a-button>
          <a-button :size="20" type="primary" :onclick="() => router.push('/blogs')">Блог</a-button>
        </div>
      </section>
    </template>
  </TransitionComponent>
</template>

<style scoped>
#profile__avatar {
  box-shadow: #ca0a9e 2px 1px 4px 4px;
  text-align: center;
  margin: auto;
  border: 2px solid var(--select-text);
  border-radius: 100%;
}

#profile__bg-sakura {
  position: absolute;
  z-index: -1;
  top: -450px;
  left: -100px;
  transform: scaleX(-1);
}

#profile > #profile__avatar {
  animation: breathing-animation 1s linear infinite alternate;
}

.profile {
  margin: auto;
  width: 40%;
  display: grid;
  grid-template-rows: auto;
  gap: 10px;
  justify-content: center;
  transition: all 0.1s ease-in-out 250ms;
  animation: show-object 1s linear;
  padding-bottom: 200px;
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
  flex-wrap: wrap;
  justify-content: center;
}

.profile__btns button {
  background-color: var(--main-btn-color);
  color: var(--main-text-color);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16pt;
}

@media screen and (max-width: 300px) {
  .profile__btns {
    grid-template-columns: 1fr;
  }
}
</style>

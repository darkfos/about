<script setup lang="ts">
import { TitleText, HorizontalCard } from '@/shared/ui'
</script>

<template>
  <section class="technology">
    <div class="technology__body">
      <TitleText title="Технологии" align="left" :type-title="'h2'" />
      <div>
        <TitleText align="left" title="Список используемых мною технологий" type-title="h4" />
        <div class="my-technology-list">
          <HorizontalCard
            title-text="Backend"
            title-icon="/img/backend-icon.png"
            title-icon-alt="Иконка бекенда"
            description-text="В качестве основных инструментов применяю Python, NodeJS.
            Из фреемворков активно использую FastAPI, Django, Express, SQLAlchemy, Strapi."
          />
          <HorizontalCard
            title-text="Frontent"
            title-icon="/img/backend-icon.png"
            title-icon-alt="Иконка бекенда"
            description-text="В качестве основных инструментов применяю Python, NodeJS.
            Из фреемворков активно использую FastAPI, Django, Express, SQLAlchemy, Strapi."
          />
          <HorizontalCard
            title-text="Other"
            title-icon="/img/backend-icon.png"
            title-icon-alt="Иконка бекенда"
            description-text="В качестве основных инструментов применяю Python, NodeJS.
            Из фреемворков активно использую FastAPI, Django, Express, SQLAlchemy, Strapi."
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.technology {
  width: 100vw;
  margin: auto;
}

.technology__body {
  width: 80%;
  color: var(--main-text-color);
  margin-top: 40px;
  word-break: break-all;
}

h3 {
  margin-top: 40px;
  margin-bottom: 40px;
}

.my-technology-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: column;
  flex-wrap: wrap;
  column-gap: 30px;
}

.my-technology-list > div {
  flex: 1;
}

@media screen and (max-width: 1100px) {
  .my-technology-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 30px;
  }
}
</style>

<script setup lang="ts">
import {
  BackendCategoryIcon,
  FrontendCategoryIcon,
  OtherCategoryIcon,
  TitleText,
  HorizontalCard,
  TypographyText,
  TransitionComponent,
} from '@/shared/ui'
</script>

<template>
  <TransitionComponent>
    <template #component>
      <section class="technology">
        <div class="technology__body">
          <TitleText title="Технологии" align="left" :type-title="'h2'" />
          <div>
            <TitleText align="left" title="Список используемых мною технологий" type-title="h4" />
            <div class="my-technology-list">
              <HorizontalCard title-text="Backend" title-icon-alt="Иконка бекенда">
                <template #icon>
                  <BackendCategoryIcon />
                </template>
                <template #description>
                  <TypographyText type="p">
                    В качестве основных инструментов применяю
                    <TypographyText type="span" id="select-text">Python</TypographyText>,
                    <TypographyText type="span" id="select-text">NodeJS</TypographyText>. Из
                    фреемворков активно использую
                    <TypographyText type="span" id="select-text">FastAPI</TypographyText>,
                    <TypographyText type="span" id="select-text">Django</TypographyText>,
                    <TypographyText type="span" id="select-text">Express</TypographyText>,
                    <TypographyText type="span" id="select-text">SQLAlchemy</TypographyText>,
                    <TypographyText type="span" id="select-text">Strapi</TypographyText>.
                  </TypographyText>
                </template>
              </HorizontalCard>
              <HorizontalCard title-text="Frontend" title-icon-alt="Иконка бекенда">
                <template #icon>
                  <FrontendCategoryIcon />
                </template>
                <template #description>
                  <TypographyText type="p">
                    Для клиентской части я активно использую следующие инструменты:
                    <TypographyText type="span" id="select-text">JS/TS</TypographyText>,
                    <TypographyText type="span" id="select-text">HTML/CSS/SASS</TypographyText>,
                    <TypographyText type="span" id="select-text">React</TypographyText>,
                    <TypographyText type="span" id="select-text">Next</TypographyText>
                    <TypographyText type="span" id="select-text">Vue</TypographyText>,
                    <TypographyText type="span" id="select-text">Nuxt</TypographyText>,
                    <TypographyText type="span" id="select-text">aiogram</TypographyText>,
                    <TypographyText type="span" id="select-text">Atnd/tailwind</TypographyText>,
                    <TypographyText type="span" id="select-text">Vite/webpack</TypographyText>,
                    <TypographyText type="span" id="select-text">Pinia/Zustand/RTK</TypographyText>.
                  </TypographyText>
                </template>
              </HorizontalCard>
              <HorizontalCard title-text="Other" title-icon-alt="Иконка бекенда">
                <template #icon>
                  <OtherCategoryIcon />
                </template>
                <template #description>
                  <TypographyText type="p">
                    Сторонние инструменты которые я часто использую:
                    <TypographyText type="span" id="select-text">RabbitMQ</TypographyText>,
                    <TypographyText type="span" id="select-text">PostgreSQL</TypographyText>,
                    <TypographyText type="span" id="select-text">MongoDB</TypographyText>,
                    <TypographyText type="span" id="select-text">Redis</TypographyText>,
                    <TypographyText type="span" id="select-text">Nginx</TypographyText>,
                    <TypographyText type="span" id="select-text"
                      >Docker/docker-compose</TypographyText
                    >,
                    <TypographyText type="span" id="select-text">Celery</TypographyText>
                  </TypographyText>
                </template>
              </HorizontalCard>
            </div>
          </div>
        </div>
      </section>
    </template>
  </TransitionComponent>
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

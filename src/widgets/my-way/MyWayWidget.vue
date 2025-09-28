<script setup lang="ts">
import { ref, h, type VNode } from 'vue'
import type { Ref } from 'vue'
import { FireOutlined } from '@ant-design/icons-vue'

import { TitleText, TypographyText, BackgroundLayout, TransitionComponent } from '@/shared/ui'

const current: Ref<number> = ref(0)
const items: Ref<Array<{ key: string; title: string; text?: string; icon?: VNode }>> = ref([
  {
    key: 'Начало',
    title: 'Начало пути',
    text: 'В начале 2-го курса, а именно осенью, 20 октября я купил свою 1-ую книгу по программированию и начал осознанно изучать новое направление',
    icon: h(FireOutlined),
  },
  {
    key: 'Углубление в технологиях',
    title: 'Углубленное изучение',
    text: 'Начиная с зимы 2023 года я стал все больше и больше погружаться в мир технологий, мною было прочитано много технических книг, это и по ЯП, и по БД, и про смежные технологии, однако затрагивалась экосистема вокруг ЯП Python',
    icon: h(FireOutlined),
  },
  {
    key: 'Переход в сферу front-end',
    title: 'Переход в front-end',
    text: 'В начале 2025 года, а именно 27 января состоялся мой переход во Front-end разработку, до этого это направление я только немного пробывал на ощупь',
    icon: h(FireOutlined),
  },
  {
    key: 'Текущий момент',
    title: 'Сегодня',
    text: 'На данный момент я работаю в компании WorkSolutions, продолжаю совершенствовать свои навыки, учиться и развиваться.',
    icon: h(FireOutlined),
  },
])
</script>

<template>
  <TransitionComponent>
    <template #component>
      <section class="my-way" id="my-way">
        <TitleText title="Мой путь" type-title="h1" align="center" :close-figure="true" />
        <div class="my-way__body">
          <a-steps v-model:current="current" :items="items" class="steps" type="navigation" />
          <BackgroundLayout>
            <TypographyText type="p">
              {{ items[current].text }}
            </TypographyText>
          </BackgroundLayout>
        </div>
      </section>
    </template>
  </TransitionComponent>
</template>

<style>
.my-way {
  text-align: center;
}

.steps {
  width: 90%;
  margin: auto;
  gap: 50px;
  flex-wrap: wrap;
}

.my-way__body {
  display: grid;
  grid-template-rows: auto;
  gap: 90px;
  padding-bottom: 80px;
}

.ant-steps-item::before {
  background-color: #ca0a9e !important;
  color: #ca0a9e !important;
}

.ant-steps-item-icon {
  padding: 5px;
  border-radius: 7px !important;
  background-color: var(--main-btn-color) !important;
  border: none !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.ant-steps-item-active .ant-steps-icon {
  color: var(--white-bg-color) !important;
}

.ant-steps-item-finish .ant-steps-icon {
  color: var(--link-element-bg-color) !important;
}

.ant-steps-item-title {
  color: var(--main-text-color) !important;
}
</style>

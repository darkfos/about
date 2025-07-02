<script setup lang="ts">
import { ref, h } from 'vue'
import type { Ref } from 'vue'
import { FireOutlined } from '@ant-design/icons-vue'

const current: Ref<number> = ref(0)
const items: Ref<Array<{ key: string; title: string }>> = ref([
  {
    key: 'Начало',
    title: 'Начало пути',
    icon: h(FireOutlined),
  },
  {
    key: 'Углубление в технологиях',
    title: 'Начал углубляться во многих направлениях...',
    icon: h(FireOutlined),
  },
  {
    key: 'Переход в сферу front-end',
    title: 'Перешл в сферу front-end разработки',
    icon: h(FireOutlined),
  },
  {
    key: 'Текущий момент',
    title: 'На данный момент я работаю',
    icon: h(FireOutlined),
  },
])
</script>

<template>
  <section class="my-way">
    <h2>Мой путь</h2>
    <div class="my-way__body">
      <a-steps v-model:current="current" :items="items" class="steps" type="navigation" />
      <div>
        {{ items[current].title }}
      </div>
    </div>
  </section>
</template>

<style>
h2::before {
  position: relative;
  display: inline-block;
  z-index: -2;
  left: 20px;
  top: 5px;
  content: '';
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ca0a9e;
}

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
  margin-top: 80px;
}

.ant-steps-item::before {
  background-color: #ca0a9e !important;
  color: #ca0a9e !important;
}

.ant-steps-item-icon {
  padding: 5px;
  border-radius: 7px !important;
  background-color: #ca0a9e !important;
  border: none !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.ant-steps-item-active .ant-steps-icon {
  color: white !important;
}

.ant-steps-item-finish .ant-steps-icon {
  color: var(--link-element-bg-color) !important;
}

.ant-steps-item-title {
  color: var(--main-text-color) !important;
}
</style>

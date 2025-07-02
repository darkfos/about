<script setup lang="ts">
import LinkElementWidget from '@/widgets/link/LinkElementWidget.vue'

const backendTechnology: Array<Array<string>> = [
  ['python.png', 'nodejs.png'],
  ['django.png', 'fastapi.png', 'express.png'],
  ['postgres.png', 'mysql.png', 'sqlite.png'],
  ['mongodb.png', 'redis.png'],
  ['rabbitmq.png'],
]

const frontendTechnology: Array<Array<string>> = [
  ['javascript.png', 'typescript.png'],
  ['react.png', 'vue.png'],
  ['html.png', 'css.png', 'scss.png'],
  ['nuxt.png', 'next.png'],
]

const otherTechnologies: Array<Array<string>> = [['docker.png'], ['nginx.png']]
</script>

<template>
  <section class="technology">
    <div class="technology__body">
      <h2>Технологии</h2>
      <div>
        <h3>Список используемых мною технологий</h3>
        <div class="my-technology-list">
          <div>
            <h4>Backend</h4>
            <div v-for="(el, index) in backendTechnology" class="tech" :key="index">
              <div v-for="item in el" v-bind:key="item">
                <LinkElementWidget :img="item" :title="item" />
              </div>
            </div>
          </div>
          <div>
            <h4>Frontend</h4>
            <div v-for="(el, index) in frontendTechnology" class="tech" :key="index">
              <div v-for="item in el" :key="item">
                <LinkElementWidget :img="item" :title="item" />
              </div>
            </div>
          </div>
          <div>
            <h4>Other</h4>
            <div v-for="(el, index) in otherTechnologies" class="tech" :key="index">
              <div v-for="item in el" :key="item">
                <LinkElementWidget :img="item" :title="item" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
h2 {
  position: relative;
  z-index: 5;
}

h2::before {
  content: '';
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: var(--main-btn-color);
  border-radius: 50%;
  position: absolute;
  z-index: -3;
  left: -10px;
  bottom: 3px;
}

.technology {
  background-color: var(--text-selected);
  border-radius: 100px 100px 100px 100px;
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding-bottom: 60px;
}

.technology__body {
  width: 80%;
  margin: auto;
  color: var(--link-element-bg-color);
  margin-top: 40px;
}

h3 {
  margin-top: 40px;
  margin-bottom: 40px;
}

.my-technology-list {
  display: flex;
  flex-direction: row;
  gap: 40px;
}

.my-technology-list > div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
}

.tech {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>

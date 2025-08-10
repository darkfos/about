<script setup lang="ts">
import { LinkElementWidget, VerticalCard } from '@/shared/ui'

import { useMainStore } from '@/shared/store'

const mainStore = useMainStore()
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
            <VerticalCard>
              <div
                v-for="(groupEl, idGroup) in mainStore.getTechnologies('backend')"
                :key="idGroup + 10"
                class="groupIcons"
              >
                <template v-for="(icon, idIcon) in groupEl" :key="idIcon + idGroup + 1">
                  <LinkElementWidget :img="icon" />
                </template>
              </div>
            </VerticalCard>
          </div>
          <div>
            <h4>Frontend</h4>
            <VerticalCard>
              <div
                v-for="(groupEl, idGroup) in mainStore.getTechnologies('frontend')"
                :key="idGroup + 20"
                class="groupIcons"
              >
                <template v-for="(icon, idIcon) in groupEl" :key="idGroup + idIcon + 2">
                  <LinkElementWidget :img="icon" />
                </template>
              </div>
            </VerticalCard>
          </div>
          <div>
            <h4>Other</h4>
            <VerticalCard>
              <div
                v-for="(groupEl, idGroup) in mainStore.getTechnologies('other')"
                :key="idGroup + 30"
                class="groupIcons"
              >
                <template v-for="(icon, idIcon) in groupEl" :key="idGroup + idIcon + 3">
                  <LinkElementWidget :img="icon" />
                </template>
              </div>
            </VerticalCard>
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
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 40px;
}

.groupIcons {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>

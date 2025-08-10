<script setup lang="ts">
import { LinkElementWidget, VerticalCard, TitleText } from '@/shared/ui'

import { useMainStore } from '@/shared/store'

const mainStore = useMainStore()
</script>

<template>
  <section class="technology">
    <div class="technology__body">
      <TitleText title="Технологии" align="left" type-title="h1" />
      <div>
        <TitleText align="left" title="Список используемых мною технологий" type-title="h4" />
        <div class="my-technology-list">
          <div>
            <TitleText align="left" title="Backend" type-title="h5" />
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
            <TitleText align="left" title="Frontend" type-title="h5" />
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
            <TitleText align="left" title="Other" type-title="h5" />
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
.technology {
  background-color: #fad4bc;
  position: relative;
  height: 100vh;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding-bottom: 0px;
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

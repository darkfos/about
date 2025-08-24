<script setup lang="ts">
import { LinkElementWidget, VerticalCard, TitleText } from '@/shared/ui'

import { useMainStore } from '@/shared/store'

const mainStore = useMainStore()
</script>

<template>
  <section class="technology">
    <div class="technology__body">
      <TitleText title="Технологии" align="left" :type-title="'h2'" />
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
  background: url('/img/bg-2.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: table-cell;
  width: 100vw;
  height: 100vh;
  margin: auto;
}

.technology__body {
  width: 80%;
  margin: auto;
  color: var(--link-element-bg-color);
  margin-top: 40px;
  word-break: break-all;
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

.my-technology-list > div {
  flex: 1;
}

.groupIcons {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>

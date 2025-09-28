<script setup lang="ts">
import { defineProps, inject, ref } from 'vue'

import { componentMap, type ComponentsType } from '@/widgets/components-fabric'

import type { Theme } from '@/entities/theme'

import { SectionStrapiContent } from '@/shared/ui'
import type { Author, Components } from '@/shared/types'
import { ResizeScreenHook, SCREEN_WIDTH_KEY } from '@/shared/utils'

const screenWidth = inject(SCREEN_WIDTH_KEY, ref(window.innerWidth))
const props = defineProps<{
  sections: Array<Components>
  themes: Array<Theme>
  author: Author
  views: number
}>()
</script>

<template>
  <SectionStrapiContent>
    <template #content>
      <template v-for="section in props.sections" :key="section.documentId">
        <template v-if="screenWidth > 1400">
          <component
            :is="
              componentMap[
                (section.__component.split('.')[1] as ComponentsType) ?? componentMap['']
              ]
            "
            v-bind="{ ...section, themes: props.themes, author: props.author, views: props.views }"
          />
        </template>
        <template v-else>
          <template v-if="!section.__component.includes('link-article')">
            <component
              :is="
                componentMap[
                  (section.__component.split('.')[1] as ComponentsType) ?? componentMap['']
                ]
              "
              v-bind="{
                ...section,
                themes: props.themes,
                author: props.author,
                views: props.views,
              }"
            />
          </template>
        </template>
      </template>
    </template>
  </SectionStrapiContent>
  <div class="articles-additional" v-if="screenWidth <= 1400">
    <h2>Читать также</h2>
    <div class="articles-additional__content">
      <template v-for="section in props.sections">
        <template v-if="section.__component.includes('link-article')">
          <component
            :is="
              componentMap[
                (section.__component.split('.')[1] as ComponentsType) ?? componentMap['']
              ]
            "
            class="link-article__mobile"
            :key="section.documentId"
            v-bind="{ ...section, themes: props.themes, author: props.author, views: props.views }"
          />
        </template>
      </template>
    </div>
  </div>
  <ResizeScreenHook />
</template>

<style scoped>
.articles-additional {
  width: 90%;
  margin: auto;
  padding: 0px 0;
}

.articles-additional__content {
  padding: 10px 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: left;
  column-gap: 35px;
  row-gap: 65px;
  align-content: center;
}

.link-article__mobile {
  position: static;
  padding-bottom: 0 !important;
}
</style>

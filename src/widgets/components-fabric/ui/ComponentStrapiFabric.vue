<script setup lang="ts">
import { defineProps, inject, ref, computed } from 'vue'

import { componentMap, type ComponentsType } from '@/widgets/components-fabric'

import type { Theme } from '@/entities/theme'

import { SectionStrapiContent } from '@/shared/ui'
import type { Author, Components } from '@/shared/types'
import { ResizeScreenHook, SCREEN_WIDTH_KEY } from '@/shared/utils'
import NotFound from '@/shared/ui/notFound/NotFound.vue'

const screenWidth = inject(SCREEN_WIDTH_KEY, ref(window.innerWidth))
const props = defineProps<{
  sections: Array<Components>
  themes: Array<Theme>
  author: Author
  views: number
  notFound: boolean
}>()

const articleLink = computed(() =>
  props.sections.filter((section) => section.__component.includes('link-article')),
)
</script>

<template>
  <template v-if="notFound">
    <NotFound />
  </template>
  <template v-else>
    <template v-if="sections?.length < 1">
      <NotFound />
    </template>
    <template v-else>
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
                v-bind="{
                  ...section,
                  themes: props.themes,
                  author: props.author,
                  views: props.views,
                }"
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
      <div class="articles-additional" v-if="screenWidth <= 1400 && articleLink.length > 0">
        <h2>Читать также</h2>
        <div class="articles-additional__content">
          <template v-for="section in articleLink" :key="section.documentId">
            <component
              :is="
                componentMap[
                  (section.__component.split('.')[1] as ComponentsType) ?? componentMap['']
                ]
              "
              class="link-article__mobile"
              v-bind="{
                ...section,
                themes: props.themes,
                author: props.author,
                views: props.views,
              }"
            />
          </template>
        </div>
      </div>
    </template>
  </template>
  <ResizeScreenHook />
</template>

<style scoped>
.articles-additional {
  width: 90%;
  margin: auto;
  padding: 0 0;
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

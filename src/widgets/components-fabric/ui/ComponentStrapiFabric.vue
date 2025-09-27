<script setup lang="ts">
import { defineProps } from 'vue'

import { componentMap, type ComponentsType } from '@/widgets/components-fabric'

import { SectionStrapiContent } from '@/shared/ui'
import type { Author, Components } from '@/shared/types'
import type { Theme } from '@/entities/theme'

const props = defineProps<{ sections: Array<Components>; themes: Array<Theme>; author: Author }>()
</script>

<template>
  <SectionStrapiContent>
    <template #content>
      <template v-for="section in props.sections" :key="section.documentId">
        <component
          :is="
            componentMap[(section.__component.split('.')[1] as ComponentsType) ?? componentMap['']]
          "
          v-bind="{ ...section, themes: props.themes, author: props.author }"
        />
      </template>
    </template>
  </SectionStrapiContent>
</template>

<style scoped></style>

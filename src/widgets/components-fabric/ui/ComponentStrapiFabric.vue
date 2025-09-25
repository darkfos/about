<script setup lang="ts">
import { defineProps } from 'vue'

import { componentMap, type ComponentsType } from '@/widgets/components-fabric'

import { SectionStrapiContent } from '@/shared/ui'
import type { Components } from '@/shared/types'

const props = defineProps<Array<Components>>()
</script>

<template>
  <SectionStrapiContent>
    <template #content>
      <template v-for="section in props" :key="section.documentId">
        <component
          :is="
            componentMap[(section.__component.split('.')[1] as ComponentsType) ?? componentMap['']]
          "
          v-bind:="props"
        />
      </template>
    </template>
  </SectionStrapiContent>
</template>

<style scoped></style>

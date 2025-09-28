<script setup lang="ts">
import { inject, ref, onUnmounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'

import { useMainStore } from '@/shared/store'
import { SEARCH_TITLE_SEARCH_KEY } from '@/shared/utils'
import { TypographyText } from '@/shared/ui'

const formRef = inject(SEARCH_TITLE_SEARCH_KEY, ref())
const mainStore = useMainStore()
const route = useRoute()

const options = ref(mainStore.getLastArticles())
const pageType = computed(() => route.path.split('/')[1])

const onChange = (value: string) => {
  formRef.value = value
}

onUnmounted(() => {
  formRef.value = ''
})

watch(() => mainStore.lastArticles, () => {
  options.value = mainStore.getLastArticles()
})
</script>
<template>
  <form class="form">
    <div class="input-wrapper">
      <a-auto-complete
        placeholder="Введите текст"
        v-model:value="formRef"
        :options="options"
        @search="onChange"
        @select="onChange"
        style="color: white"
      >
        <template #option="{ value, id }">
          <div class="option-label">
            <p>{{ value }}</p>
            <TypographyText type="a" :href="pageType + `/${id}`" id="router-link_default">Перейти</TypographyText>
          </div>
        </template>
      </a-auto-complete>

    </div>
  </form>
</template>

<style>
.form {
  margin: auto;
  width: 100%;
}

.input-wrapper {
  position: relative;
  z-index: 1;
}

.option-label {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  color: var(--main-text-color);
}

.option-label p, .option-label a{
  font-size: 12pt !important;
}
</style>

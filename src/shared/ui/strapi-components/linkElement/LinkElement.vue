<script setup lang="ts">
import { defineProps, inject, ref } from 'vue'

import { type LinkBlock } from '@/shared/types'
import { KEY_GENERAL_SHORT_BACKEND_URL } from '@/shared/utils'

const props = defineProps<LinkBlock>()
const imgUrl = inject(KEY_GENERAL_SHORT_BACKEND_URL, ref<string>(''))

const handleClick = () => {
  window.location = props.href as string & Location
}
</script>

<template>
  <div class="link-block">
    <template v-if="props.icon">
      <a-button
        type="primary"
        shape="round"
        class="link-block__content"
        id="purple-btn"
        @click="handleClick"
      >
        <img :src="imgUrl + props.icon.url" :alt="props.alt" width="40" height="40" />
        <p v-if="props.text">{{ text }}</p>
      </a-button>
    </template>
    <template v-else>
      <a-button
        shape="default"
        type="primary"
        class="link-block__content"
        id="purple-btn"
        @click="handleClick"
      >
        <a :href="props.href">{{ props.text }}</a>
      </a-button>
    </template>
  </div>
</template>

<style scoped>
img {
  width: 20px;
  height: 20px;
}

.link-block {
  margin: 50px 0;
}

.link-block__content {
  flex-direction: row;
  display: flex;
  justify-items: center;
  align-items: center;
  align-content: center;
  column-gap: 5px;
  text-align: center;
}

a {
  transition: all 0.5s ease-in-out;
}

a:hover {
  color: var(--main-text-color);
}
</style>

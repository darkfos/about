<script setup lang="ts">
import { defineProps } from 'vue'

import { type LinkBlock } from '@/shared/types'

const props = defineProps<LinkBlock>()
const imgUrl = import.meta.env.VITE_BACKEND_SHORT_URL + (props?.icon?.path ?? '')
</script>

<template>
  <div class="link-block">
    <template v-if="props.icon">
      <a-button type="primary" shape="round" class="link-block__content" id="purple-btn">
        <img :src="imgUrl" :alt="props.alt" width="40" height="40" />
        <p v-if="props.text">{{ text }}</p>
      </a-button>
    </template>
    <template v-else>
      <a-button shape="default" type="primary" class="link-block__content" id="purple-btn">
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
  row-gap: 5px;
  text-align: center;
}

a {
  transition: all 0.5s ease-in-out;
}

a:hover {
  color: var(--main-text-color);
}
</style>

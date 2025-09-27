<script setup lang="ts">
import { inject, ref } from 'vue'
import { Input } from 'ant-design-vue'

import { SEARCH_TITLE_SEARCH_KEY } from '@/shared/utils'

const formRef = inject(SEARCH_TITLE_SEARCH_KEY, ref())
</script>
<template>
  <form class="form">
    <div class="input-wrapper">
      <Input.Search
        type="text"
        size="large"
        variant="outlined"
        v-model:value="formRef"
        @search="() => {}"
      >
      </Input.Search>
    </div>
  </form>
</template>

<style scoped>
.form {
  margin: auto;
  width: 100%;
}

.input-wrapper {
  position: relative;
  z-index: 1;
}
</style>

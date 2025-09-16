<script setup lang="ts">
import { ref, reactive, defineProps, defineExpose } from 'vue'

import type { FormContactProps } from '@/widgets/formContact'
import { TitleText } from '@/shared/ui'

const formRef = ref()
const userData = reactive({
  username: '',
  message: '',
})

const { submitFunc, submitText } = defineProps<FormContactProps>()

const rules = {
  username: [
    {
      required: true,
      message: 'Пожалуйста введите свое имя',
      trigger: 'blur',
    },
    { min: 3, message: 'Длина имени не должна быть менее 4 символов', trigger: 'blur' },
  ],
  message: [
    {
      required: true,
      message: 'Пожалуйста введите ваше обращение',
      trigger: 'blur',
    },
  ],
}

defineExpose({ userData })
</script>

<template>
  <a-form ref="formRef" :rules="rules" :model="userData" class="form-contact">
    <TitleText align="left" title="Оставить комментарий" type-title="h4" />
    <a-form-item name="username">
      <a-input size="large" v-model:value="userData.username" placeholder="darkfos82" />
    </a-form-item>
    <a-form-item name="message">
      <a-textarea size="large" v-model:value="userData.message" placeholder="Ваш текст" />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" @click="submitFunc">{{ submitText }}</a-button>
    </a-form-item>
  </a-form>
</template>

<style scoped>
.form-contact {
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--main-text-color);
  gap: 10px;
}

.form-contact textarea {
  max-height: 220px;
  min-height: 50px;
  height: 100px;
  resize: vertical;
}

.form-contact input,
textarea {
  color: var(--pink-text-color);
  background-color: var(--form-element-bg-color);
  border: 1px solid var(--black-border-color);
}

.form-contact input::placeholder,
textarea::placeholder {
  color: var(--pink-text-color);
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
import { message } from 'ant-design-vue'

import { FormContact } from '@/widgets/formContact'

import { type ReviewUserData, sendReview } from '@/entities/review'

import { BackgroundLayout } from '@/shared/ui'

const formData = ref<{
  formRef: { getFieldsValue: () => ReviewUserData; resetFields: () => void }
}>()
const [messageApi, contextHolder] = message.useMessage()

const handleSubmit = async () => {
  const userdata: ReviewUserData = formData.value?.formRef?.getFieldsValue() as ReviewUserData

  if (userdata?.username?.length <= 4 && userdata?.message?.length <= 1) {
    messageApi.error('Не удалось отправить отзыв')
    return
  }

  const req = await sendReview(userdata as ReviewUserData)

  formData.value?.formRef?.resetFields()

  if (req) {
    messageApi.info('Отзыв был успешно отправлен')
    return
  }

  messageApi.error('Не удалось отправить отзыв')
}
</script>

<template>
  <div class="send-user-contacts">
    <context-holder class="message" />
    <BackgroundLayout>
      <div class="send-user-contacts__content">
        <FormContact :submit-func="handleSubmit" submit-text="Отправить" ref="formData" />
        <img src="/img/contact.png" alt="Лого контакта" />
      </div>
    </BackgroundLayout>
  </div>
</template>

<style scoped>
.send-user-contacts {
  width: 65%;
  margin: auto;
}

.send-user-contacts__content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  gap: 40px;
}

.send-user-contacts__content section {
  width: 100%;
}

img {
  width: 70%;
}

@media screen and (max-width: 1150px) {
  img {
    display: none;
  }
}

@media screen and (max-width: 800px) {
  .send-user-contacts {
    width: 80vw;
  }
}
</style>

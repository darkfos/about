<script setup lang="ts">
import { BackgroundLayout } from '@/shared/ui'
import { FormContact } from '@/widgets/formContact'

const handleSubmit = () => {
  console.log(483982943)
}
</script>

<template>
  <div class="send-user-contacts">
    <BackgroundLayout>
      <div class="send-user-contacts__content">
        <FormContact :submit-func="handleSubmit" submit-text="Отправить" />
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

img {
  width: 70%;
}

@media screen and (max-width: 1150px) {
  img {
    display: none;
  }
}
</style>

<script setup lang="ts">
import { TypographyText } from '@/shared/ui'
</script>

<template>
  <article class="not-found">
    <div>
      <h1>Не удалось найти контент</h1>
      <hr />
      <TypographyText type="p">
        Возможна данная страница отсутсвует, попробуйте вернуться
        <TypographyText type="a" href="/" id="select-text" className="hover-link"
          >обратно</TypographyText
        >
      </TypographyText>
      <br />
      <br />
    </div>
    <div class="not-found__icon">
      4
      <img src="/img/moon.png" alt="Иконка крутящейся луны страницы 404" />
      4
    </div>
  </article>
</template>

<style scoped>
.not-found {
  margin: auto;
  margin-top: 50px;
  width: 80%;
  display: flex;
  flex-direction: row;
  gap: 80px;
  justify-content: center;
  align-items: center;
}

.not-found h1 {
  font-size: var(--h1-size);
}

.not-found__icon {
  display: flex;
  font-size: 200pt !important;
  align-items: center;
  font-weight: 800;
}

.not-found__icon img {
  animation: rotate-circle-animation 3.5s infinite ease-in-out;
  width: 250px;
  transition: all 0.4s ease-in-out;
}

@media screen and (max-width: 1200px) {
  .not-found {
    flex-direction: column-reverse;
    gap: 30px;
  }
}

@media screen and (max-width: 650px) {
  .not-found__icon {
    font-size: 52pt !important;
    gap: 10px;
  }

  .not-found__icon img {
    width: 180px;
  }
}

@media screen and (max-width: 310px) {
  .not-found__icon {
    font-size: 42pt !important;
  }

  .not-found__icon img {
    width: 140px;
  }
}
</style>

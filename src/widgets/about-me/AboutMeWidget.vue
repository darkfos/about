<script setup lang="ts">
import { LinkElementWidget, TitleText, TypographyText } from '@/shared/ui'
</script>

<template>
  <section class="about-me">
    <div>
      <img src="/img/about-me.png" alt="Фотография секции обо мне" />
    </div>
    <div>
      <TitleText title="Про меня" :type-title="'h2'" align="left" />
      <div>
        <TitleText
          align="left"
          title="Меня зовут Владимир"
          type-title="h5"
          style="display: flex; align-items: center; gap: 20px"
        >
          <span>
            <img src="/img/hand.png" width="33" height="33" />
          </span>
        </TitleText>
        <div>
          <TypographyText type="p">
            Я
            <TypographyText type="span" id="tech"> front-end </TypographyText>
            разработчик в компании
            <TypographyText type="span" id="additional-text">WorkSolutions</TypographyText>
            . Мне нравится разрабатывать удобные и красивые интерфейсы.
          </TypographyText>
          <TypographyText type="p">
            Обожаю процесс разработки, изучение нового, выполнение поставленных задач.
          </TypographyText>
          <TypographyText type="p">
            Увлекаюсь не только
            <TypographyText type="span" id="tech"> front-end </TypographyText>
            разработкой, но и
            <TypographyText type="span" id="tech"> back-end </TypographyText>
            К моим хобби также могу отнести
            <TypographyText type="span" id="tech"> историю </TypographyText>,
            <TypographyText type="span" id="tech"> географию </TypographyText>,
            <TypographyText type="span" id="tech"> политологию </TypographyText>,
            <TypographyText type="span"> аниме </TypographyText>
          </TypographyText>
          <TypographyText type="p">
            На данный момент активно изучаю направление разработки в сфере веба. Если есть
            какие-либо вопросы, их можно мне написать в
            <TypographyText type="a" href="#" id="tech">Telegram</TypographyText>
          </TypographyText>
        </div>
        <div>
          <LinkElementWidget
            img="telegram.png"
            title="Телеграм"
            is-png="true"
            redirect="https://t.me/DarkFos99"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-me {
  display: grid;
  grid-template-columns: auto auto;
  gap: 90px;
  justify-content: center;
}

h2 {
  position: relative;
}

h2::before {
  content: '';
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: var(--main-btn-color);
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  left: -10px;
  bottom: 3px;
}

#tech {
  color: var(--text-selected);
}

#additional-text {
  color: var(--addtitional-text);
}
</style>

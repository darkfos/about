<script setup lang="ts">
import { LinkElementWidget } from '../../shared/ui/link'
</script>

<template>
  <section class="about-me">
    <div>
      <img src="../../../public/img/about-me.png" alt="Фотография секции обо мне" />
    </div>
    <div>
      <h2>Про меня</h2>
      <div>
        <h4 style="display: flex; align-items: center; gap: 20px">
          Меня зовут Владимир
          <span>
            <img src="../../../public/icons/hand.png" width="33" height="33" />
          </span>
        </h4>
        <div>
          <p>
            Я <span id="tech">front-end</span> разработчик в компании
            <span id="additional-text">WorkSolutions</span>. Мне нравится разрабатывать удобные и
            красивые интерфейсы.
          </p>
          <p>Обожаю процесс разработки, изучение нового, выполнение поставленных задач.</p>
          <p>
            Увлекаюсь не только <span id="tech">front-end</span> разработкой, но и
            <span id="tech">back-end</span> К моим хобби также могу отнести
            <span id="tech">историю</span>, <span id="tech">географию</span>,
            <span id="tech">политологию</span>, <span id="tech">аниме</span>.
          </p>
          <p>
            На данный момент активно изучаю направление разработки в сфере веба. Если есть
            какие-либо вопросы, их можно мне написать в <span id="tech">telegram</span>
          </p>
        </div>
        <div>
          <LinkElementWidget img="telegram.png" title="Телеграм" />
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

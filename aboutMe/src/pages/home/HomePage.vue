<script setup lang="ts">
  import {useMainStore} from "@/shared/store";

  const store = useMainStore();

  store.addPagesLink(
    [
      {
        href: "about",
        title: "Обо мне"
      },
      {
        href: "hobby",
        title: "Хобби"
      },
      {
        href: "road",
        title: "Мой путь"
      },
      {
        href: "achievements",
        title: "Достижения"
      },
      {
        href: "aim",
        title: "Цель"
      },
      {
        href: "contacts",
        title: "Контакты"
      }
    ]
  )
</script>

<template>
  <div class="page__data">
    <h1 class="h-page">Главная</h1>
    <section id="about">
      <h2 class="h-page">Обо мне</h2>
      <div class="bodyPage">
        <p>Привет 👋, меня зовут Вова, я увлекаюсь как <span class="technology">бэкенд</span>, так и <span class="technology">фронтенд</span> разработкой, а также разработкой <span class="technology">ботов</span>, <span class="technology">парсеров</span>.</p>
      </div>
      <button class="btn">Подробнее</button>
    </section>
    <section id="hobby">
      <h2 class="h-page">
        Хобби
      </h2>
      <p>
        Как и у многих людей у меня есть свои хобби 😉
      </p>
      <ul>
        <li>История</li>
        <li>География</li>
        <li>Программирование</li>
        <li>Музыка</li>
      </ul>
    </section>
    <section id="road">
      <h2 class="h-page">
        Мой путь
      </h2>
      <blockquote class="blockquote">
        <span class="tech">«</span>Знание — это не свет, а медленный яд. Сначала оно обжигает, как откровение, потом гложет, как сомнение, и наконец разлагает всё, во что ты верил, оставляя лишь горький осадок — понимание, что истина не освобождает, а лишь приковывает тебя к тяжести собственного сознания.<span class="tech">»</span>
      </blockquote>
      <div class="timeline">
        <a-timeline mode="alternate">
          <a-timeline-item color="white">Начало моего пути 2022-09-22</a-timeline-item>
          <a-timeline-item color="purple">
            Первая мною прочитанная книга и выбранный стек технологий 2022-10-05
          </a-timeline-item>
          <a-timeline-item>
            <template #dot><ClockCircleOutlined style="font-size: 16px" /></template>
            До конца года я только и читал литературу, проходил курсы, немного изучал и другие ЯП, такие как <span class="tech">Java</span>, <span class="tech">C++</span>
          </a-timeline-item>
          <a-timeline-item color="white">Расширение стека на <span class="tech">aiogram</span>, начал писать ботов 2024</a-timeline-item>
          <a-timeline-item class="purple">Расширение стека на <span class="tech">FastAPI</span>, <span class="tech">Pydantic</span>, <span class="tech">SQLAlchemy</span>, <span class="tech">alembic</span>, переключился на бекенд разработку 2024</a-timeline-item>
          <a-timeline-item>
            <template #dot><ClockCircleOutlined style="font-size: 16px" /></template>
            Продолжал усердно усовершенствовать свои навыки, к ним подключилась работа с <span class="tech">PostgreSQL</span>, <span class="tech">Redis</span>, <span class="tech">MongoDB</span>, <span class="tech">SQLite</span>, <span class="tech">SQLite</span>, <span class="tech">RabbitMQ</span>, <span class="tech">FastStream</span>,
            <span class="tech">javascript/html/css</span>, <span class="tech">Flet</span>
          </a-timeline-item>
          <a-timeline-item color="white">
            Дополнил стек: <span class="tech">JavaScript</span>, <span class="tech">TypeScript</span>, <span class="tech">SCSS</span>, <span class="tech">React</span>, <span class="tech">Vue</span>, <span class="tech">Nuxt</span>, <span class="tech">Next</span>, <span class="tech">Pinia</span>, <span class="tech">Redux</span>, <span class="tech">RTK</span>, <span class="tech">Strapi</span> 2025
          </a-timeline-item>
        </a-timeline>
        <p style="text-decoration: underline; text-underline-offset: 7px">Мой путь в общем ещё продолжается, знания ждут!</p>
      </div>
    </section>
    <section id="achievements">
      <h2 class="h-page">Достижения</h2>
      <p>По правде говоря достижений в моей жизни мало, я мало чем-либо в себе горжусь, тем не менее есть одна для меня очень <span class="tech">важная победа.</span></p>
      <div class="carousel-hack">
        <a-carousel arrows dots-class="slick-dots slick-thumb" autoplay>
          <div>
            <img src="/hack-1.jpg" alt="Первая фотография Хакатон 2024"/>
          </div>
          <div>
            <img src="/hack-2.jpg" alt="Вторая фотография Хакатон 2024"/>
          </div>
          <div>
            <img src="/hack-3.jpg" alt="Третья фотография Хакатон 2024"/>
          </div>
          <div>
            <img src="/hack-4.jpg" alt="Четвертая фотография Хакатон 2024"/>
          </div>
        </a-carousel>
        <div class="carousel-hack__desc">
          <h2 class="tech">Победа</h2>
          <p>Хакатон был достаточно лайтовым, но я как и раньше вылаживался наполную, был удивлен что мы победили в номинации <span class="tech">Лучшее WEB-приложение</span></p>
          <p>Тем не менее я рад, что <span class="tech">мы вместе с командой</span> смогли это сделать, я безумно им благодарен. Чтобы выйграть хоть и такое простое состязание я участвовал 12 раз, так и не реализовывая конечный продукт.</p>
        </div>
      </div>
    </section>
    <section id="aim">
      <h2 class="h-page">Цель</h2>
      <p>
        Моей целью является развитие, усовершенствование имеющихся и приобретение новых навыков. Помогать людям, стараться понять мир.
        С каждым годом я все больше и больше теряю смысл всего, недопонимание со стороны близких ещё больше меня закрывает в себе.
        Все же программирование держит меня на плову, это единственное, что меня держит, интересует, мотивирует.
      </p>
      <p>Я планирую активно вести свой блог, эту страничку, здесь будет как информация о моих проектах, каких-либо новостях
      так и просто мои мысли.</p>
    </section>
    <section id="contacts">
      <h2 class="h-page">Мои контакты</h2>
      <ul>
        <li>
          <img src="/github.png" alt="Логотип GitHub"/>
        </li>
        <li>
          <img src="/telegram.png" alt="Логотип Telegram"/>
        </li>
      </ul>
    </section>
  </div>
</template>

<style>

  section p {
    width: 80%;
    text-align: justify;
  }

  .blockquote {
    width: 80%;
    word-wrap: break-word;
    text-align: justify;
    background-color: #262626;
    padding: 20px;
    border-radius: 8px;
  }

  .h-page {
    color: var(--header-color);
  }

  .technology {
    color: var(--main-btn-color);
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 5px;
  }

  .tech {
    color: var(--main-btn-color);
    cursor: pointer;
    padding: 5px;
  }

  .btn {
    cursor: pointer;
    border-radius: 8px;
    padding: 15px;
    background-color: var(--main-btn-color);
    border: none;
    color: var(--main-text-color);
    transition-property: background-color;
    transition-duration: 500ms;
    transition-delay: 400ms;
  }

  .btn:hover {
    color: var(--main-text-color);
    background-color: var(--main-btn-hover-color);
  }

  .page__data {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .timeline {
    color: var(--main-text-color);
    width: 70%;
    text-align: left;
    margin-top: 60px;
  }

  .ant-timeline-item-content {
    color: var(--main-text-color) !important;
  }

  .ant-timeline-item-tail {
    background-color: var(--main-btn-color) !important;
  }

  .ant-carousel {
    top: 50px;
    position: relative;
    right: 10px;
    max-width: 800px;
    word-wrap: break-word;
    margin: 0 auto;
  }

  .ant-carousel img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 8px;
  }

  .slick-dots li {
    background-color: #531dab !important;
  }

  .carousel-hack {
    display: flex;
    flex-direction: row;
  }

  .carousel-hack__desc {
    top: 90px;
    position: relative;
    right: -20px;
  }

  #contacts {
    text-align: center;
  }

  #contacts ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 50px;
  }

  #contacts ul li {
    list-style-type: none;
    border-radius: 50%;
  }

  #contacts ul li img {
    width: 60px;
    border: 1.5px solid var(--main-btn-color);
    border-radius: 50%;
    height: 60px;
  }
</style>

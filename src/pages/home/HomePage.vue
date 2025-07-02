<script setup lang="ts">
import ProfileWidget from '@/widgets/profile/ProfileWidget.vue'
import AboutMeWidget from '@/widgets/about-me/AboutMeWidget.vue'
import TechnologyWidget from '@/widgets/technology/TechnologyWidget.vue'
import MyWayWidget from '@/widgets/my-way/MyWayWidget.vue'
import { FooterWidget } from '@/widgets/footer'
</script>

<template>
  <ProfileWidget />
  <div class="quote">
    <div id="bg">
      <div id="content">
        “Аналогично тому, как написание картины является искусством для души, так и написание
        программы является искусством для разума.”
      </div>
    </div>
  </div>
  <AboutMeWidget />
  <TechnologyWidget />
  <MyWayWidget />
  <FooterWidget />
</template>

<style>
.quote {
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  min-height: 900px;
  overflow: hidden;
}

#bg {
  position: absolute;
  left: 50%;
  top: 0;
  width: 1920px;
  height: 100%;
  transform: translateX(-50%);
  background-image: url('../../../public/img/bg-1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

#content {
  text-align: center;
  text-wrap: wrap;
  width: calc(100vw - 20px);
  margin: auto;
  margin-top: 30%;
  color: var(--text-on-white-bg-color);
  font-weight: bold;
}

#content::after {
  content: '@Volnik';
  position: relative;
  top: 50px;
  left: 0px;
}
</style>

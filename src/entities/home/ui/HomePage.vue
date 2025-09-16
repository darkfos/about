<script setup lang="ts">
import { ProfileWidget } from '@/widgets/profile'
import { AboutMeWidget } from '@/widgets/about-me'
import { TechnologyWidget } from '@/widgets/technology'
import { MyWayWidget } from '@/widgets/my-way'
import { SendUserContacts } from '@/features/send-user-contacts'

import { TypographyText } from '@/shared/ui'
</script>

<template>
  <ProfileWidget />
  <div class="quote">
    <div id="bg">
      <TypographyText type="p" id="content">
        “Аналогично тому, как написание картины является искусством для души, так и написание
        программы является искусством для разума.”
      </TypographyText>
    </div>
  </div>
  <AboutMeWidget />
  <TechnologyWidget />
  <MyWayWidget />
  <SendUserContacts />
</template>

<style>
.quote {
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  min-height: 1000px;
  z-index: 10;
  overflow: visible;
}

#bg {
  z-index: 1000;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/img/bg-2.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

#content {
  text-align: center;
  text-wrap: wrap;
  width: calc(100vw - 20px);
  margin: auto;
  margin-top: 25%;
  color: var(--text-on-white-bg-color);
  font-weight: bold;
}

#content::after {
  content: '@Volnik';
  position: relative;
  top: 50px;
  left: 0px;
}

@media screen and (max-width: 1768px) {
  #content {
    margin-top: 30%;
  }
}

@media screen and (max-width: 1500px) {
  #content {
    margin-top: 35%;
  }
}

@media screen and (max-width: 1100px) {
  #content {
    margin-top: 45%;
  }
}

@media screen and (max-width: 850px) {
  #content {
    margin-top: 55%;
  }
}

@media screen and (max-width: 800px) {
  #content {
    margin-top: 60%;
  }

  #bg {
    width: 800px;
    margin: auto;
  }
}

@media screen and (max-width: 300px) {
  #content {
    margin-top: 55%;
  }
}

@media screen and (max-width: 230px) {
  #content {
    margin-top: 50%;
  }
}
</style>

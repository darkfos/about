<script setup lang="ts">
import { TitleText } from '@/shared/ui'
</script>

<template>
  <div class="footer">
    <div class="footer-body">
      <div class="footer-body__content">
        <TitleText align="center" title="@darkfos" type-title="h4" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  min-height: 900px;
  overflow: hidden;
}

.footer-body {
  position: absolute;
  left: 50%;
  top: 0;
  width: 100%;
  height: 150vh;
  transform: translateX(-50%);
  background-image: url('/img/bg-1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.footer-body__content {
  text-align: center;
  text-wrap: wrap;
  width: 100%;
  margin: auto;
  top: 40%;
  position: absolute;
  font-weight: bold;
  color: var(--pink-text-color)
}

.footer-body__content h4 {
  color: var(--pink-text-color);
  font-weight: var(--font-weight);
}
</style>

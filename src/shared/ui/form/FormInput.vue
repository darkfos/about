<script setup lang="ts"></script>

<template>
  <form class="form">
    <div class="input-wrapper">
      <input type="text" />
    </div>
  </form>
</template>

<style scoped>
.form {
  margin: auto;
  width: 100%;
}

.input-wrapper {
  position: relative;
  z-index: 1;
}

.input-wrapper:before {
  content: '';
  background: url('../../../../public/icons/find.png');
  background-color: var(--link-element-bg-color);
  background-repeat: no-repeat;
  background-position: center;
  padding: 8px;
  background-size: 25px 25px;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  display: inline-block;
  position: absolute;
  left: 95%;
  top: 10px;
  cursor: pointer;
  z-index: 4;
  transition: background-color 0.6s ease;
}

.input-wrapper:hover::before {
  background-color: var(--text-selected);
}
</style>

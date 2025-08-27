<script setup lang="ts">
import { Input } from 'ant-design-vue'
</script>
<template>
  <form class="form">
    <div class="input-wrapper">
      <Input.Search type="text" size="large" variant="outlined"> </Input.Search>
    </div>
  </form>
</template>

<style>
.form {
  margin: auto;
  width: 100%;
}

.input-wrapper {
  position: relative;
  z-index: 1;
}

.input-wrapper:hover::before {
  background-color: var(--text-selected);
}

.ant-input-group-addon svg {
  fill: #bb0591;
  transition: fill 0.2s ease-in-out;
}

.ant-input-wrapper {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

.ant-input-group-addon > button {
  background-color: #fad4bc !important;
  border-color: #fad4bc !important;
}

.ant-input-group-addon > button:hover {
  border-color: #bb0591 !important;
}

.ant-input-group-addon > button:hover svg {
  fill: #56b8ff;
}
</style>

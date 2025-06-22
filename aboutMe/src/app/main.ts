import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Lenis from "@studio-freight/lenis";

import App from './App.vue'
import "./styles/index.css";
import router from './router'

const lenis = new Lenis(
  {
    lerp: 0.05,
    wheelMultiplier: 0.5
  }
);

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}


const app = createApp(App);

app.use(createPinia())
app.use(router)

app.mount('#app')

requestAnimationFrame(raf);

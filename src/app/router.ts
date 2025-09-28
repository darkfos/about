import { createRouter, createWebHistory } from 'vue-router'

import { appRoutes } from '@/shared/model'

const router = createRouter({
  history: createWebHistory('/about/'),
  routes: [...appRoutes],
})

export default router

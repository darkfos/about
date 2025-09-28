import { createRouter, createWebHashHistory } from 'vue-router'

import { appRoutes } from '@/shared/model'

const router = createRouter({
  history: createWebHashHistory('/about/'),
  routes: [...appRoutes],
})

export default router

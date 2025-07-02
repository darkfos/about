import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/home/HomePage.vue'
import ProjectsPage from '@/pages/projects/ProjectsPage.vue'
import BlogPage from '@/pages/blog/BlogPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'Главная страница',
      component: HomePage,
    },
    {
      path: '/projects',
      name: 'Проекты',
      component: ProjectsPage,
    },
    {
      path: '/blog',
      name: 'Блог',
      component: BlogPage,
    },
  ],
})

export default router

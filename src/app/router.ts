import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/entities/home'
import BlogPage from '@/entities/blog'
import ProjectsPage from '@/entities/projects'

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

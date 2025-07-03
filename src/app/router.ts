import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/entities/home/HomePage.vue'
import ProjectsPage from '@/entities/projects/ProjectsPage.vue'
import BlogPage from '@/entities/blog/BlogPage.vue'

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

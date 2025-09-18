import type { Component } from 'vue'

import HomePage from '@/entities/home'
import ProjectsPage from '@/entities/projects'
import BlogPage from '@/entities/blog'

export interface AppRoutesItem {
  path: string
  name: string
  component: Component
}

export const appRoutes: Array<AppRoutesItem> = [
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
    path: '/blogs',
    name: 'Блог',
    component: BlogPage,
  },
]

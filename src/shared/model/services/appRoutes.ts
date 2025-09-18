import type { Component } from 'vue'

import HomePage from '@/entities/home'
import ProjectsPage, { ProjectPage } from '@/entities/projects'
import BlogsPage, { BlogPage } from '@/entities/blog'

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
    path: '/projects/:slug',
    name: 'Проект',
    component: ProjectPage,
  },
  {
    path: '/blogs/:slug',
    name: 'Блок',
    component: BlogPage,
  },
  {
    path: '/blogs',
    name: 'Блог',
    component: BlogsPage,
  },
]

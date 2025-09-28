import type { Component } from 'vue'

import HomePage from '@/entities/home'
import ProjectsPage, { ProjectPage } from '@/entities/projects'
import BlogsPage, { BlogPage } from '@/entities/blog'
import NotFound from '@/shared/ui/notFound/NotFound.vue'

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
    path: '/projects/:id',
    name: 'projects',
    component: ProjectPage,
  },
  {
    path: '/blogs/:id',
    name: 'blogs',
    component: BlogPage,
  },
  {
    path: '/blogs',
    name: 'Блог',
    component: BlogsPage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: "other",
    component: NotFound,
  }
]

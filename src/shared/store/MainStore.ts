import { defineStore } from 'pinia'
import type { Theme } from '@/entities/theme'

type flagTechnologies = 'backend' | 'frontend' | 'other'

export const useMainStore = defineStore('mainStore', {
  state: (): {
    activePage: string
    themes: Array<Theme>
    backendTechnologies: Array<Array<string>>
    frontendTechnologies: Array<Array<string>>
    otherTechnologies: Array<Array<string>>
  } => {
    return {
      activePage: '/',
      themes: [],
      backendTechnologies: [
        ['python.png', 'nodejs.png'],
        ['django.png', 'fastapi.png', 'express.png'],
        ['postgres.png', 'mysql.png', 'sqlite.png'],
        ['mongodb.png', 'redis.png'],
        ['rabbitmq.png'],
      ],
      frontendTechnologies: [
        ['javascript.png', 'typescript.png'],
        ['react.png', 'vue.png'],
        ['html.png', 'css.png', 'scss.png'],
        ['nuxt.png', 'next.png'],
      ],
      otherTechnologies: [['docker.png'], ['nginx.png']],
    }
  },
  actions: {
    getPageLink(): string {
      return this.activePage
    },
    getThemes() {
      return this.themes
    },
    getTechnologies(flag: flagTechnologies): Array<Array<string>> {
      switch (flag) {
        case 'backend':
          return this.backendTechnologies
        case 'frontend':
          return this.frontendTechnologies
        case 'other':
          return this.otherTechnologies
      }
    },
    addThemes(newThemes: Array<Theme>): void {
      this.themes = [...this.themes, ...newThemes]
    },
    addPagesLink(pageLink: string): void {
      this.activePage = pageLink
    },
    addTechnologies(
      newTechnologies: Array<string>,
      index: number | null = null,
      flag: flagTechnologies = 'backend',
    ): void {
      let technology: Array<string> | Array<Array<string>> = this.backendTechnologies

      switch (flag) {
        case 'backend':
          technology = this.backendTechnologies
          break
        case 'frontend':
          technology = this.frontendTechnologies
          break
        case 'other':
          technology = this.otherTechnologies
      }

      if (index) {
        technology[index] = [...technology[index], ...newTechnologies]
      } else {
        technology.push(newTechnologies)
      }
    },
  },
})

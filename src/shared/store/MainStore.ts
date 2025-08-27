/* eslint-disable */

import { defineStore } from 'pinia'
import type { DefineComponent } from 'vue'

import type { Theme } from '@/entities/theme'
import {
  DjangoIcon,
  ViteIcon,
  WebpackIcon,
  MongoDBIcon,
  CssIcon,
  DockerIcon,
  ExpressIcon,
  NodejsIcon,
  RedisIcon,
  ScssIcon,
  SqliteIcon,
  MySQLIcon,
  JsIcon,
  TsIcon,
  FastApiIcon,
  PostgresIcon,
  ReactIcon,
  RabbitMQIcon,
  PoetryIcon,
  VueIcon,
  NextIcon,
  NginxIcon,
  NuxtIcon,
  HtmlIcon,
  PythonIcon,
} from '@/shared/ui'
import type { themeColor, flagTechnologies } from '@/shared/types'
import { getFromLocalStorage } from '@/shared/utils/storage/localStorage.ts'

export const useMainStore = defineStore('mainStore', {
  state: (): {
    appTheme: themeColor
    activePage: string
    themes: Array<Theme>
    backendTechnologies: Array<Array<DefineComponent<any, any, any>>>
    frontendTechnologies: Array<Array<DefineComponent<any, any, any>>>
    otherTechnologies: Array<Array<DefineComponent<any, any, any>>>
  } => {
    return {
      appTheme: (getFromLocalStorage('theme') as themeColor)
        ? (getFromLocalStorage('theme') as themeColor)
        : 'dark',
      activePage: '/',
      themes: [],
      backendTechnologies: [
        [PythonIcon, NodejsIcon],
        [DjangoIcon, FastApiIcon, ExpressIcon],
        [PoetryIcon],
      ],
      frontendTechnologies: [
        [JsIcon, TsIcon],
        [ReactIcon, VueIcon],
        [HtmlIcon, CssIcon, ScssIcon],
        [NuxtIcon, NextIcon],
        [ViteIcon, WebpackIcon],
      ],
      otherTechnologies: [
        [DockerIcon],
        [NginxIcon],
        [PostgresIcon, MySQLIcon, SqliteIcon, MongoDBIcon, RedisIcon],
        [RabbitMQIcon],
      ],
    }
  },
  actions: {
    changeColor(themeColor: themeColor) {
      this.appTheme = themeColor
    },
    getPageLink(): string {
      return this.activePage
    },
    getThemes() {
      return this.themes
    },
    getTechnologies(flag: flagTechnologies) {
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
      newTechnologies: Array<DefineComponent<any, any, any>>,
      index: number | null = null,
      flag: flagTechnologies = 'backend',
    ): void {
      let technology:
        | Array<DefineComponent<any, any, any>>
        | Array<Array<DefineComponent<any, any, any>>> = this.backendTechnologies

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

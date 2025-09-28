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
import type { Article, flagTechnologies } from '@/shared/types'

export const useMainStore = defineStore('mainStore', {
  state: (): {
    activePage: string
    themes: Array<Theme>
    backendTechnologies: Array<Array<DefineComponent<any, any, any>>>
    frontendTechnologies: Array<Array<DefineComponent<any, any, any>>>
    otherTechnologies: Array<Array<DefineComponent<any, any, any>>>
    lastArticles: Array<Article>
  } => {
    return {
      activePage: '/',
      themes: [],
      lastArticles: [],
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
    getLastArticles(): Array<Article> {
      return this.lastArticles
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
    addArticles(articles: Array<Article>): void {
      this.lastArticles = articles.map(article => Object.assign({value: article.title}, article))
    }
  },
})

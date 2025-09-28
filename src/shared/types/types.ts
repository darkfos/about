import type { Theme } from '@/entities/theme'

import type { Entity, Author, Components, Image, Pagination } from '@/shared/types'

export interface Article extends Entity {
  title?: string
  shortDescription: string
  likes: number
  image: Image
  views: number
  section: Array<Components>
  themes: Array<Theme>
  author: Author
}

export interface ArticleResultPagination {
  blogs: Array<Article>
  pagination: Pagination
}

import type { Theme } from '@/entities/theme'

import type { Entity, Author, Components, Image } from '@/shared/types'

export interface Blog extends Entity {
  title?: string
  shortDescription: string
  likes: number
  image: Image
  views: number
  section: Array<Components>
  themes: Array<Theme>
  author: Author
}

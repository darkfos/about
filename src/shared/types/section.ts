import type { BlocksContent } from 'vue-strapi-blocks-renderer'
import type { Author, Image } from '@/shared/types/strapi.ts'
import type { Theme } from '@/entities/theme'
import Blog from '@/entities/blog'
import type { Article } from '@/shared/types/types.ts'

interface Component {
  id: number
  documentId: string
  __component: string
}

interface FormatImage {
  name: string
  hash: string
  ext: string
  mime: string
  path?: string | null
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export interface DynamicSectionAdditionalData {
  themes: Array<Theme>
  date: string
  author: {
    username: string
    avatar: Image
  }
}

export interface ImageBlock extends Component {
  alt: string
  isHeader?: boolean
  img?: {
    id: number
    documentId: string
    name: string
    alternativeText: string | null
    caption?: string | null
    width: number
    height: number
    formats: {
      thumbnail: FormatImage
      medium: FormatImage
      small: FormatImage
      large: FormatImage
    }
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl?: string
    provider?: string
    provider_metadata: null
    folderPath: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    locale: string | null
  }
}

export interface TextBlock extends Component {
  header?: string | null
  text: BlocksContent
}

export interface LinkBlock extends Component {
  alt?: string
  href?: string
  icon?: Image
  text?: string
}

export interface BannerBlockI extends Component {
  image: {
    img: Image
  }
  views: number
  text: string
}

export interface CTABlock extends Component {
  text: string
  url: string
}

export interface GalleryBlock extends Component {
  title: string
  description: BlocksContent
  images: Array<Image>
}

export interface LinkArticleBlock extends Component {
  blog: Article
  project: Article
  views: number
}

export type Components = ImageBlock &
  TextBlock &
  BannerBlockI &
  CTABlock &
  LinkBlock &
  LinkArticleBlock

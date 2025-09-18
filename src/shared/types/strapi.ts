import type { BlogResultRequest } from '@/entities/blog'
import type { ProjectResultRequest } from '@/entities/projects'

export interface FormatImage {
  name: string
  hash: string
  ext: string
  mime: string
  path?: string
  url: string
  size: number
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount?: number
  total?: number
}

export interface StrapiData<T> {
  data: Array<T>
  meta: {
    pagination: Pagination
  }
}

export interface Entity {
  id: number
  documentId?: string
  createdAt: string
  updatedAt: string
  locale?: string | null
}

export interface Author {
  id: number
  documentId: string
  username: string
  avatar: Image
}

export interface Image extends Entity, FormatImage {
  caption?: string
  formats: {
    small: FormatImage
    medium: FormatImage
    large: FormatImage
  }
}

export interface SearchResult extends BlogResultRequest, ProjectResultRequest {}

export type SharedResultKeyElements = 'blogs' | 'projects'

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
}

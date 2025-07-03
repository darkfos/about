export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export interface StrapiData<T> {
  data: Array<T>
  meta: {
    pagination: Pagination
  }
}

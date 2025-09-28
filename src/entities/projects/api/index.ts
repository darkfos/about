import { instance } from '@/shared/api'
import type { Pagination, ThemeFilter, ArticleResultPagination, Article } from '@/shared/types'

export async function getProjects(
  title: string,
  themes: ThemeFilter,
  pageData: Pagination,
): Promise<ArticleResultPagination> {
  const req = await instance.get(`/findProjects`, {
    params: {
      title: title.toLowerCase(),
      themes: themes,
      page: pageData.page,
      limit: pageData.pageSize,
    },
  })

  if (req.status !== 200) return { blogs: [], pagination: { page: 1, total: 0, pageSize: 10 } }
  return await req.data
}

export async function getProject(id: string): Promise<Article> {
  const req = await instance.get(`/findProject/${id}`)

  if (req.status !== 200) {
    throw new Error('Не удалось найти проекты')
  }
  return await req.data
}

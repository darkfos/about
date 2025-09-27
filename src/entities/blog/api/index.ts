import type { Blog, BlogResultRequest } from '@/entities/blog'

import { instance } from '@/shared/api'
import type { Pagination, ThemeFilter } from '@/shared/types'

export async function getBlogs(
  title: string,
  themes: ThemeFilter,
  pageData: Pagination,
): Promise<BlogResultRequest> {
  const req = await instance.get(`/findBlog`, {
    params: {
      title: title,
      themes: themes,
      page: pageData.page,
      limit: pageData.pageSize,
    },
  })

  if (req.status !== 200) return { blogs: [], pagination: { page: 1, total: 0, pageSize: 10 } }
  return await req.data
}

export async function getBlog(id: string): Promise<Blog> {
  const req = await instance.get(`/findBlog/${id}`)

  if (req.status !== 200) {
    throw new Error('Не удалось найти блог')
  }
  return await req.data
}

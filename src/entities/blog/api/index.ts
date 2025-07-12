import type { Blog } from "@/entities/blog";

import { instance } from '@/shared/api';
import type { Pagination, ThemeFilter } from '@/shared/types'

export async function getBlog(title: string, themes: ThemeFilter, pageData: Pagination): Promise<Blog | null> {
  const req = await instance.get(`/api/findBlog`, {
    params: {
      title: title,
      themes: themes.themes,
      page: pageData.page,
      limit: pageData.pageSize
    }
  });
  if (req.status !== 200) return null;
  return await req.data();
}

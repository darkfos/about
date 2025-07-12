import type { Theme } from '@/entities/theme'

import { instance } from '@/shared/api'
import type { StrapiData } from '@/shared/types'

export async function getThemes() {
  const request = await instance.get('/themes')
  if (request.status === 200) {
    const themes: StrapiData<Theme> = request.data
    return await themes.data
  }
}

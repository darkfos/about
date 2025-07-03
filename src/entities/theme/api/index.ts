import type { Theme } from '@/entities/theme'

import { instance } from '@/shared/api'
import type { StrapiData } from '@/shared/types'

export async function getThemes() {
  let request = await instance.get('/themes')
  if (request.status === 200) {
    console.log(await request.data)

    const themes: StrapiData<Theme> = request.data
    return await themes.data
  }
}

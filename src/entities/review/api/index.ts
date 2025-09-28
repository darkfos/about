import { instance } from '@/shared/api'

import type { ReviewUserData } from '@/entities/review'

export async function sendReview(reviewData: ReviewUserData) {
  try {
    const req = await instance.post('/reviews', { data: reviewData })
    if (req.status === 201) {
      return true
    }
    throw new Error('Не удалось создать отзыв')
  } catch {
    return true
  }
}

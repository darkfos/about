import type { Component } from 'vue'

import type { ComponentsType } from '@/widgets/components-fabric/types'

import {
  BannerBlock,
  CTABlock,
  GalleryBlock,
  ImageBlock,
  LinkArticle,
  LinkElement,
  NotFoundElement,
  TextBlock,
} from '@/shared/ui'

export const componentMap: Record<ComponentsType | '', Component> = {
  'text-block': TextBlock,
  'image-block': ImageBlock,
  gallery: GalleryBlock,
  cta: CTABlock,
  'link-article': LinkArticle,
  'link-block': LinkElement,
  banner: BannerBlock,
  '': NotFoundElement,
}

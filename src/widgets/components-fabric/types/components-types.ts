import type { Component } from 'vue'

import {
  TextBlock,
  LinkElement,
  LinkArticle,
  CTABlock,
  BannerBlock,
  ImageBlock,
  GalleryBlock,
} from '@/shared/ui'

export type ComponentsType =
  | 'text-block'
  | 'image-block'
  | 'gallery'
  | 'cta'
  | 'link-article'
  | 'link-block'
  | 'banner'

import { type Component, defineAsyncComponent } from 'vue'

import type { ComponentsType } from '@/widgets/components-fabric/types'

import { NotFoundElement } from '@/shared/ui'

export const componentMap: Record<ComponentsType | '', Component> = {
  'text-block': defineAsyncComponent(
    () => import('@/shared/ui/strapi-components/textBlock/TextBlock.vue'),
  ),
  'image-block': defineAsyncComponent(
    () => import('@/shared/ui/strapi-components/imageBlock/ImageBlock.vue'),
  ),
  gallery: defineAsyncComponent(
    () => import('@/shared/ui/strapi-components/galleryBlock/GalleryBlock.vue'),
  ),
  cta: defineAsyncComponent(() => import('@/shared/ui/strapi-components/cta/CTA.vue')),
  'link-article': defineAsyncComponent(
    () => import('@/shared/ui/strapi-components/linkArticle/LinkArticle.vue'),
  ),
  'link-block': defineAsyncComponent(
    () => import('@/shared/ui/strapi-components/linkElement/LinkElement.vue'),
  ),
  banner: defineAsyncComponent(
    () => import('@/shared/ui/strapi-components/banner/BannerBlock.vue'),
  ),
  '': NotFoundElement,
}

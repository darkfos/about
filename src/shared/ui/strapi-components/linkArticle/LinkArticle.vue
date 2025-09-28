<script setup lang="ts">
import { defineProps } from 'vue'

import { ArticleCard } from '@/widgets/article-card'

import type { LinkArticleBlock } from '@/shared/types'

const props = defineProps<LinkArticleBlock>()

const positionLinkArticle = Math.floor(Math.random() * 2)
const styleCard = positionLinkArticle === 0 ? { left: '5%' } : { right: '5%' }
</script>

<template>
  <article class="link-article" :style="styleCard">
    <ArticleCard
      :is-link="true"
      :link-article-name="props.project ? 'projects' : 'blogs'"
      :id="props.project ? props.project.id : props.blog.id"
      :title="props.project ? props.project.title : props.blog.title"
      :image="props.project ? props.project.image.url : props.blog.image.url"
      :image-alt="props.project ? props.project.image.caption : props.blog.image.caption"
      :views="props.views"
      :themes="props.project ? props.project.themes : props.blog.themes"
      :avatar-image="props.project ? props.project.author.avatar.url : props.blog.author.avatar.url"
      :avatar-name="props.project ? props.project.author.username : props.blog.author.username"
      :shortDescription="
        props.project ? props.project.shortDescription : props.blog.shortDescription
      "
    />
  </article>
</template>

<style scoped>
.link-article {
  display: flex;
  flex-direction: column;
  position: absolute;
}
</style>

<script setup lang="ts">
import { onMounted, ref, provide, computed } from 'vue'
import type { Ref } from 'vue'
import { useRoute } from 'vue-router'

import { ArticleCard } from '@/widgets/article-card'

import {
  type Blog,
  getBlogs,
  BLOG_TITLE_SEARCH_VALUE,
  BLOG_TITLE_SEARCH_KEY,
} from '@/entities/blog'

import { LinkElementWidget, TypographyText } from '@/shared/ui'
import { type Pagination } from '@/shared/types'
import { FormInput, TitleText } from '@/shared/ui'
import { useMainStore } from '@/shared/store'
import { convertJsonToArray } from '@/shared/utils'

const mainStore = useMainStore()
const route = useRoute()

const currentPage: Ref<number> = computed(() => +(route.query.page ?? 1))
const themes: Ref<Array<string>> = computed(
  () => convertJsonToArray<string>(route.query.themes as string) ?? [],
)
const blogs = ref<Array<Blog>>([])
const paginationResult = ref<Pagination>({ page: 1, pageSize: 10, total: 0 })

const findBlogs = async () => {
  const req = await getBlogs(BLOG_TITLE_SEARCH_VALUE.value as string, themes.value, {
    page: currentPage.value,
    pageSize: 10,
  })

  blogs.value = req.blogs
  paginationResult.value = req.pagination
}

onMounted(async () => {
  await findBlogs()

  console.log(blogs)
})

const url = import.meta.env.VITE_BACKEND_SHORT_URL
provide(BLOG_TITLE_SEARCH_KEY, BLOG_TITLE_SEARCH_VALUE)
</script>

<template>
  <div class="blog">
    <TitleText align="center" title="Давай-ка поищем..." type-title="h3" :single="true" />
    <div class="blog-themes">
      <FormInput />
      <TitleText align="left" title="Темы" type-title="h5" style="margin-top: 20px" />
      <div class="blog-themes__content">
        <LinkElementWidget
          :active="true"
          v-for="theme in mainStore.getThemes()"
          :key="theme.id"
          :text="theme?.name as string"
        ></LinkElementWidget>
      </div>
    </div>
    <template v-if="blogs.length">
      <div class="blog-content">
        <ArticleCard
          :key="blog.id"
          v-for="blog in blogs"
          :title="blog.title"
          :short-description="blog.shortDescription.slice(0, 99) + '...'"
          :image="url + blog.image.url"
          :image-alt="blog.image.caption"
          :themes="blog.themes.map((theme) => theme.name)"
        />
        <a-pagination
          v-model:current="currentPage"
          :total="(paginationResult.total as number) ?? 0"
          :show-size-changer="false"
          style="padding-top: 80px"
        />
      </div>
    </template>
    <template v-else>
      <TypographyText type="p" id="not-found-text"> Не удалось найти блоги </TypographyText>
    </template>
  </div>
</template>

<style scoped>
.blog {
  width: 90%;
  margin: auto;
}

.blog > h1 {
  text-align: center;
}

.blog-themes {
  width: 50%;
  margin: auto;
  text-align: left;
}

.blog-themes__content {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: -15px;
  flex-wrap: wrap;
}

.input-wrapper input {
  width: 100%;
  margin-top: 5px;
  border-radius: 5px;
  background: none;
  padding: 8px;
  border-color: var(--main-btn-color);
  color: var(--main-text-color);
}

.blog-content {
  width: 70%;
  margin: auto;
  margin-top: 60px;
}
</style>

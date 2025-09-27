<script setup lang="ts">
import { onMounted, ref, defineProps, computed, inject, watch } from 'vue'
import type { Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { type SearchProps } from '@/features/search'

import { ArticleCard } from '@/widgets/article-card'

import type { Blog } from '@/entities/blog'

import { LinkElementWidget } from '@/shared/ui'
import { type Pagination, type SharedResultKeyElements } from '@/shared/types'
import { FormInput, TitleText } from '@/shared/ui'
import { useMainStore } from '@/shared/store'
import {
  convertJsonToArray,
  convertStringToNumber,
  KEY_GENERAL_SHORT_BACKEND_URL,
} from '@/shared/utils'
import NotFound from '@/shared/ui/notFound/NotFound.vue'

const mainStore = useMainStore()
const route = useRoute()
const router = useRouter()

const { funcToFindElements, className, title, keyRefProvide } = defineProps<SearchProps>()

const currentPage: Ref<number> = ref<number>(convertStringToNumber(route.query?.page as string))
const themes: Ref<Array<string>> = computed(
  () => convertJsonToArray<string>(route.query.themes as string) ?? [],
)
const elements = ref<Array<Blog>>([])
const notLoaded = ref<boolean>(false)
const paginationResult = ref<Pagination>({ page: 1, pageSize: 10, total: 0 })

const valueRef = inject(keyRefProvide, ref())

const findElements = async () => {
  setTimeout(async () => {
    const req = await funcToFindElements(valueRef.value as string, themes.value, {
      page: currentPage.value,
      pageSize: 10,
    })
    const reqData = req[route.path.split('/')[1] as SharedResultKeyElements] as Blog[]
    if (reqData.length < 1) {
      notLoaded.value = true
      elements.value = []
      return
    }

    elements.value = []
    notLoaded.value = false
    elements.value = reqData
    paginationResult.value = req.pagination
  }, 500)
}

onMounted(async () => {
  await findElements()
})

watch([route, valueRef], () => {
  findElements()
})

const handleClickPagination = () => {
  router.push({ path: route.path, query: { ...route.query, page: currentPage.value } })
}
const url = inject(KEY_GENERAL_SHORT_BACKEND_URL, ref())
</script>

<template>
  <div class="search" :class="className">
    <TitleText align="center" :title="title" type-title="h3" :single="true" />
    <div class="search-themes">
      <FormInput />
      <TitleText align="left" title="Темы" type-title="h5" style="margin-top: 20px" />
      <div class="search-themes__content">
        <LinkElementWidget
          id="link-theme"
          :active="true"
          v-for="theme in mainStore.getThemes()"
          :key="theme.id"
          :text="theme?.name as string"
        ></LinkElementWidget>
      </div>
    </div>
    <template v-if="elements.length">
      <div class="search-content">
        <ArticleCard
          :key="blog.id"
          v-for="blog in elements"
          :id="blog.id"
          :title="blog.title"
          :short-description="blog.shortDescription.slice(0, 99) + '...'"
          :image="url + blog.image.url"
          :image-alt="blog.image.caption"
          :themes="blog.themes.map((theme) => theme.name)"
          :avatar-image="blog.author.avatar.url"
          :avatar-name="blog.author.username"
        />
        <a-pagination
          v-model:current="currentPage"
          :total="(paginationResult.total as number) ?? 0"
          :show-size-changer="false"
          @change="() => handleClickPagination()"
          style="padding-top: 80px"
        />
      </div>
    </template>
    <template v-else>
      <template v-if="notLoaded">
        <NotFound />
      </template>
      <template v-else>
        <div class="search-content flex">
          <a-spin tip="Загрузка..." />
        </div>
      </template>
    </template>
  </div>
</template>

<style scoped>
.search {
  width: 90%;
  margin: auto;
}

.search > h1 {
  text-align: center;
}

.search-themes {
  width: 50%;
  margin: auto;
  text-align: left;
}

.search-themes__content {
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

.search-content {
  width: 70%;
  margin: auto;
  margin-top: 60px;
}
</style>

import { ref } from 'vue'

export const KEY_GENERAL_SHORT_BACKEND_URL = 'KEY_GENERAL_SHORT_BACKEND_URL'
export const SEARCH_TITLE_SEARCH_KEY: string = 'KEY_BLOG_TITLE_SEARCH'
export const END_ARTICLE = 'KEY_END_ARTICLE'

export const GENERAL_SHORT_BACKEND_URL = ref<string>(import.meta.env.VITE_BACKEND_SHORT_URL)
export const SEARCH_TITLE_SEARCH_VALUE = ref<string>('')
export const END_ARTICLE_VALUE = ref<false>(false)

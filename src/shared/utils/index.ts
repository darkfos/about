import ScrollHook from './hooks/ScrollHook.vue'
import ResizeScreenHook from './hooks/ResizeScreenHook.vue'

export { saveOnLocalStorage, deleteFromLocalStorage } from './storage/localStorage'
export { isJson, convertJsonToArray } from './general'
export { convertStringToNumber } from './other.ts'
export {
  KEY_GENERAL_SHORT_BACKEND_URL,
  SEARCH_TITLE_SEARCH_KEY,
  END_ARTICLE,
  SCREEN_WIDTH_KEY,
  GENERAL_SHORT_BACKEND_URL,
  SEARCH_TITLE_SEARCH_VALUE,
  END_ARTICLE_VALUE,
  SCREEN_WIDTH_VALUE,
} from './providers.ts'
export { ARTICLE_END } from './consts.ts'
export { ScrollHook, ResizeScreenHook }

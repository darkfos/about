import { ref } from 'vue'

export const KEY_GENERAL_SHORT_BACKEND_URL = 'KEY_GENERAL_SHORT_BACKEND_URL'
export const GENERAL_SHORT_BACKEND_URL = ref<string>(import.meta.env.VITE_BACKEND_SHORT_URL)

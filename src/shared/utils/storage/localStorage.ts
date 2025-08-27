import { isJson } from '@/shared/utils'

export const saveOnLocalStorage = <T extends string>(key: string, value: T): void => {
  if (isJson(value)) {
    localStorage.setItem(key, JSON.stringify(value))
  } else {
    localStorage.setItem(key, value)
  }
}

export const deleteFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key)
}

export const getFromLocalStorage = (key: string): string | object | null => {
  let result: string = localStorage.getItem(key) ?? ''
  result = isJson(result) ? JSON.parse(result) : result
  return result
}

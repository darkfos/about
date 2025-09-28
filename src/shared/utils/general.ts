export const isJson = (jsonData: string): boolean => {
  try {
    const parsedJson = JSON.parse(jsonData)
    return typeof parsedJson === 'object'
  } catch {
    return false
  }
}

export const convertJsonToArray = <T>(jsonData: string): Array<T> => {
  try {
    return JSON.parse(jsonData)
  } catch {
    return []
  }
}

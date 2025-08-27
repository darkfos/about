export const isJson = (jsonData: string): boolean => {
  try {
    const parsedJson = JSON.parse(jsonData)
    return typeof parsedJson === 'object'
  } catch {
    return false
  }
}

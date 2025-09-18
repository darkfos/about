export const convertStringToNumber = (str: string | undefined | null): number => {
  try {
    const numb = Number(str);
    return Number.isNaN(numb) ? 1 : numb
  } catch {
    return 1
  }
}

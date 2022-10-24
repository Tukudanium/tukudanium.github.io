export function useRequiredUrl(fileName: string) {
    return new URL(`../assets/image/${fileName}.png`, import.meta.url).href
}

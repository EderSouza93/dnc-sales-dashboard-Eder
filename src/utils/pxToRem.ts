/**
 * Convert Pixels to rem
 * @param pixels - Pixels value to be converted
 * @returns The converted value in rem
 */
export function pxToRem(pixels: number): string {
  return `${pixels / 16}rem`
}

/**
 *  Split items of an iterable collection into small chunks array with given count.
 *
 * ## Example
 * ```js
 * const arr = [1, 2, 3, 4, 5, 6, 7, 8]
 * const chunks = splitChunks(arr, 3) // Expected: [[1, 2, 3], [4, 5, 6], [7, 8]]
 * ```
 *
 * @param iterable Iterable collection types, such as Array, Set ...const
 * @param chunkSize How many items in one chunk
 * @returns chunks with the given `chunkSize`, but the last item may have less than that due to not enough
 */
export function splitChunks<T>(
  iterable: Array<T> | Set<T>,
  chunkSize: number,
): T[][] {
  const res: T[][] = []
  const arrayify = [...iterable]
  while (arrayify.length > 0) {
    const chunk = arrayify.splice(0, chunkSize)
    res.push(chunk)
  }
  return res
}

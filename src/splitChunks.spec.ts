import { describe, expect, it } from 'vitest'
import { splitChunks } from '.'

describe('splitChunks', () => {
  const createMockArr = () => Array.from({ length: 25 }, (_, i) => i + 1)
  const sharedChunksTest = (chunks: number[][]) => {
    expect(chunks.length).toBe(9)
    expect(chunks.at(-1)?.length).toBe(1)
    expect(chunks.at(-1)).toEqual([25])
  }

  it('splitIntoChunks - Array', () => {
    const mockArr = createMockArr()
    const chunks = splitChunks(mockArr, 3)
    sharedChunksTest(chunks)
  })

  it('splitIntoChunks - Set', () => {
    const mockArr = new Set(createMockArr())
    const chunks = splitChunks(mockArr, 3)
    sharedChunksTest(chunks)
  })
})

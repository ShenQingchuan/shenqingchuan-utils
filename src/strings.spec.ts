import { describe, expect, it } from 'vitest'
import { escapeForCreateRegExp, getNoDuplicateNameForNewListItem } from './strings'

describe('strings', () => {
  it('escapeForCreateRegExp', () => {
    const str1 = '/path/to/resource.html?search=query'
    const str2 = '{ [bracket] in curly \\* }'
    const escapedStr1 = escapeForCreateRegExp(str1)
    const escapedStr2 = escapeForCreateRegExp(str2)
    expect(escapeForCreateRegExp(str1)).toBe('\\/path\\/to\\/resource\\.html\\?search=query')
    expect(escapeForCreateRegExp(str2)).toBe('\\{ \\[bracket\\] in curly \\\\\\* \\}')
    expect(new RegExp(escapedStr1).test(str1)).toBe(true)
    expect(new RegExp(escapedStr2).test(str2)).toBe(true)
  })

  it('insertNewNameAvoidDuplicate', () => {
    const existNames = ['a', 'a-1', 'a-2']
    const newName1 = getNoDuplicateNameForNewListItem('a', existNames)
    expect(newName1).toBe('a-3')
    const newName2 = getNoDuplicateNameForNewListItem('b', existNames)
    expect(newName2).toBe('b')
    const newName3 = getNoDuplicateNameForNewListItem('a-2', existNames)
    expect(newName3).toBe('a-2-1')
    const newName4 = getNoDuplicateNameForNewListItem('a-1', existNames, (baseString, counter) => `${baseString}(${counter})`)
    expect(newName4).toBe('a-1(1)')
  })
})

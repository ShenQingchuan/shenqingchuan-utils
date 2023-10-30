/**
 * Escape special character in string for building RegExp
 *
 * ## Example
 * ```js
 * escapeForCreateRegExp(
 *  '/path/to/resource.html?search=query'
 * ); // Expected: '\\/path\\/to\\/resource\\.html\\?search=query'
 * ```
 *
 * @param {string} str - String to escape
 */
export function escapeForCreateRegExp(str: string) {
  return str.replace(/[$()*+./?[\\\]^{|}-]/g, '\\$&')
}

function defaultJoiner(baseString: string, counter: number) {
  return `${baseString}-${counter}`
}

/**
 * Generate a variant of new name that does not conflict with exist names.
 *
 * ## Example
 * ```js
 * const existNames = ['a', 'a-1', 'a-2'];
 * const newName = 'a';
 * const noDuplicateName = getNoDuplicateNameForNewListItem(newName, existNames);  // Expected: 'a-3'
 * ```
 *
 * ## Default joiner
 * ```js
 * function defaultJoiner(baseString, counter) {
 *  return `${baseString}-${counter}`;
 * }
 * ```
 *
 * @param newName - New name to be checked
 * @param existNames - Existing names to be checked
 * @param customizeJoiner - Customize the joiner function
 * @returns {string} A variant of new name that does not conflict with exist names
 */
export function getNoDuplicateNameForNewListItem(newName: string, existNames: string[], customizeJoiner?: (baseString: string, counter: number) => string) {
  let newString = newName || 'a'

  const joiner = customizeJoiner || defaultJoiner

  let counter = 1
  while (existNames.includes(newString)) {
    newString = joiner(newName, counter)
    counter++
  }

  return newString
}

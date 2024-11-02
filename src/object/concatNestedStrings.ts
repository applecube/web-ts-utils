import { isArray, isObject, isString } from '../check';

/**
 * Finds and concatenates strings in any nested structures.
 * Pass sep argument as separator for concatenation.
 * Returns concatenated string.
 *
 * @example concatNestedStrings(' - ', 'aaa', ['bbb', { b: 'ccc' }], { c: 'ddd', prop: ['fff'] })
 * => 'aaa - bbb - ccc - ddd - fff'
 */
export const concatNestedStrings = (sep: string, ...items: unknown[]): string => {
  let result = '';

  const add = (str: string) => {
    if (!str) return;
    if (result) result += sep;
    result += str;
  };

  for (const item of items) {
    if (!item) continue;
    if (isString(item)) add(item);
    else if (isArray(item)) add(concatNestedStrings(sep, ...item));
    else if (isObject(item)) add(concatNestedStrings(sep, ...Object.values(item)));
  }

  return result;
};

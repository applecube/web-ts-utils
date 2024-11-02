import { isObject } from '../check';

/**
 * Shallow equality check of two objects. I.e. `===` compare of first level props.
 */
export const isShallowEqual = (val1: unknown, val2: unknown) => {
  if (!isObject(val1) || !isObject(val2)) return val1 === val2;

  if (Object.keys(val1).length !== Object.keys(val2).length) return false;

  for (const k in val1) {
    if (val1[k] !== val2[k]) return false;
  }

  return true;
};

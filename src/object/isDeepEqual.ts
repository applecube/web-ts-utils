import { isObject } from '../check';

/**
 * Checks equality of two objects based on their full nested structure.
 */
export const isDeepEqual = (val1: unknown, val2: unknown) => {
  if (!isObject(val1) || !isObject(val2)) return val1 === val2;

  if (Object.keys(val1).length !== Object.keys(val2).length) return false;

  for (const k in val1) {
    if (!isDeepEqual(val1[k], val2[k])) return false;
  }

  return true;
};

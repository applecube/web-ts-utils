import { isPlainObject } from '../check';

/**
 * Checks if val is empty js object `{}`
 */
export const isEmptyObject = (val: unknown): val is JsObject<never> =>
  isPlainObject(val) && !Object.keys(val).length;

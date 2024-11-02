/**
 * Checks if val is js object. Inherited objects also pass. Without null.
 */
export const isObject = (val: unknown): val is JsObject =>
  !!val && typeof val === 'object';

/**
 * Checks if val is plain js object. Without inheritance. Without `null`.
 */
export const isPlainObject = (val: unknown): val is JsObject =>
  !!val && typeof val === 'object' && val.constructor === Object;

import { isArray, isUndefined } from '../check';

/**
 * If `val` is array returns `val`. If not returns `[val]`. If `val` is `undefined` returns `[]`.
 */
export const ensureArray = <T = unknown>(val?: T) => {
  return (isUndefined(val) ? [] : isArray(val) ? val : [val]) as T extends Array<infer U>
    ? U[]
    : T[];
};

import { isNull } from './isNull';
import { isUndefined } from './isUndefined';

export const isEmpty = (val: unknown): val is null | undefined =>
  isNull(val) || isUndefined(val);

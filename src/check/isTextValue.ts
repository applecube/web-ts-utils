import { isNumber } from './isNumber';
import { isString } from './isString';

export const isTextValue = (val: unknown): val is string | number =>
  isString(val) || isNumber(val);

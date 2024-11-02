import { isBoolean } from './isBoolean';
import { isNull } from './isNull';
import { isNumber } from './isNumber';
import { isString } from './isString';
import { isSymbol } from './isSymbol';
import { isUndefined } from './isUndefined';

export const isPrimitive = (
  val: unknown,
): val is string | number | boolean | symbol | null | undefined =>
  isString(val) ||
  isNumber(val) ||
  isBoolean(val) ||
  isSymbol(val) ||
  isNull(val) ||
  isUndefined(val);

import type { Dayjs } from 'dayjs';

import { convertToDayjs, type NullableDateValue } from './convertToDayjs';

type DateConversionType = 'ms' | 'isostring' | 'Date' | 'Dayjs';

type DateConversionResult<CT extends DateConversionType = 'isostring'> = CT extends 'ms'
  ? number
  : CT extends 'isostring'
    ? string
    : CT extends 'Date'
      ? Date
      : CT extends 'Dayjs'
        ? Dayjs
        : string;

/**
 * Convert passed raw date value to date value of passed type.
 */
export const convertDate = <CT extends DateConversionType = 'isostring'>(
  value?: NullableDateValue,
  type?: CT,
): DateConversionResult<CT> | undefined => {
  const dj = convertToDayjs(value);
  if (!dj) return;

  return (
    type === 'ms'
      ? dj.valueOf()
      : type === 'Date'
        ? dj.toDate()
        : type === 'Dayjs'
          ? dj
          : dj.toISOString()
  ) as DateConversionResult<CT>;
};

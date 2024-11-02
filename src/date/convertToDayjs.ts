import dayjs, { type Dayjs } from 'dayjs';

export type DateValue = string | number | Date | Dayjs;
export type NullableDateValue = DateValue | null | undefined;

/**
 * Creates `dayjs` object based on value.
 * If `value` is falsy or not valid for `dayjs` to parse returns `undefined`.
 */
export const convertToDayjs = (value?: NullableDateValue) => {
  if (!value) return;
  const dj = dayjs(value);
  if (!dj.isValid()) return;
  return dj;
};

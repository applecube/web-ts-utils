import { convertToDayjs, type NullableDateValue } from './convertToDayjs';

/**
 * Formats raw date value to readable using
 * [format](https://day.js.org/docs/en/display/format) and
 * [locale](https://day.js.org/docs/en/i18n/instance-locale).
 *
 * @example formatDate(1730505747597, 'YYYY-MM-DD', 'en')
 */
export const formatDate = (
  value?: NullableDateValue,
  format?: string,
  locale?: string,
  nullString: string = '*',
) => {
  let dj = convertToDayjs(value);
  if (!dj) return nullString;
  if (locale) dj = dj.locale(locale);
  return dj.format(format);
};

import type { UrlObject } from 'url';

import { isString } from '../check';

/**
 * Extracts `UrlObject` from provided `path`.
 *
 * @example buildUrlObject('/page/1?a=5#bar')
 * => { pathname: '/page/1', query: { a: 5 }, hash: 'bar' }
 */
export const extractUrlObject = (path: string | UrlObject): UrlObject => {
  if (!isString(path)) return path;

  const arr = path.split(/\?|#/);
  const queryArr = arr[1]?.split('&') || [];

  const query = queryArr.reduce((result, queryItem) => {
    const queryParams = queryItem.split('=');
    const queryKey = queryParams[0];
    const queryVal = queryParams[1].split(',');

    result[queryKey] = queryVal.length > 1 ? queryVal : queryVal[0];
    return result;
  }, {} as JsObject);

  return { pathname: arr[0], query, hash: arr[2] };
};

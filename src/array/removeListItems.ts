import { isListItem } from './isListItem';

/**
 * Returns new array with `list` items except passed ones.
 */
export const removeListItems = <T>(list: T[], ...items: T[]): T[] =>
  list.filter((el) => !isListItem(items, el));

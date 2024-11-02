import { isEmpty } from '../check';

/**
 * Generate csv row string from `item` object.
 * @param order columns order
 * @param item object to convert to row in specifed order
 * @returns csv row string
 * @example genCsvRow(['name', 'num'], { name: 'aaa', num: 1 })
 */
export const genCsvRow = (order: string[], item: JsObject) => {
  const propToCsvCell = (prop: string) => {
    const val = item[prop];
    if (isEmpty(val)) return '""';

    const str = String(val).replace(/"/g, '""');
    return `"${str}"`;
  };

  return order.map(propToCsvCell).join(',') + '\n';
};

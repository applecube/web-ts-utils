import { genCsvRow } from './genCsvRow';

/**
 * Generate CSV string from provided data.
 * @param order columns order
 * @param data csv content, each object converts to row in specified order
 * @param headers basically first item of data, should be used to specify headers of csv columns
 * @returns csv string
 * @example genCsv(['name', 'num'], [{ name: 'aaa', num: 1 }, { name: 'bbb', num: 2 }], { name: 'Name', num: 'Num' })
 */
export const genCsv = (order: string[], data: JsObject[], headers?: JsObject): string => {
  let content = 'data:text/csv;charset=utf-8,';

  if (headers) content += genCsvRow(order, headers);

  data.forEach((item) => {
    content += genCsvRow(order, item);
  });

  return content;
};

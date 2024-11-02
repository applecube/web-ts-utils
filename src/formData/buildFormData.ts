import { appendFormData, type FormDataFields } from './appendFormData';
import { isFormData } from '../check';

type BuildFormData = (fields: FormDataFields | FormData, strict?: boolean) => FormData;

/**
 * Creates `FormData` from passed plain object.
 *
 * @example buildFormData({ prop1: 'text', prop2: 3, prop3: file, prop4: {...}, prop5: [...] })
 */
export const buildFormData: BuildFormData = (fields, strict) => {
  if (isFormData(fields)) return fields;
  return appendFormData(new FormData())(fields, strict);
};

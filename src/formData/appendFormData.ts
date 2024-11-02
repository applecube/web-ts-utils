import { isArray, isBlob, isEmpty, isObject } from '../check';

export type FormDataFields = JsObject<Primitive | JsArray | JsObject | Blob>;

type FormDataAppend = (fields: FormDataFields, strict?: boolean) => FormData;
type GenFormDataAppend = (formData: FormData) => FormDataAppend;

/**
 * Returns function for adding fields to passed `formData`.
 *
 * @example appendFormData(formData)({ prop: 1 })
 */
export const appendFormData: GenFormDataAppend = (formData) => {
  return (fields, strict) => {
    for (const key in fields) {
      let value = fields[key];

      if (isEmpty(value)) continue;
      if (strict && !value) continue;

      if (!isBlob(value)) {
        if (isObject(value) || isArray(value)) value = JSON.stringify(value);
        value = String(value);
      }

      formData.append(key, value);
    }

    return formData;
  };
};

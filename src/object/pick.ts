/**
 * Picks passed props from object, returning new object only with them.
 */
export const pick = <O extends JsObject = JsObject, K extends keyof O = string>(
  obj: O,
  ...keys: K[]
): Pick<O, K> => {
  const result = {} as Pick<O, K>;
  for (const key of keys) {
    result[key] = obj[key];
  }
  return result;
};

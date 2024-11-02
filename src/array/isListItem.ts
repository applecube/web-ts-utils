/**
 * Same as `arr.includes(val)` but infers type of val for further usage.
 */
export const isListItem = <T>(arr: T[], val: unknown): val is T => {
  for (const item of arr) {
    if (item === val) return true;
  }
  return false;
};

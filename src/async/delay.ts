/**
 * Returns `Promise` which is resolved after `ms` milliseconds.
 *
 * @example await delay(5000);
 */
export const delay = (ms: number): Promise<void> => {
  if (ms <= 0) return Promise.resolve();
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const isPromise = <R = unknown>(val: unknown): val is Promise<R> =>
  val instanceof Promise;

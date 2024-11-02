type JsObjectKey = string | number | symbol;

interface JsObject<T = any> {
  [key: JsObjectKey]: T;
}

type JsArray = any[];

type AnyFunction = (...args: any[]) => any;

type EmptyFunction = () => void;

type Empty = null | undefined;

type Primitive = string | number | boolean | symbol | null | undefined;

type Nullable<T> = T | null;

type MaybePromise<T = any> = Promise<T> | T;

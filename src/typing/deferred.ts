export type Deferred<T> = {
  [P in keyof T]: Promise<T[P]>;
};

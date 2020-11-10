export type Proxify<T> = {
  [P in keyof T]: { get(): T[P]; set(v: T[P]): void };
};

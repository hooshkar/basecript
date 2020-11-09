export type KeysIfMatch<T, TMatch, K extends keyof T = keyof T> = K extends (
  T[K] extends TMatch ? K : never
)
  ? K
  : never;

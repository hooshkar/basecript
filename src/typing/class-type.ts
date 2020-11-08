export interface ClassType<T> {
  new (...args: unknown[]): T;
  readonly prototype: T;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
declare const US: unique symbol;

export type ArrayListenerType<T> = [T] extends [(...args: infer U) => any]
  ? U
  : [T] extends [void]
  ? []
  : [T];
export type ListenerType<T> = T extends (args: infer U) => any ? U : T;

export interface TypedEventEmitter<TMap, TEmit = TMap> {
  on<K extends keyof TMap>(
    event: K,
    listener: (args: ListenerType<TMap[K]>) => void
  ): this;
  on<K extends keyof TMap>(
    event: K,
    listener: (...args: ArrayListenerType<TMap[K]>) => void
  ): this;
  on(event: typeof US, listener: (...args: any[]) => any): void;

  addListener<P extends keyof TMap>(
    event: P,
    listener: (args: ListenerType<TMap[P]>) => void
  ): this;
  addListener<P extends keyof TMap>(
    event: P,
    listener: (...args: ArrayListenerType<TMap[P]>) => void
  ): this;
  addListener(event: typeof US, listener: (...args: any[]) => any): void;

  removeListener<P extends keyof TMap>(
    event: P,
    listener: (...args: any[]) => any
  ): this;
  removeListener(event: typeof US, listener: (...args: any[]) => any): void;

  once<P extends keyof TMap>(
    event: P,
    listener: (args: ListenerType<TMap[P]>) => void
  ): this;
  once<P extends keyof TMap>(
    event: P,
    listener: (...args: ArrayListenerType<TMap[P]>) => void
  ): this;
  once(event: typeof US, listener: (...args: any[]) => any): void;

  listenerCount<P extends keyof TMap>(type: P): number;
  listenerCount(type: typeof US): number;

  emit<P extends keyof TEmit>(event: P, args: ListenerType<TEmit[P]>): boolean;
  emit<P extends keyof TEmit>(
    event: P,
    ...args: ArrayListenerType<TEmit[P]>
  ): boolean;
  emit(event: typeof US, ...args: any[]): void;
}

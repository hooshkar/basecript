/* eslint-disable @typescript-eslint/no-explicit-any */
export type TypeOf<C> = C extends new (...args: any[]) => infer T ? T : C;

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Figure<T extends Record<string, any>> =
  | {
      [P in keyof T]?: T[P] extends Record<string, any> ? Figure<T[P]> : T[P];
    }
  | T;

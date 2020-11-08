/* eslint-disable @typescript-eslint/no-explicit-any */
export function ArgumentsCounter(args: IArguments, ...skip: unknown[]): number {
  return Object.keys(args)
    .map((k) => (args as any)[k])
    .filter((v) => !skip.includes(v)).length;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export function argsNoUndefined(args: IArguments): number {
  return Object.keys(args)
    .map((k) => (args as any)[k])
    .filter((v) => v !== undefined).length;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export function ArgumentsCounter(args: IArguments, ...skip: any[]): number {
  const a = Object.keys(args)
    .map((k) => args[k])
    .filter((v) => !skip.includes(v));
  return a.length;
}

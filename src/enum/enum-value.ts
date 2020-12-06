export function enumValue<T extends string | number>(): {
  [key in T]: string;
} {
  return undefined;
}

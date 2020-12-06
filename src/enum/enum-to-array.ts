export function enumToArray<
  T extends string,
  TEnumValue extends number | string
>(
  enumVariable: {
    [key in T]: TEnumValue;
  }
): string[] {
  return Object.keys(enumVariable).filter(
    (key) => !isNaN(Number(enumVariable[key]))
  );
}

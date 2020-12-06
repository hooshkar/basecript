/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function enumChecker<T extends string, TEnumValue extends string>(
  enumVariable: { [key in T]: TEnumValue }
) {
  const enumValues = Object.values(enumVariable);
  return (value: string): value is TEnumValue => enumValues.includes(value);
}
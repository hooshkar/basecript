/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Nullable } from "../typing";
import { ArgumentsCounter } from "./arguments-counter";

test("args count", () => {
  function MyFunc(a: string, b: Nullable<string>, c: string | undefined): void {
    expect(ArgumentsCounter(arguments)).toBe(3);
    expect(ArgumentsCounter(arguments, undefined, null, "")).toBe(0);
    expect(ArgumentsCounter(arguments, undefined, null)).toBe(1);
    expect(ArgumentsCounter(arguments, null)).toBe(2);
    expect(ArgumentsCounter(arguments, undefined)).toBe(2);
    expect(ArgumentsCounter(arguments, "")).toBe(2);
  }
  MyFunc("", null, undefined);
});

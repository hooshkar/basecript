import { Nullable } from "../typed";
import { args, argsNoUndefined, argsNoUndefinedOrNull } from "./index";

test("args count", () => {
    function MyFunc(a: string, b: Nullable<string>, c: string | undefined): void {
        expect(argsNoUndefinedOrNull(arguments)).toBe(1);
        expect(argsNoUndefined(arguments)).toBe(2);
        expect(args(arguments)).toBe(3);
    }
    MyFunc("", null, undefined);
});

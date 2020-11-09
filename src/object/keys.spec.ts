import { Keys } from "./keys";

class Foo {
  constructor(private a?: boolean, protected b?: string, public c?: number) {}
  public d!: number;
}

test("keys", () => {
  expect(Keys(new Foo())).toEqual(["a", "b", "c"]);
});

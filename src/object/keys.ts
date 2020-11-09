export function Keys<T>(o: T): Array<keyof T>;
export function Keys<T>(o: T): Array<string> {
  return Object.keys(o);
}

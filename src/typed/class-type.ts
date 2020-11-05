export interface ClassType<T> {
    new(...args: any[]): T; readonly prototype: T;
}
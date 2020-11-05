export function argsNoUndefined(args: IArguments) {
    return Object
        .keys(args)
        .map(k => (args as any)[k])
        .filter(v => v !== undefined)
        .length;
}

export function argsNoUndefinedOrNull(args: IArguments) {
    return Object
        .keys(args)
        .map(k => (args as any)[k])
        .filter(v => v != null && v != undefined)
        .length;
}

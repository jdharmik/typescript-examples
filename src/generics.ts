function identityFun<T>(arg : T) : T {
    return arg;
}


let res1: number = identityFun<number>(1);
let res2: string = identityFun<string>('string');

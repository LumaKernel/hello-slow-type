export const f1 = <T>() => <G>(x: T & G) => x;
export type F1 = typeof f1;
export const f2: F1 = () => (x) => x;
export const f3: <T>() => <G>(x: T & G) => T & G = () => (x) => x;

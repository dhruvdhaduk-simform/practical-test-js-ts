type GetRequiredKeys<T> = keyof {
    [K in keyof T as undefined extends T[K] ? never : K]: T[K];
};

type A = GetRequiredKeys<{ a: string; b?: number; c: boolean }>;
// Expected: "a" | "c"

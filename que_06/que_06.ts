// Create a type that can help us get getters and setters from any given interface

interface Attributes {
    id: number;
    name: string;
    address: {
        city: string;
        street: string;
    };
}

// example:
type Setters<T> = {
    [K in keyof T as K extends string ? `set${Capitalize<K>}` : never]: (
        val: T[K]
    ) => null;
};
type Getters<T> = {
    [K in keyof T as K extends string
        ? `get${Capitalize<K>}`
        : never]: () => T[K];
};

const attributeSetters: Setters<Attributes> = {
    setAddress: ({ city, street }) => null,
    setId: (value) => null,
    setName: (value) => null,
};

const attributeGetters: Getters<Attributes> = {
    getAddress: () => ({ city: '', street: '' }),
    getId: () => 0,
    getName: () => '',
};

interface User {
    name: string;
    age: number;
}

function isPerson(obj: unknown): obj is User {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        'name' in obj &&
        typeof obj.name === 'string' &&
        'age' in obj &&
        typeof obj.age === 'number'
    );
}

const person = { name: 'John', age: 30 };
if (isPerson(person)) {
    person;
    // Now TypeScript knows `person` is `{ name: string; age: number }`
}

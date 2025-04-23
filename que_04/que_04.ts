interface User {
    name: string;
    age: number;
}

function isPerson(obj: unknown): obj is User {
    if (typeof obj === 'object' && obj !== null) {
        if ('name' in obj && typeof obj.name === 'string') {
            if ('age' in obj && typeof obj.age === 'number') {
                return true;
            }
        }
    }
    return false;
}

const person = { name: 'John', age: 30 };
if (isPerson(person)) {
    person;
    // Now TypeScript knows `person` is `{ name: string; age: number }`
}

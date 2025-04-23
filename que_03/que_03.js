// // Write a function deepMerge(obj1, obj2) that returns a new object containing all keys from obj1 and obj2.

// // If a key exists in both:

// // and both values are objects (but not arrays), merge them recursively.

// // otherwise, use the value from obj2.


// // Do not mutate obj1 or obj2.

// // Example:

// const obj1 = {
//   user: { name: "Alice", age: 25 },
//   role: "admin"
// };
// const obj2 = {
//   user: { age: 30 },
//   active: true
// };

// const result = deepMerge(obj1, obj2);

// // Output:
// {
//   user: { name: "Alice", age: 30 },
//   role: "admin",
//   active: true
// }

function deepMerge(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return obj2;
    }

    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    const result = {};

    for (let i = 0; i < obj1Keys.length; i++) {
        const k = obj1Keys[i];

        const j = obj2Keys.indexOf(k);

        if (j === -1) {
            result[k] = obj1[k];
        }
        else {
            result[k] = deepMerge(obj1[k], obj2[k]);
            obj2Keys.splice(j, 1);
        }
    }

    for (let i = 0; i < obj2Keys.length; i++) {
        const k = obj2Keys[i];
        result[k] = obj2[k];
    }

    return result;
}

const obj1 = {
    user: { name: "Alice", age: 25 },
    role: "admin"
};
const obj2 = {
    user: { age: 30 },
    active: true
};

const result = deepMerge(obj1, obj2);

console.log(result);
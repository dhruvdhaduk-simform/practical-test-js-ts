function deepMerge(obj1, obj2) {
    // if obj1 or obj2 are primitive values, them don't perform recursion.
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return obj2;
    }

    // Get the keys of obj1 & obj2
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    const result = {};

    // Iterate over each key of obj1
    for (let i = 0; i < obj1Keys.length; i++) {
        const k = obj1Keys[i];

        // Find the current key of obj1 is in obj2Keys
        const j = obj2Keys.indexOf(k);

        if (j === -1) {
            // Add the value from obj1 if the key doesn't exist in obj2.
            result[k] = obj1[k];
        }
        else {
            // Recursively call deepMerge if the key exist in both obj1 & obj2.
            result[k] = deepMerge(obj1[k], obj2[k]);
            // Remove the current key from obj2Keys.
            obj2Keys.splice(j, 1);
        }
    }

    // Iterate over each key of obj2 and add it in result.
    for (let i = 0; i < obj2Keys.length; i++) {
        const k = obj2Keys[i];
        result[k] = obj2[k];
    }

    return result;
}

const obj1 = {
    user: { name: "Alice", age: 25 },
    role: "admin",
};
const obj2 = {
    user: { age: 30 },
    active: true,
};

const result = deepMerge(obj1, obj2);

console.log(result);
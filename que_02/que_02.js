"use strict";

// // Array Deep Flatten with Depth Limit

// const input = [1, [2, [3, [4, [5]]]]];

// output: [1, 2, 3, [4, [5]]]

function flatten(arr, limit) {
    if (limit <= 0)
        return arr;

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result.push(...arr[i]);
        }
        else {
            result.push(arr[i]);
        }
    }

    return flatten(result, limit - 1);

}

const input = [1, [2, [3, [4, [5]]]]];

const output = flatten(input, 2);

console.log(output);
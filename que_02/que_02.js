"use strict";

function flatten(arr, limit) {
    // Terminating condition for recursion.
    if (limit <= 0)
        return arr;

    const result = [];

    // Iterate over each item in arr.
    for (let i = 0; i < arr.length; i++) {
        // push each items in current item if it is an array.
        if (Array.isArray(arr[i])) {
            result.push(...arr[i]);
        }
        // push the current item.
        else {
            result.push(arr[i]);
        }
    }

    // Recursively call flatten with (limit - 1)
    return flatten(result, limit - 1);

}

const input = [1, [2, [3, [4, [5]]]]];

const output = flatten(input, 2);

console.log(output);
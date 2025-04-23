"use strict";

function mergeData(data, idKey) {
    // Stored the merged data in array.
    const result = [];

    // Iterate over each entry in data
    for (let i = 0; i < data.length; i++) {
        // Find the already stored merged item for current entry's id.
        const acc = result.find(obj => obj.customerId === data[i].customerId);
        // Push the current entry in result if the accumulator doesn't exist.
        if (!acc) {
            result.push({ ...data[i], utensils: [...data[i].utensils] });
            continue;
        }

        // Iterate over each key in accumulator to update it.
        for (const k in acc) {
            // Do not update the idKey
            if (k === idKey) continue;

            // Update the number
            if (typeof acc[k] === 'number') {
                acc[k] += data[i][k];
            }
            // Update the array while handling duplicate items.
            else if (Array.isArray(acc[k])) {
                for (const item of data[i][k]) {
                    if (!acc[k].includes(item))
                        acc[k].push(item);
                }
            }
        }
    }
    return result;
}


const input = [
    { customerId: 5, minutes: 45, utensils: ['table'] },
    { customerId: 3, minutes: 120, utensils: ['chopsticks'] },
    { customerId: 9, minutes: 15, utensils: ['spoon'] },
    { customerId: 3, minutes: 90, utensils: ['fork', 'knife'] },
    { customerId: 3, minutes: 180, utensils: ['plate'] },
    { customerId: 6, minutes: 180, utensils: ['bowl'] },
    { customerId: 6, minutes: 180, utensils: ['glass'] },
];

const output = mergeData(input, 'customerId');

console.log(output);
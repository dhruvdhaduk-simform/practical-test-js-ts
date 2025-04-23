"use strict";

// // Create merge function that accepts data like below and merges them by given    customerId
// [
//     { customerId: 5, minutes: 45, utensils: ['table'] },
//     { customerId: 3, minutes: 120, utensils: ['chopsticks'] },
//     { customerId: 9, minutes: 15, utensils: ['spoon'] },
//     { customerId: 3, minutes: 90, utensils: ['fork', 'knife'] },
//     { customerId: 3, minutes: 180, utensils: ['plate'] },
//     { customerId: 6, minutes: 180, utensils: ['bowl'] },
//     { customerId: 6, minutes: 180, utensils: ['glass'] },
// ]

// //result should be like below
// [
//     { customerId: 5, minutes: 45, utensils: ['table'] },
//     { customerId: 3, minutes: 390, utensils: ['chopsticks', 'fork', 'knife', 'plate'] },
//     { customerId: 9, minutes: 15, utensils: ['spoon'] },
//     { customerId: 6, minutes: 360, utensils: ['bowl', 'glass'] }
// ]

function mergeData(data) {
    const result = [];
    for (let i = 0; i < data.length; i++) {
        const acc = result.find(obj => obj.customerId === data[i].customerId);
        if (!acc) {
            result.push({ ...data[i], utensils: [...data[i].utensils] });
            continue;
        }
        acc.minutes += data[i].minutes;
        acc.utensils = [...acc.utensils, ...data[i].utensils];
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

const output = mergeData(input);

console.log(output);
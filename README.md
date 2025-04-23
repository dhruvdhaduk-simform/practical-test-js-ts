# SET 1

## Que 1 :

```javascript
// Create merge function that accepts data like below and merges them by given    customerId
[
    { customerId: 5, minutes: 45, utensils: ['table'] },
    { customerId: 3, minutes: 120, utensils: ['chopsticks'] },
    { customerId: 9, minutes: 15, utensils: ['spoon'] },
    { customerId: 3, minutes: 90, utensils: ['fork', 'knife'] },
    { customerId: 3, minutes: 180, utensils: ['plate'] },
    { customerId: 6, minutes: 180, utensils: ['bowl'] },
    { customerId: 6, minutes: 180, utensils: ['glass'] },
][
    //result should be like below
    ({ customerId: 5, minutes: 45, utensils: ['table'] },
    {
        customerId: 3,
        minutes: 390,
        utensils: ['chopsticks', 'fork', 'knife', 'plate'],
    },
    { customerId: 9, minutes: 15, utensils: ['spoon'] },
    { customerId: 6, minutes: 360, utensils: ['bowl', 'glass'] })
];
```

## Que 2 :

```javascript
// Array Deep Flatten with Depth Limit

const input = [1, [2, [3, [4, [5]]]]];

output: [1, 2, 3, [4, [5]]];
```

## Que 3 :

```javascript
// Write a function deepMerge(obj1, obj2) that returns a new object containing all keys from obj1 and obj2.

// If a key exists in both:

// and both values are objects (but not arrays), merge them recursively.

// otherwise, use the value from obj2.


// Do not mutate obj1 or obj2.

// Example:

const obj1 = {
  user: { name: "Alice", age: 25 },
  role: "admin"
};
const obj2 = {
  user: { age: 30 },
  active: true
};

const result = deepMerge(obj1, obj2);

// Output:
{
  user: { name: "Alice", age: 30 },
  role: "admin",
  active: true
}
```

const prices = [2, 4, 6, 8, 10, 12];

//  got through each item
// execute the callback using the accumulated values and the current value
// use the result in the next iteration
const sum = prices.reduce((acc, currentValue) => {
    return acc + currentValue;
});

console.log(sum); // undefined

function getBudgets(arr) {

    return arr.reduce((acc, currentValue) => {
        console.log(acc, currentValue);

        return acc + currentValue.budget;
    }, 0);
}

const people = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
];

console.log(getBudgets(people)) // 65700

// reduce returns a value -> the value can be of different types: array, number, string, object
function getNames(arr) {
    return arr.reduce((acc, currentValue) => {
        return `${acc} ${currentValue.name}`;
    }, '');
}

console.log(getNames(people)) // John Steve Martin


function reduceLookAlike(arr, callbackFunc, initialAcc = null) {
    // Initialize an accumulator -> this is a variable which we will update things on every iteration
    let acc;
    // Next, we add some logic to account for the cases when no initial value is passed for the accumulator
    let initialIndex = 0;

    // Check if it is other than null so we can to avoid parsing actual initial values as falsy, for example 0 or ''
    if (initialAcc !== null) {
        acc = initialAcc;
    } else {
        acc = arr[0];
        initialIndex = 1;
    }

    // go through each item in the array
    // accumulate values
    for (let i = initialIndex; i < arr.length; i++) {
        const item = arr[i];

        // Update accumulator, so it has a new value in the next iteration
        acc = callbackFunc(acc, item); // 0, 2 -> 2, 4 -> 6, 6 -> 12, 8 ...
    }

    return acc;
}

const reduceLookAlikeSum = reduceLookAlike(prices, (acc, currentValue) => {
    return acc + currentValue;
});

console.log(reduceLookAlikeSum); // 0

const reduceLookAlikeNames = reduceLookAlike(people, (acc, currentValue) => {
    return `${acc} ${currentValue.name}`;
}, '');

console.log(reduceLookAlikeNames);
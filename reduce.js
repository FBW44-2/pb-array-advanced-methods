const prices = [2, 4, 6, 8, 10, 12];

//  got through each item
// execute the callback using the accumulated values and the current value
// use the result in the next iteration

const sum = prices.reduce((acc, currentValue) => {
    return acc + currentValue;
});


function reduceLookAlike(arr, callbackFunc, initialAcc) {
    let acc;

    if (initialAcc) {
        acc = initialAcc;
    } else {
        acc = arr[0];
    }

    let initialIndex = initialAcc ? 0 : 1;

    for (let i = initialIndex; i < arr.length; i++) {
        const item = arr[i];

        acc = callbackFunc(acc, item);
    }

    return acc;
}

let reduceLookAlikeSum = reduceLookAlike(prices, (acc, currentValue) => {
    console.log(acc, currentValue, '#########################');

    return acc + currentValue;
});
console.log(reduceLookAlikeSum, '42 ######');
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
const prices = [2, 4, 6, 8, 10, 12];

const formattedPrices = prices.map(function (value, index) {
    return `${value} €`;
});

// const formattedPrices = prices.map((value, index) => { // using arrow functions
//     return `${value} €`;
// });

// const formattedPrices = prices.map((value, index) => `${value} €`); // using arrow functions with implicit return

console.log(prices, formattedPrices); // []

// Our own map look alike
function mapLookAlike(arr, callbackFunc) {
    let newArr = [];

    // go through each item
    // call the function
    // update the new arr
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];

        newArr.push(callbackFunc(item, i));
    }

    return newArr;
}

const americanPrices = mapLookAlike(prices, (value) => {
    return `$ ${value}`;
});

console.log(americanPrices);
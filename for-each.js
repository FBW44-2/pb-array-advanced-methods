// Object
// keys values

// Array
// map filter reduce forEach

const arr = [2, 4, 6, 8, 10, 12];

// for loop
// for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];
// }

// for of loop
// for (let item of arr) {
// }

const updatedArr = [];
const forEachCallBack = function (val, i) {
    // val = val + 10;
    // updatedArr.push(val);

    console.log(val, i);
    // return index;
};

arr.forEach(forEachCallBack);

// const result = arr.forEach(forEachCallBack);
// console.log(result); // ?? -> undefined because forEach does not do anything with the value returned by the iterator function, forEach itself returns nothing (void)


// console.log(arr, updatedArr);

// Behind the scenes
// for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];

//     forEachCallBack(item, i);
// }


// console.log(forEachCallBack(3, 10));
// console.log('print a message');